import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VegetableDetail.css';

function Carrot() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      name: "Carrot",
      description: "Carrots are root vegetables rich in beta-carotene, fiber, and antioxidants. They are known for improving eye health and boosting immunity.",
      season: "Growing Season: October to March (winter season)",
      varieties: [
        "Nantes",
        "Chantenay",
        "Imperator",
        "Danvers"
      ],
      diseases: {
        title: "Common Diseases",
        list: [
          "Leaf Blight",
          "Root Knot",
          "Powdery Mildew",
          "Black Rot"
        ]
      },
      treatment: {
        title: "Disease Treatment",
        methods: [
          "Crop rotation",
          "Proper drainage",
          "Fungicide application",
          "Resistant varieties"
        ]
      },
      valueAdded: {
        title: "Value Added Products",
        products: [
          "Carrot Juice",
          "Dried Carrot",
          "Carrot Powder",
          "Carrot Pickle"
        ]
      },
      toggleLang: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      name: "கேரட்",
      description: "கேரட் என்பது பீட்டா-கரோட்டின், நார்ச்சத்து மற்றும் ஆன்டிஆக்ஸிடன்ட்கள் நிறைந்த கிழங்கு காய்கறி. கண் ஆரோக்கியத்தை மேம்படுத்துவதற்கும் நோய் எதிர்ப்பு சக்தியை அதிகரிப்பதற்கும் அறியப்படுகிறது.",
      season: "வளரும் பருவம்: அக்டோபர் முதல் மார்ச் வரை (குளிர் காலம்)",
      varieties: [
        "நாண்டெஸ்",
        "சாண்டெனே",
        "இம்பெரேட்டர்",
        "டான்வர்ஸ்"
      ],
      diseases: {
        title: "பொதுவான நோய்கள்",
        list: [
          "இலை கருகல்",
          "வேர் முடிச்சு",
          "சாம்பல் நோய்",
          "கருப்பு அழுகல்"
        ]
      },
      treatment: {
        title: "நோய் சிகிச்சை",
        methods: [
          "பயிர் சுழற்சி",
          "சரியான வடிகால்",
          "பூஞ்சைக்கொல்லி பயன்பாடு",
          "நோய் எதிர்ப்பு ரகங்கள்"
        ]
      },
      valueAdded: {
        title: "மதிப்பு கூட்டப்பட்ட பொருட்கள்",
        products: [
          "கேரட் ஜூஸ்",
          "உலர்ந்த கேரட்",
          "கேரட் பொடி",
          "கேரட் ஊறுகாய்"
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
            src="https://media.istockphoto.com/id/636718322/photo/fresh-ripe-harvested-carrots-on-the-ground-in-the-garden.jpg?s=612x612&w=0&k=20&c=DvG9SQ1ozy_djkBzqt81iDglXqJbNLCOIH52T3xziyU=" 
            alt={lang.name} 
            className="main-image"
          />
          <img 
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/10/carrot-juice-1296x728-header.jpg?w=1155&h=1528" 
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

export default Carrot;
