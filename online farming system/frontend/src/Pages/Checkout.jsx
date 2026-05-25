import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { state } = useLocation();
  const product = state?.product;

  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    pincode: "",
    state: "",
    country: ""
  });

  const content = {
    en: {
      heading: "Checkout",
      name: "Full Name",
      mobile: "Mobile Number",
      address: "Address",
      pincode: "Pincode",
      state: "State",
      country: "Country",
      proceed: "Proceed to Checkout",
      toggle: "தமிழ்",
      noProduct: "No product selected",
      orderSuccess: "Order Placed Successfully!"
    },
    ta: {
      heading: "காசோலைச் செயல்",
      name: "முழு பெயர்",
      mobile: "மொபைல் எண்",
      address: "முகவரி",
      pincode: "அஞ்சல் குறியீடு",
      state: "மாநிலம்",
      country: "நாடு",
      proceed: "காசோலையை தொடரவும்",
      toggle: "English",
      noProduct: "தயாரிப்பு எதுவும் தேர்ந்தெடுக்கப்படவில்லை",
      orderSuccess: "உங்கள் ஆர்டர் வெற்றிகரமாக இடம்பெற்றது!"
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    alert(content[language].orderSuccess);
  };

  if (!product) return <div>{content[language].noProduct}</div>;

  return (
    <div className="checkout-container">
      <button
        onClick={() => setLanguage(language === "en" ? "ta" : "en")}
        className="language-toggle"
      >
        {content[language].toggle}
      </button>

      <h2>{content[language].heading}</h2>
      <div className="product-info">
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
      </div>

      <form className="checkout-form">
        <input
          name="name"
          placeholder={content[language].name}
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          placeholder={content[language].mobile}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder={content[language].address}
          onChange={handleChange}
          required
        />
        <input
          name="pincode"
          placeholder={content[language].pincode}
          onChange={handleChange}
          required
        />
        <input
          name="state"
          placeholder={content[language].state}
          onChange={handleChange}
          required
        />
        <input
          name="country"
          placeholder={content[language].country}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={handleCheckout}>
          {content[language].proceed}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
