const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  product: {
    id: { type: Number },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
  },
  deliveryDetails: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
  },
  paymentDetails: {
    paymentMethod: { type: String, required: true },
    cardNumber: { type: String }, // Optional, masked or blank for COD/UPI
    upiId: { type: String }, // Optional for UPI
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Order', OrderSchema);
