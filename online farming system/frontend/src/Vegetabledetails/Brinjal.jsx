import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VegetableDetail.css';

function Brinjal() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      name: "Brinjal",
      description: "Brinjal, also known as eggplant or aubergine, is a versatile vegetable rich in fiber and antioxidants. It's a popular ingredient in many cuisines worldwide.",
      season: "Growing Season: June to October (main season), November to April (off season)",
      varieties: [
        "Black Beauty",
        "Long Purple",
        "Round Purple",
        "White Brinjal"
      ],
      diseases: {
        title: "Common Diseases",
        list: [
          "Bacterial Wilt",
          "Phomopsis Blight",
          "Little Leaf Disease",
          "Damping Off"
        ]
      },
      treatment: {
        title: "Disease Treatment",
        methods: [
          "Use disease-free seedlings",
          "Soil solarization",
          "Proper drainage",
          "Regular monitoring and spraying"
        ]
      },
      valueAdded: {
        title: "Value Added Products",
        products: [
          "Pickled Brinjal",
          "Brinjal Chips",
          "Brinjal Powder",
          "Frozen Brinjal"
        ]
      },
      toggleLang: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      name: "கத்திரிக்காய்",
      description: "கத்திரிக்காய் நார்ச்சத்து மற்றும் ஆன்டிஆக்ஸிடன்ட்கள் நிறைந்த காய்கறி. இது உலகெங்கிலும் உள்ள பல உணவு வகைகளில் பிரபலமான பொருள்.",
      season: "வளரும் பருவம்: ஜூன் முதல் அக்டோபர் (முக்கிய பருவம்), நவம்பர் முதல் ஏப்ரல் (இடைப்பட்ட பருவம்)",
      varieties: [
        "கருப்பு அழகி",
        "நீண்ட ஊதா",
        "வட்ட ஊதா",
        "வெள்ளை கத்திரிக்காய்"
      ],
      diseases: {
        title: "பொதுவான நோய்கள்",
        list: [
          "பாக்டீரியல் வாடல்",
          "போமாப்சிஸ் கருகல்",
          "சிறு இலை நோய்",
          "நாற்று அழுகல்"
        ]
      },
      treatment: {
        title: "நோய் சிகிச்சை",
        methods: [
          "நோய் இல்லாத நாற்றுகளைப் பயன்படுத்துதல்",
          "மண் சூரிய ஒளி சிகிச்சை",
          "சரியான வடிகால்",
          "தொடர் கண்காணிப்பு மற்றும் தெளித்தல்"
        ]
      },
      valueAdded: {
        title: "மதிப்பு கூட்டப்பட்ட பொருட்கள்",
        products: [
          "கத்திரிக்காய் ஊறுகாய்",
          "கத்திரிக்காய் சிப்ஸ்",
          "கத்திரிக்காய் பொடி",
          "உறைந்த கத்திரிக்காய்"
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
            src="https://media.istockphoto.com/id/1175349177/photo/ripe-purple-eggplants.jpg?s=612x612&w=0&k=20&c=KeOqHB9tCrEMKxIKMj6I1Zn589n2zgWVGo5gtlCzBNI=" 
            alt={lang.name} 
            className="main-image"
          />
          <img 
            src="https://urjaseeds.com/cdn/shop/products/BrinjalPPL_900x.png?v=1654512410" 
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

export default Brinjal;
