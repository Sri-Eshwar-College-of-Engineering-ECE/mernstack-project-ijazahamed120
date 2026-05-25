import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VegetableDetail.css';

function Tomato() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      name: "Tomato",
      description: "Tomatoes are rich in vitamins C and K, potassium, and folate. They are the major dietary source of the antioxidant lycopene, linked to many health benefits.",
      season: "Growing Season: Year-round with peak season from March to May",
      varieties: [
        "Cherry Tomatoes",
        "Roma Tomatoes",
        "Beefsteak Tomatoes",
        "Plum Tomatoes"
      ],
      diseases: {
        title: "Common Diseases",
        list: [
          "Early Blight",
          "Late Blight",
          "Fusarium Wilt",
          "Bacterial Spot"
        ]
      },
      treatment: {
        title: "Disease Treatment",
        methods: [
          "Use disease-resistant varieties",
          "Proper spacing for air circulation",
          "Regular fungicide application",
          "Crop rotation"
        ]
      },
      valueAdded: {
        title: "Value Added Products",
        products: [
          "Tomato Sauce",
          "Sun-dried Tomatoes",
          "Tomato Paste",
          "Tomato Juice"
        ]
      },
      toggleLang: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      name: "தக்காளி",
      description: "தக்காளியில் வைட்டமின் C மற்றும் K, பொட்டாசியம் மற்றும் ஃபோலேட் நிறைந்துள்ளது. இவை ஆன்டிஆக்ஸிடன்ட் லைகோபீன் முக்கிய உணவு ஆதாரமாகும்.",
      season: "வளரும் பருவம்: ஆண்டு முழுவதும், மார்ச் முதல் மே வரை உச்ச பருவம்",
      varieties: [
        "செர்ரி தக்காளி",
        "ரோமா தக்காளி",
        "பீஃப்ஸ்டேக் தக்காளி",
        "பிளம் தக்காளி"
      ],
      diseases: {
        title: "பொதுவான நோய்கள்",
        list: [
          "ஆரம்ப கருகல்",
          "தாமத கருகல்",
          "ஃபுசாரியம் வாடல்",
          "பாக்டீரியல் புள்ளி"
        ]
      },
      treatment: {
        title: "நோய் சிகிச்சை",
        methods: [
          "நோய் எதிர்ப்பு ரகங்களைப் பயன்படுத்துதல்",
          "காற்றோட்டத்திற்கான சரியான இடைவெளி",
          "வழக்கமான பூஞ்சைக்கொல்லி பயன்பாடு",
          "பயிர் சுழற்சி"
        ]
      },
      valueAdded: {
        title: "மதிப்பு கூட்டப்பட்ட பொருட்கள்",
        products: [
          "தக்காளி சாஸ்",
          "சூரிய உலர் தக்காளி",
          "தக்காளி பேஸ்ட்",
          "தக்காளி ஜூஸ்"
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
            src="https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg" 
            alt={lang.name} 
            className="main-image"
          />
          <img 
            src="https://cdn.standardmedia.co.ke/images/wysiwyg/images/pbwHbUmCWIre8xyLAj0NoBS2Uq27ApQAomJuqWFX.jpg" 
            alt={`${lang.name} value added products`} 
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

export default Tomato;
