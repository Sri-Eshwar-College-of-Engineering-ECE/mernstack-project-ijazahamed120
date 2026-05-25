import React, { useState } from 'react';
import './CustomerCare.css';

function CustomerCare() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Kisan Call Center",
      description: "The Kisan Call Center provides expert agricultural advice to farmers across India. Our experts are available 24/7 to answer your farming-related questions in your local language.",
      callCenterInfo: "About Kisan Call Center",
      features: [
        "24x7 availability",
        "Expert agricultural advice",
        "Support in local languages",
        "Free service for farmers",
        "Immediate solutions for farming issues",
        "Weather and market information"
      ],
      services: "Our Services",
      servicesList: [
        "Crop management advice",
        "Disease and pest control",
        "Weather-based farming tips",
        "Market prices information",
        "Government scheme details",
        "Technical support for farming"
      ],
      callNow: "Call Now",
      tollfree: "Toll Free Number",
      operatingHours: "Available 24/7",
      toggle: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      title: "கிசான் அழைப்பு மையம்",
      description: "கிசான் அழைப்பு மையம் இந்தியா முழுவதும் உள்ள விவசாயிகளுக்கு நிபுணர் விவசாய ஆலோசனையை வழங்குகிறது. எங்கள் நிபுணர்கள் உங்கள் உள்ளூர் மொழியில் விவசாயம் தொடர்பான கேள்விகளுக்கு 24/7 பதிலளிக்க கிடைப்பார்கள்.",
      callCenterInfo: "கிசான் அழைப்பு மையம் பற்றி",
      features: [
        "24x7 கிடைக்கும்",
        "நிபுணர் விவசாய ஆலோசனை",
        "உள்ளூர் மொழிகளில் ஆதரவு",
        "விவசாயிகளுக்கு இலவச சேவை",
        "விவசாய பிரச்சினைகளுக்கு உடனடி தீர்வுகள்",
        "வானிலை மற்றும் சந்தை தகவல்"
      ],
      services: "எங்கள் சேவைகள்",
      servicesList: [
        "பயிர் மேலாண்மை ஆலோசனை",
        "நோய் மற்றும் பூச்சி கட்டுப்பாடு",
        "வானிலை அடிப்படையிலான விவசாய குறிப்புகள்",
        "சந்தை விலை தகவல்",
        "அரசு திட்ட விவரங்கள்",
        "விவசாயத்திற்கான தொழில்நுட்ப ஆதரவு"
      ],
      callNow: "இப்போது அழைக்கவும்",
      tollfree: "கட்டணமில்லா எண்",
      operatingHours: "24/7 கிடைக்கும்",
      toggle: "Translate to English"
    }
  };

  const lang = content[language];

  return (
    <div className="care-wrapper">
      <div className="care-container">
        <div className="care-content">
          <div className="header">
            <h1>{lang.title}</h1>
            <button 
              className="lang-toggle"
              onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
            >
              {lang.toggle}
            </button>
          </div>

          <div className="description">
            <p>{lang.description}</p>
          </div>

          <div className="call-section">
            <h2>{lang.tollfree}</h2>
            <a href="tel:18001801551" className="phone-number">
              1800-180-1551
            </a>
            <p className="operating-hours">{lang.operatingHours}</p>
          </div>

          <div className="features-section">
            <h2>{lang.callCenterInfo}</h2>
            <ul className="features-list">
              {lang.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="services-section">
            <h2>{lang.services}</h2>
            <ul className="services-list">
              {lang.servicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="call-to-action">
            <a href="tel:18001801551" className="call-button">
              {lang.callNow}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCare;
