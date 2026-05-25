import React, { useState } from 'react';
import './About.css';

function About() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "About Our Online Farming System",
      description: "Welcome to our comprehensive online farming platform designed to support and empower farmers across Tamil Nadu. Our system provides extensive resources and tools in both English and Tamil languages.",
      mainFeatures: "Main Features",
      features: [
        {
          title: "Agriculture Section",
          description: "Detailed information about crop cultivation, modern farming techniques, pest control, and sustainable farming practices. Includes guides for various crops suitable for Tamil Nadu's climate."
        },
        {
          title: "Horticulture Section",
          description: "Comprehensive resources for fruit and vegetable cultivation, including detailed guides for tomatoes, brinjal, carrot, ladies finger, cabbage, and more. Also covers fruit cultivation like mango, banana, papaya, guava, and watermelon."
        },
        {
          title: "Animal Husbandry",
          description: "Expert guidance on livestock management, including cattle care, poultry farming, and goat rearing. Covers feeding practices, disease prevention, and breeding techniques."
        },
        {
          title: "Fertilizer Information",
          description: "Complete guide to fertilizers, including organic and chemical options. Detailed information about usage, benefits, and application methods for different crops."
        },
        {
          title: "Weather Forecasting",
          description: "Real-time weather updates and forecasts for any location in Tamil Nadu. Helps farmers plan their agricultural activities based on weather conditions."
        },
        {
          title: "E-Commerce Platform",
          description: "Online marketplace for agricultural products, tools, and equipment. Farmers can browse and purchase essential farming supplies and sell their produce."
        }
      ],
      additionalFeatures: "Additional Features",
      extras: [
        "Bilingual Support (English and Tamil)",
        "User-friendly interface",
        "Mobile responsive design",
        "Secure payment system",
        "Product reviews and ratings",
        "24/7 Customer support"
      ],
      contact: "Contact Us",
      toggle: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      title: "எங்கள் ஆன்லைன் விவசாய அமைப்பு பற்றி",
      description: "தமிழ்நாடு முழுவதும் உள்ள விவசாயிகளுக்கு ஆதரவளிக்கும் வகையில் வடிவமைக்கப்பட்ட எங்கள் விரிவான ஆன்லைன் விவசாய தளத்திற்கு வரவேற்கிறோம். எங்கள் அமைப்பு ஆங்கிலம் மற்றும் தமிழ் ஆகிய இரு மொழிகளிலும் விரிவான வளங்கள் மற்றும் கருவிகளை வழங்குகிறது.",
      mainFeatures: "முக்கிய அம்சங்கள்",
      features: [
        {
          title: "விவசாயப் பிரிவு",
          description: "பயிர் சாகுபடி, நவீன விவசாய நுட்பங்கள், பூச்சிக்கொல்லி மேலாண்மை மற்றும் நிலையான விவசாய முறைகள் பற்றிய விரிவான தகவல்கள். தமிழ்நாட்டின் காலநிலைக்கு ஏற்ற பல்வேறு பயிர்களுக்கான வழிகாட்டுதல்களை உள்ளடக்கியது."
        },
        {
          title: "தோட்டக்கலைப் பிரிவு",
          description: "தக்காளி, கத்திரிக்காய், கேரட், வெண்டைக்காய், முட்டைக்கோஸ் போன்றவற்றிற்கான விரிவான வழிகாட்டுதல்களுடன் பழங்கள் மற்றும் காய்கறிகள் சாகுபடிக்கான விரிவான வளங்கள். மாம்பழம், வாழைப்பழம், பப்பாளி, கொய்யா மற்றும் தர்பூசணி பழ சாகுபடியையும் உள்ளடக்கியது."
        },
        {
          title: "கால்நடை வளர்ப்பு",
          description: "கால்நடை மேலாண்மை, கோழி வளர்ப்பு மற்றும் ஆடு வளர்ப்பு குறித்த நிபுணர் வழிகாட்டுதல். உணவு பழக்கங்கள், நோய் தடுப்பு மற்றும் இனப்பெருக்க நுட்பங்களை உள்ளடக்கியது."
        },
        {
          title: "உர தகவல்",
          description: "இயற்கை மற்றும் இரசாயன உரங்கள் பற்றிய முழுமையான வழிகாட்டி. வெவ்வேறு பயிர்களுக்கான பயன்பாடு, நன்மைகள் மற்றும் பயன்படுத்தும் முறைகள் பற்றிய விரிவான தகவல்கள்."
        },
        {
          title: "வானிலை முன்னறிவிப்பு",
          description: "தமிழ்நாட்டில் உள்ள எந்த இடத்திற்கும் நிகழ்நேர வானிலை புதுப்பிப்புகள் மற்றும் முன்னறிவிப்புகள். விவசாயிகள் வானிலை நிலைமைகளின் அடிப்படையில் தங்கள் விவசாய நடவடிக்கைகளை திட்டமிட உதவுகிறது."
        },
        {
          title: "மின்-வணிக தளம்",
          description: "விவசாய பொருட்கள், கருவிகள் மற்றும் உபகரணங்களுக்கான ஆன்லைன் சந்தை. விவசாயிகள் அத்தியாவசிய விவசாய பொருட்களை உலாவி வாங்கலாம் மற்றும் தங்கள் விளைபொருட்களை விற்கலாம்."
        }
      ],
      additionalFeatures: "கூடுதல் அம்சங்கள்",
      extras: [
        "இருமொழி ஆதரவு (ஆங்கிலம் மற்றும் தமிழ்)",
        "பயனர் நட்பு இடைமுகம்",
        "மொபைல் பதிலளிக்கும் வடிவமைப்பு",
        "பாதுகாப்பான கட்டண முறை",
        "தயாரிப்பு மதிப்புரைகள் மற்றும் மதிப்பீடுகள்",
        "24/7 வாடிக்கையாளர் ஆதரவு"
      ],
      contact: "எங்களை தொடர்பு கொள்ள",
      toggle: "Translate to English"
    }
  };

  const lang = content[language];

  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-content">
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

          <div className="features-section">
            <h2>{lang.mainFeatures}</h2>
            <div className="features-grid">
              {lang.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="additional-features">
            <h2>{lang.additionalFeatures}</h2>
            <ul>
              {lang.extras.map((extra, index) => (
                <li key={index}>{extra}</li>
              ))}
            </ul>
          </div>

          <div className="contact-section">
            <h2>{lang.contact}</h2>
            <div className="contact-info">
              <p>Email: vignesh@gmail.com</p>
              <p>Phone: +91 9876756234</p>
              <p>Address: Eripalayam, Udumalpet, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
