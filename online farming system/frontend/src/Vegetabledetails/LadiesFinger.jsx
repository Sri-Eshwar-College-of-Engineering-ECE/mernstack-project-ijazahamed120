import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VegetableDetail.css';

function LadiesFinger() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      name: "Ladies Finger",
      description: "Ladies Finger, also known as Okra or Bhindi, is a nutritious vegetable rich in fiber and vitamins. It's known for its unique texture and versatility in cooking.",
      season: "Growing Season: June to September (warm season)",
      varieties: [
        "Pusa Sawani",
        "Arka Anamika",
        "Parbhani Kranti",
        "Hybrid Varieties"
      ],
      diseases: {
        title: "Common Diseases",
        list: [
          "Yellow Vein Mosaic",
          "Powdery Mildew",
          "Root Rot",
          "Leaf Spot"
        ]
      },
      treatment: {
        title: "Disease Treatment",
        methods: [
          "Use resistant varieties",
          "Regular monitoring",
          "Proper spacing",
          "Timely irrigation"
        ]
      },
      valueAdded: {
        title: "Value Added Products",
        products: [
          "Dried Okra",
          "Okra Chips",
          "Pickled Okra",
          "Okra Powder"
        ]
      },
      toggleLang: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      name: "வெண்டைக்காய்",
      description: "வெண்டைக்காய் என்பது நார்ச்சத்து மற்றும் வைட்டமின்கள் நிறைந்த ஊட்டச்சத்து மிக்க காய்கறி. இது தனித்துவமான அமைப்பு மற்றும் சமையலில் பல்வேறு பயன்பாடுகளுக்கு பிரபலமானது.",
      season: "வளரும் பருவம்: ஜூன் முதல் செப்டம்பர் வரை (வெப்ப காலம்)",
      varieties: [
        "பூசா சவானி",
        "அர்கா அனாமிகா",
        "பர்பானி கிராந்தி",
        "கலப்பின ரகங்கள்"
      ],
      diseases: {
        title: "பொதுவான நோய்கள்",
        list: [
          "மஞ்சள் நரம்பு மொசைக்",
          "சாம்பல் நோய்",
          "வேர் அழுகல்",
          "இலை புள்ளி"
        ]
      },
      treatment: {
        title: "நோய் சிகிச்சை",
        methods: [
          "நோய் எதிர்ப்பு ரகங்களைப் பயன்படுத்துதல்",
          "தொடர் கண்காணிப்பு",
          "சரியான இடைவெளி",
          "சரியான நேரத்தில் நீர்ப்பாசனம்"
        ]
      },
      valueAdded: {
        title: "மதிப்பு கூட்டப்பட்ட பொருட்கள்",
        products: [
          "உலர்ந்த வெண்டைக்காய்",
          "வெண்டைக்காய் சிப்ஸ்",
          "வெண்டைக்காய் ஊறுகாய்",
          "வெண்டைக்காய் பொடி"
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
            src="https://media.istockphoto.com/id/1171305503/photo/okra-or-ladys-finger-in-indian-vegetable-market.jpg?s=612x612&w=0&k=20&c=f5p9EHuEyV9hJ6FYA01aGkxuKf92DZ0MuRpdQ34emhI=" 
            alt={lang.name} 
            className="main-image"
          />
          <img 
            src="https://sdfoodproducts.com/wp-content/uploads/2020/03/26-02-1.jpg" 
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

export default LadiesFinger;
