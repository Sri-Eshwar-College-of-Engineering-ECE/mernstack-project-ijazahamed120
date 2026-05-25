import React, { useState } from "react";
import "./Mango.css";

function Mango() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "🥭 Mango (Mangifera indica)",
      toggle: "தமிழில் மொழிபெயர் செய்ய",
      season: "Best planted in summer or early monsoon season (March–July).",
      disease: "Common diseases: Powdery mildew, Anthracnose, Bacterial canker.",
      medicine: "Use Sulfur fungicides, neem oil, or copper oxychloride sprays.",
      products: "Popular products include Mango Juice, Pickle, Aam Papad, and Dried Mango.",
      description: `The mango is one of the most loved tropical fruits in the world, known as the "King of Fruits". 
It is a rich source of Vitamin A, C, and E and contains powerful antioxidants. Mangoes are typically 
cultivated in warm climates and thrive well in loamy soils. In India, varieties like Alphonso, Banganapalli, 
and Kesar are widely grown. Apart from being eaten fresh, mangoes are also used in juices, desserts, jams, 
and pickles. The tree itself also provides shade and can live for many decades.`,
    },
    ta: {
      title: "🥭 மாம்பழம் (Mangifera indica)",
      toggle: "Translate to English",
      season: "சிறந்த நடவு பருவம்: மார்ச் முதல் ஜூலை வரை, வெப்பமண்டல அல்லது தொடக்கமழை பருவம்.",
      disease: "பொதுவான நோய்கள்: தூசு பூஞ்சை, ஆன்ட்ராக்னோஸ், பாக்டீரியல் புண்.",
      medicine: "சல்பர் பூஞ்சை கொல்லிகள், வேம்பெண்ணெய் அல்லது copper oxychloride தெளிவுகள்.",
      products: "பழச்சாறு, ஊறுகாய், ஆம் பாப்பட் மற்றும் உலர்ந்த மாம்பழம் ஆகியவை முக்கியமான தயாரிப்புகள்.",
      description: `மாம்பழம் உலகளவில் பிரபலமான மற்றும் பரிமாறப்படும் பழங்களில் ஒன்றாகும். இது 'பழราชா' என அழைக்கப்படுகிறது. 
விட்டமின் A, C மற்றும் E ஆகியவற்றின் சிறந்த மூலமாக இருப்பதுடன், இது ஆன்டிஆக்ஸிடன்ட்களையும் கொண்டுள்ளது. இந்தியாவில் 
ஆல்பொன்சோ, பங்கனபள்ளி மற்றும் கேசர் ஆகிய வகைகள் பரவலாக பயிரிடப்படுகின்றன. பசுமையாகவும், சாறு, ஜாம், ஊறுகாய் மற்றும் 
இனிப்புகள் ஆகியவற்றில் மாம்பழம் பரிமாறப்படுகிறது.`,
    },
  };

  const lang = content[language];

  return (
    <div className="mango-container">
      <div className="lang-toggle-btn">
        <button onClick={() => setLanguage(language === "en" ? "ta" : "en")}>
          {lang.toggle}
        </button>
      </div>

      <h1 className="mango-title">{lang.title}</h1>

      <img
        src="https://c4.wallpaperflare.com/wallpaper/594/281/79/8k-uhd-8k-fruit-mango-wallpaper-preview.jpg"
        alt="Mango"
        className="mango-big-image"
      />

      <p className="mango-description">{lang.description}</p>

      <div className="mango-info">
        <p><strong>🌱 Season to Plant:</strong> {lang.season}</p>
        <p><strong>🦠 Common Diseases:</strong> {lang.disease}</p>
        <p><strong>💊 Treatments:</strong> {lang.medicine}</p>
        <p><strong>🧃 Value-added Products:</strong> {lang.products}</p>
      </div>

      <div className="mango-products">
        <img src="https://vaya.in/recipes/wp-content/uploads/2018/02/mango-frooti.jpg" alt="Mango Juice" />
        <img src="https://media.istockphoto.com/id/1305930791/photo/dried-mango-slices.jpg?s=612x612&w=0&k=20&c=WN1KQeYfZuuIBzsScfcim1kYH2shw_5UEm_4hPSnxDE=" alt="Dried Mango" />
      </div>
    </div>
  );
}

export default Mango;
