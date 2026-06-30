const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');
const dns = require('dns');

// Set IPv4 preference for DNS resolution to resolve MongoDB DNS issues in Node
dns.setDefaultResultOrder('ipv4first');

// Override DNS servers to Google DNS to bypass local sandbox DNS issues
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
  console.warn("Could not set custom DNS servers:", e.message);
}

// Load environment variables from the root folder's .env file
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const User = require('./models/User');
const Order = require('./models/Order');

const app = express();
const PORT = process.env.PORT || 5001;

// CORS manual middleware to avoid extra dependency issues
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  if (req.method === "OPTIONS") {
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());

// Resolve SRV and TXT records manually if mongodb+srv resolves to querySrv ECONNREFUSED
async function resolveMongoSrv(uri) {
  if (!uri.startsWith('mongodb+srv://')) {
    return uri;
  }
  try {
    const match = uri.match(/^mongodb\+srv:\/\/([^:]+):([^@]+)@([^/?]+)([^]*)$/);
    if (!match) return uri;
    const [, username, password, srvHost, rest] = match;
    const [dbAndQuery] = rest.split('?');
    const dbName = dbAndQuery.replace(/^\//, '');

    console.log(`Manually resolving SRV records for ${srvHost}...`);
    const srvRecords = await dns.promises.resolveSrv(`_mongodb._tcp.${srvHost}`);
    if (!srvRecords || srvRecords.length === 0) {
      throw new Error("No SRV records found");
    }

    const hosts = srvRecords.map(r => `${r.name}:${r.port}`).join(',');

    console.log(`Manually resolving TXT records for ${srvHost}...`);
    let replicaSetOpt = '';
    let authSourceOpt = 'authSource=admin';
    try {
      const txtRecords = await dns.promises.resolveTxt(srvHost);
      if (txtRecords && txtRecords.length > 0) {
        const txtStr = txtRecords.flat().join('&');
        if (txtStr.includes('replicaSet=')) {
          replicaSetOpt = txtStr;
        }
      }
    } catch (txtErr) {
      console.warn("TXT resolution failed:", txtErr.message);
    }

    const options = [
      'ssl=true',
      replicaSetOpt,
      replicaSetOpt.includes('authSource=') ? '' : authSourceOpt
    ].filter(Boolean).join('&');

    const directUri = `mongodb://${username}:${password}@${hosts}/${dbName}?${options}`;
    console.log("Constructed direct connection URI successfully.");
    return directUri;
  } catch (err) {
    console.error("Manual SRV resolution helper failed, using original URI:", err.message);
    return uri;
  }
}

// Connect to MongoDB
const mongoUri = process.env.MONGO_URL;
if (!mongoUri) {
  console.error("FATAL ERROR: MONGO_URL environment variable is not defined in .env file.");
  process.exit(1);
}

async function connectDB() {
  try {
    const connectionUri = await resolveMongoSrv(mongoUri);
    await mongoose.connect(connectionUri);
    console.log("Connected successfully to MongoDB Database.");
  } catch (err) {
    console.error("MongoDB Connection Error: ", err);
  }
}

connectDB();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: "running", database: mongoose.connection.readyState === 1 ? "connected" : "disconnected" });
});

// Authentication: Signup Route
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Please provide name, email, and password." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User with this email already exists." });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });

  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ success: false, message: "Server error during registration." });
  }
});

// Authentication: Login Route
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }

    res.status(200).json({
      success: true,
      message: "Login successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        mobile: user.mobile
      }
    });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server error during login." });
  }
});

// Update/Save Profile Details
app.post('/api/auth/profile', async (req, res) => {
  try {
    const { email, name, age, mobile } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required to update profile." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    if (name) user.name = name;
    if (age) user.age = Number(age);
    if (mobile) user.mobile = mobile;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        mobile: user.mobile
      }
    });

  } catch (err) {
    console.error("Profile Update Error:", err);
    res.status(500).json({ success: false, message: "Server error during profile update." });
  }
});

// Order Placement Route
app.post('/api/orders', async (req, res) => {
  try {
    const { product, deliveryDetails, paymentDetails } = req.body;

    if (!product || !deliveryDetails || !paymentDetails) {
      return res.status(400).json({ success: false, message: "Missing required order information." });
    }

    const newOrder = new Order({
      product,
      deliveryDetails,
      paymentDetails
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully.",
      orderId: newOrder._id
    });

  } catch (err) {
    console.error("Order Placement Error:", err);
    res.status(500).json({ success: false, message: "Server error placing order." });
  }
});

// Mandi Prices Live Simulation
let mandiPrices = {
  Paddy: { price: 3500, change: 150, trend: "High Demand", status: "up", base: 3350 },
  Tomato: { price: 2200, change: -300, trend: "Increased Supply", status: "down", base: 2500 },
  Wheat: { price: 2650, change: 50, trend: "Stable", status: "up", base: 2600 },
  Onion: { price: 1800, change: 200, trend: "Steady Demand", status: "up", base: 1600 }
};

// Fluctuate prices every 5 seconds to simulate a live active trading market
setInterval(() => {
  Object.keys(mandiPrices).forEach(key => {
    const crop = mandiPrices[key];
    const changeAmount = Math.floor(Math.random() * 80) - 40; // change by +/- 40 max
    crop.price = Math.max(800, crop.price + changeAmount); // make sure it stays positive
    crop.change = crop.price - crop.base;
    crop.status = crop.change >= 0 ? "up" : "down";
    
    // adjust trend messages based on price change
    if (crop.change > 150) {
      crop.trend = "High Demand";
    } else if (crop.change < -150) {
      crop.trend = "Increased Supply";
    } else {
      crop.trend = "Steady Demand";
    }
  });
}, 5000);

app.get('/api/mandi-prices', (req, res) => {
  res.json({ success: true, prices: mandiPrices });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
