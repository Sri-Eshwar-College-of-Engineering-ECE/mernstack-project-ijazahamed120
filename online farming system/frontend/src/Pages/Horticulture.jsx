import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Horticulture.css';

function Horticulture() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Horticulture",
      description: "Explore different types of fruits and vegetables cultivation",
      fruits: "Fruits",
      vegetables: "Vegetables",
      fruitsDesc: "Discover various fruit varieties and their cultivation techniques",
      vegetablesDesc: "Learn about vegetable farming and best practices",
      toggleLang: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      title: "தோட்டக்கலை",
      description: "பழங்கள் மற்றும் காய்கறிகள் சாகுபடி வகைகளை ஆராயுங்கள்",
      fruits: "பழங்கள்",
      vegetables: "காய்கறிகள்",
      fruitsDesc: "பல்வேறு பழ வகைகள் மற்றும் அவற்றின் சாகுபடி நுட்பங்களைக் கண்டறியவும்",
      vegetablesDesc: "காய்கறி விவசாயம் மற்றும் சிறந்த நடைமுறைகளைப் பற்றி அறியவும்",
      toggleLang: "Translate to English"
    }
  };

  const lang = content[language];

  return (
    <div className="horticulture-container">
      <div className="header">
        <h1>{lang.title}</h1>
        <button 
          className="lang-toggle"
          onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
        >
          {lang.toggleLang}
        </button>
      </div>

      <p className="description">{lang.description}</p>

      <div className="options-grid">
        <div className="option-card" onClick={() => navigate('/horticulture/fruits')}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOJOj9tCPrB4-LQHTFaPm4egoAOh2K7Fn4w&s" 
            alt="Fruits"
          />
          <div className="option-content">
            <h2>{lang.fruits}</h2>
            <p>{lang.fruitsDesc}</p>
          </div>
        </div>

        <div className="option-card" onClick={() => navigate('/vegetables')}>
          <img 
            src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg" 
            alt="Vegetables"
          />
          <div className="option-content">
            <h2>{lang.vegetables}</h2>
            <p>{lang.vegetablesDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horticulture;
