import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [language, setLanguage] = useState(localStorage.getItem("preferredLanguage") || "en");
  const [userData, setUserData] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "ta" : "en";
    setLanguage(nextLang);
    localStorage.setItem("preferredLanguage", nextLang);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userProfile"));
    setUserData(data || {});
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleNavigation = (path) => {
    if (path === "/dashboard") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  const content = {
    en: {
      welcome: "Welcome",
      paragraph: `Agriculture, Horticulture, Animal Husbandry, and Fertilizer Management together form the foundation of rural development and sustainable farming. This platform helps empower every farmer with the right tools, modern techniques, and updated knowledge to improve productivity. Discover efficient irrigation, organic and chemical fertilizers, livestock care, and high-value crop management. Let's work together to ensure food security, economic stability, and a greener planet.`,
      agri: "Explore Agriculture",
      agriDesc:
        "Understand modern crop cultivation, irrigation, pest control, and climate-smart farming practices to improve yield and sustainability.",
      horti: "Explore Horticulture",
      hortiDesc:
        "Learn how to grow fruits, vegetables, herbs, and flowers with smart gardening methods, greenhouse techniques, and efficient harvesting.",
      animal: "Animal Husbandry",
      animalDesc:
        "Get guidance on cattle, poultry, and goat rearing, disease control, breeding, feeding, and shelter management for animal wellness.",
      fertilizer: "Fertilizer Information",
      fertilizerDesc:
        "Explore different fertilizer types, NPK balance, composting, organic options, and proper usage to enhance soil fertility.",
      pestTitle: "Pest & Disease Identification",
      pestDesc1: "View disease images, symptoms, and treatment suggestions in one place.",
      pestDesc2: "Detect crop problems quickly and learn how to respond effectively.",
      pestDesc3: "Click to open the identification page and protect your farm.",
      edit: "Edit Profile",
      toggle: "தமிழில் மொழிபெயர் செய்ய",
    },
    ta: {
      welcome: "நல்வரவு",
      paragraph: `விவசாயம், தோட்டக்கலை, கால்நடை பராமரிப்பு மற்றும் உர மேலாண்மை ஆகியவை ஊரக வளர்ச்சியின் அடிப்படையாகும். இந்த தளம் நவீன தொழில்நுட்பங்கள் மற்றும் அறிவுகளுடன் விவசாயிகளை வலுப்படுத்த உதவுகிறது. நீர்ப்பாசனம், உரம், கால்நடை பராமரிப்பு மற்றும் உயர்தர பயிர் பராமரிப்பு ஆகியவற்றில் வழிகாட்டுதலை பெறுங்கள். உணவுப் பாதுகாப்பு மற்றும் பசுமை உலகத்தை உருவாக்குவோம்.`,
      agri: "விவசாயத்தை ஆராயுங்கள்",
      agriDesc:
        "நவீன பயிர் வளர்ப்பு, பூச்சிக்கொல்லி மேலாண்மை மற்றும் நிலைத்த விவசாயம் குறித்து அறிக.",
      horti: "தோட்டக்கலையை ஆராயுங்கள்",
      hortiDesc:
        "பழங்கள், காய்கறிகள், மூலிகைகள் மற்றும் பூக்களை வளர்ப்பதற்கான நவீன முறைகளை அறிக.",
      animal: "கால்நடை பராமரிப்பு",
      animalDesc:
        "மாடுகள், கோழிகள் மற்றும் ஆடுகள் ஆகியவற்றை வளர்ப்பது, நோய் தடுப்பு மற்றும் உணவு மேலாண்மையை அறிக.",
      fertilizer: "உர் தகவல்",
      fertilizerDesc:
        "உர வகைகள், உரமிடும் முறைகள் மற்றும் இயற்கை உரங்களைப் பற்றி விரிவாக அறிக.",
      pestTitle: "பூச்சி மற்றும் நோய் கண்டறிதல்",
      pestDesc1: "நோய்கள் மற்றும் கொசு பிரச்சனைகளின் படங்கள், அறிகுறிகள் மற்றும் சிகிச்சை ஆலோசனைகள்.",
      pestDesc2: "உங்கள் பயிர்களுக்கு வந்த பிரச்சனையை விரைவில் கண்டறிந்து தீர்வு அறிக.",
      pestDesc3: "திட்டத்தை திறந்து உங்கள் விவசாயப்பணியை பாதுகாக்கவும்.",
      edit: "சுயவிவரத்தை திருத்தவும்",
      toggle: "Translate to English",
    },
  };

  const lang = content[language];

  return (
    <div className="dashboard-bg">
      <nav className="dashboard-navbar">
        <ul>
          <li onClick={() => handleNavigation("/dashboard")}>Home</li>
          <li onClick={() => handleNavigation("/products")}>Products</li>
          <li onClick={() => handleNavigation("/weather")}>Weather Forecasting</li>
          <li onClick={() => handleNavigation("/market-prices")}>Market Prices</li>
          <li onClick={() => handleNavigation("/yield-estimator")}>Yield Estimator</li>
          <li onClick={() => handleNavigation("/about")}>About</li>
          <li onClick={() => handleNavigation("/customer-care")}>Customer Care</li>
        </ul>
      </nav>

      <img
        src="https://img.freepik.com/premium-photo/scenic-view-lake-against-sky_1048944-19855651.jpg?w=826"
        alt="Background"
        className="background-img"
      />

      <div className="overlay-content">
        <div className="dashboard-header">
          <h1 className="welcome-title">{lang.welcome}</h1>
          <div className="profile-container-wrapper">
            <div className="profile-info" onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: "pointer" }}>
              <img 
                src={userData.profilePic || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
                alt="Profile" 
                className="profile-pic" 
              />
              <p className="profile-name">{userData.name || "Farmer"}</p>
            </div>

            {showDropdown && (
              <div className="profile-dropdown">
                <h3>Profile Details</h3>
                <div className="dropdown-item"><strong>Name:</strong> {userData.name}</div>
                <div className="dropdown-item"><strong>Email:</strong> {userData.email}</div>
                <div className="dropdown-item"><strong>Age:</strong> {userData.age || "N/A"}</div>
                <div className="dropdown-item"><strong>Mobile:</strong> {userData.mobile || "N/A"}</div>
                <hr className="dropdown-divider" />
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>

        <div className="dashboard-content">
          <p className="description">{lang.paragraph}</p>

          <div className="section-buttons big-buttons">
            <div className="button-section">
              <button onClick={() => navigate("/agriculture")}>{lang.agri}</button>
              <p className="button-desc">{lang.agriDesc}</p>
            </div>
            <div className="button-section">
              <button onClick={() => navigate("/horticulture")}>{lang.horti}</button>
              <p className="button-desc">{lang.hortiDesc}</p>
            </div>
            <div className="button-section">
              <button onClick={() => navigate("/animal-husbandry")}>{lang.animal}</button>
              <p className="button-desc">{lang.animalDesc}</p>
            </div>
            <div className="button-section">
              <button onClick={() => navigate("/fertilizer")}>{lang.fertilizer}</button>
              <p className="button-desc">{lang.fertilizerDesc}</p>
            </div>
          </div>



          <button
            className="lang-toggle"
            onClick={() => setLanguage(language === "en" ? "ta" : "en")}
          >
            {lang.toggle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
