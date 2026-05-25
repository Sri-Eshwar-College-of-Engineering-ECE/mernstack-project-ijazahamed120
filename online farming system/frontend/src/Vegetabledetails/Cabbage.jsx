import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VegetableDetail.css';

function Cabbage() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      name: "Cabbage",
      description: "Cabbage is a leafy vegetable rich in vitamins C and K. It's widely used in salads, stir-fries, and fermented foods like sauerkraut and kimchi.",
      season: "Growing Season: October to March (winter season)",
      varieties: [
        "Golden Acre",
        "Copenhagen Market",
        "Pride of India",
        "Late Large Drum Head"
      ],
      diseases: {
        title: "Common Diseases",
        list: [
          "Black Rot",
          "Downy Mildew",
          "Club Root",
          "Alternaria Leaf Spot"
        ]
      },
      treatment: {
        title: "Disease Treatment",
        methods: [
          "Crop rotation",
          "Proper spacing",
          "Balanced fertilization",
          "Disease-free seedlings"
        ]
      },
      valueAdded: {
        title: "Value Added Products",
        products: [
          "Sauerkraut",
          "Kimchi",
          "Dried Cabbage",
          "Cabbage Pickle"
        ]
      },
      toggleLang: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      name: "முட்டைகோஸ்",
      description: "முட்டைகோஸ் என்பது வைட்டமின் C மற்றும் K நிறைந்த இலைக்காய்கறி. இது சலாட்கள், வறுவல்கள் மற்றும் சாவர்க்ராட், கிம்சி போன்ற நொதித்த உணவுகளில் பரவலாகப் பயன்படுத்தப்படுகிறது.",
      season: "வளரும் பருவம்: அக்டோபர் முதல் மார்ச் வரை (குளிர் காலம்)",
      varieties: [
        "கோல்டன் ஏக்கர்",
        "கோபன்ஹேகன் மார்க்கெட்",
        "பிரைட் ஆஃப் இந்தியா",
        "லேட் லார்ஜ் டிரம் ஹெட்"
      ],
      diseases: {
        title: "பொதுவான நோய்கள்",
        list: [
          "கருப்பு அழுகல்",
          "டவுனி மில்டு",
          "கிளப் ரூட்",
          "ஆல்டர்னேரியா இலைப்புள்ளி"
        ]
      },
      treatment: {
        title: "நோய் சிகிச்சை",
        methods: [
          "பயிர் சுழற்சி",
          "சரியான இடைவெளி",
          "சமநிலை உரமிடல்",
          "நோய் இல்லாத நாற்றுகள்"
        ]
      },
      valueAdded: {
        title: "மதிப்பு கூட்டப்பட்ட பொருட்கள்",
        products: [
          "சாவர்க்ராட்",
          "கிம்சி",
          "உலர்ந்த முட்டைகோஸ்",
          "முட்டைகோஸ் ஊறுகாய்"
        ]
      },
      toggleLang: "Translate to English"
    }
  };

  const lang = content[language];

  return (
    <div className="vegetable-detail-container">
      <div className="header">
        <Link to="/vegetables" className="back-button">←</Link>
        <h1>{lang.name}</h1>
        <button 
          className="lang-toggle"
          onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
        >
          {lang.toggleLang}
        </button>
      </div>

      <div className="vegetable-content">
        <div className="image-gallery">
          <img 
            src="https://plus.unsplash.com/premium_photo-1702489575687-204529449d94?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D" 
            alt={lang.name} 
            className="main-image"
          />
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tWl91df9ea4_CIkhMXiJphW7SydAx4Y-wQ&s" 
            alt={lang.name} 
            className="secondary-image"
          />
        </div>

        <div className="info-section">
          <p className="description">{lang.description}</p>
          <p className="season">{lang.season}</p>

          <div className="varieties-section">
            <h2>{lang.name} Varieties</h2>
            <ul>
              {lang.varieties.map((variety, index) => (
                <li key={index}>{variety}</li>
              ))}
            </ul>
          </div>

          <div className="diseases-section">
            <h2>{lang.diseases.title}</h2>
            <ul>
              {lang.diseases.list.map((disease, index) => (
                <li key={index}>{disease}</li>
              ))}
            </ul>
          </div>

          <div className="treatment-section">
            <h2>{lang.treatment.title}</h2>
            <ul>
              {lang.treatment.methods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </div>

          <div className="value-added-section">
            <h2>{lang.valueAdded.title}</h2>
            <ul>
              {lang.valueAdded.products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabbage;
