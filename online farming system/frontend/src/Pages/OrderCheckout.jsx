import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderCheckout.css';

function OrderCheckout({ language = 'en' }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    upiId: ''
  });

  const content = {
    en: {
      title: "Checkout",
      deliveryDetails: "Delivery Details",
      payment: "Payment",
      confirmation: "Order Confirmation",
      name: "Full Name",
      phone: "Phone Number",
      email: "Email",
      address: "Address",
      city: "City",
      state: "State",
      pincode: "PIN Code",
      next: "Next",
      back: "Back",
      paymentMethod: "Select Payment Method",
      cod: "Cash on Delivery",
      card: "Credit/Debit Card",
      upi: "UPI",
      cardNumber: "Card Number",
      cardExpiry: "Expiry Date (MM/YY)",
      cardCvv: "CVV",
      upiId: "UPI ID",
      placeOrder: "Place Order",
      orderSuccess: "Order Placed Successfully!"
    },
    ta: {
      title: "வாங்குதல்",
      deliveryDetails: "விநியோக விவரங்கள்",
      payment: "கட்டணம்",
      confirmation: "ஆர்டர் உறுதிப்படுத்தல்",
      name: "முழு பெயர்",
      phone: "தொலைபேசி எண்",
      email: "மின்னஞ்சல்",
      address: "முகவரி",
      city: "நகரம்",
      state: "மாநிலம்",
      pincode: "அஞ்சல் குறியீடு",
      next: "அடுத்து",
      back: "பின்னால்",
      paymentMethod: "கட்டண முறையைத் தேர்ந்தெடுக்கவும்",
      cod: "பெறும்போது பணம் செலுத்துதல்",
      card: "கிரெடிட்/டெபிட் கார்டு",
      upi: "யுபிஐ",
      cardNumber: "கார்டு எண்",
      cardExpiry: "காலாவதி தேதி (MM/YY)",
      cardCvv: "CVV",
      upiId: "UPI ஐடி",
      placeOrder: "ஆர்டர் செய்யவும்",
      orderSuccess: "ஆர்டர் வெற்றிகரமாக வைக்கப்பட்டது!"
    }
  };

  const lang = content[language];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order data to your backend
    alert(lang.orderSuccess);
    navigate('/dashboard');
  };

  const renderDeliveryForm = () => (
    <div className="form-section">
      <h2>{lang.deliveryDetails}</h2>
      <input
        type="text"
        name="name"
        placeholder={lang.name}
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder={lang.phone}
        value={formData.phone}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={lang.email}
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="address"
        placeholder={lang.address}
        value={formData.address}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="city"
        placeholder={lang.city}
        value={formData.city}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="state"
        placeholder={lang.state}
        value={formData.state}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="pincode"
        placeholder={lang.pincode}
        value={formData.pincode}
        onChange={handleInputChange}
        required
      />
      <button onClick={handleNext}>{lang.next}</button>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="form-section">
      <h2>{lang.payment}</h2>
      <div className="payment-methods">
        <div className="payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={formData.paymentMethod === 'cod'}
            onChange={handleInputChange}
          />
          <label>{lang.cod}</label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={formData.paymentMethod === 'card'}
            onChange={handleInputChange}
          />
          <label>{lang.card}</label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="upi"
            checked={formData.paymentMethod === 'upi'}
            onChange={handleInputChange}
          />
          <label>{lang.upi}</label>
        </div>
      </div>

      {formData.paymentMethod === 'card' && (
        <div className="card-details">
          <input
            type="text"
            name="cardNumber"
            placeholder={lang.cardNumber}
            value={formData.cardNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cardExpiry"
            placeholder={lang.cardExpiry}
            value={formData.cardExpiry}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cardCvv"
            placeholder={lang.cardCvv}
            value={formData.cardCvv}
            onChange={handleInputChange}
          />
        </div>
      )}

      {formData.paymentMethod === 'upi' && (
        <input
          type="text"
          name="upiId"
          placeholder={lang.upiId}
          value={formData.upiId}
          onChange={handleInputChange}
        />
      )}

      <div className="button-group">
        <button onClick={handleBack}>{lang.back}</button>
        <button onClick={handleSubmit}>{lang.placeOrder}</button>
      </div>
    </div>
  );

  return (
    <div className="checkout-container">
      <h1>{lang.title}</h1>
      <div className="progress-bar">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && renderDeliveryForm()}
        {step === 2 && renderPaymentForm()}
      </form>
    </div>
  );
}

export default OrderCheckout;
