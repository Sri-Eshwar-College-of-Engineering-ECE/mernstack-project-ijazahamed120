import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { vegetables } from '../data/vegetables';
import './VegetableDetails.css';

function VegetableDetails() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Vegetable Varieties",
      description: "Explore our collection of vegetable varieties. Click on any vegetable to learn more about its cultivation, diseases, and value-added products.",
      toggleLang: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      title: "காய்கறி வகைகள்",
      description: "எங்கள் காய்கறி வகைகளை ஆராயுங்கள். ஒவ்வொரு காய்கறியின் சாகுபடி, நோய்கள் மற்றும் மதிப்பு கூட்டப்பட்ட பொருட்களைப் பற்றி மேலும் அறிய அதைக் கிளிக் செய்யவும்.",
      toggleLang: "Translate to English"
    }
  };

  const lang = content[language];

  const handleVegetableClick = (vegetableName) => {
    navigate(`/vegetables/${vegetableName.toLowerCase()}`);
  };

  return (
    <div className="vegetable-details-container">
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

      <div className="vegetables-grid">
        {vegetables.map((veg) => (
          <div 
            key={veg.id} 
            className="vegetable-card"
            onClick={() => handleVegetableClick(veg.name.en)}
          >
            <div className="image-container">
              <img src={veg.image} alt={veg.name[language]} className="main-image" />
              {veg.secondaryImage && (
                <img 
                  src={veg.secondaryImage} 
                  alt={`${veg.name[language]} cultivation`} 
                  className="secondary-image"
                />
              )}
            </div>
            <div className="card-content">
              <h3>{veg.name[language]}</h3>
              <p>{veg.shortDescription[language]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VegetableDetails;
