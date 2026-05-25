import React, { useState } from "react";
import "./Papaya.css";

function Papaya() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "🍈 Papaya (Carica papaya)",
      toggle: "தமிழில் மொழிபெயர் செய்ய",
      season: "Best planted from June to September in tropical climates.",
      disease: "Common diseases: Papaya ring spot virus, Anthracnose, Powdery mildew.",
      medicine: "Use virus-free seedlings, neem oil spray, and Copper-based fungicides.",
      products: "Papaya Jam, Dried Papaya, Papaya Juice, and Enzyme Extracts.",
      description: `Papaya is a tropical fruit known for its soft flesh, sweet flavor, and health-boosting enzymes such as papain.
It is an excellent source of vitamin C, fiber, and antioxidants that promote digestion and immunity.
Papaya grows well in warm climates with good sunlight and moderate rainfall.
It is commonly used in fruit salads, juices, desserts, and also in medicinal enzyme extraction.
India is one of the top producers of papaya, with high-yield varieties like Red Lady and Coorg Honey Dew.`,
    },
    ta: {
      title: "🍈 பப்பாளி (Carica papaya)",
      toggle: "Translate to English",
      season: "வெப்பமண்டலத்தில் ஜூன் முதல் செப்டம்பர் வரை நடவு சிறந்தது.",
      disease: "பொதுவான நோய்கள்: பப்பாளி வளையம் வைரஸ், ஆன்ட்ராக்னோஸ், தூசுப் பூஞ்சை.",
      medicine: "விஷமில்லா விதைகள், வேம்பெண்ணெய் தெளிப்பு மற்றும் காப்பர் பூஞ்சைக் கொல்லிகள் பயன்படுத்தவும்.",
      products: "பப்பாளி ஜாம், உலர்ந்த பப்பாளி, பப்பாளி சாறு மற்றும் எண்டைம் சாறுகள்.",
      description: `பப்பாளி என்பது இனிமையான சுவை மற்றும் பப்பைன் போன்ற சுகாதார ஊக்கமளிக்கும் எண்டைம்கள் கொண்ட வெப்பமண்டலப் பழம் ஆகும்.
இது ஜீரணத்தையும் நோயெதிர்ப்பு சக்தியையும் மேம்படுத்தும் விட்டமின் C, நார்ச்சத்து மற்றும் ஆன்டிஆக்ஸிடன்ட்கள் நிறைந்தது.
பப்பாளி வெப்பமான பருவநிலையிலும், சராசரி மழையுடனும் நன்கு வளரும்.
இது பழச்சலாதுகள், சாறுகள், இனிப்புகள் மற்றும் மருத்துவ உபயோகங்களிலும் பரவலாகப் பயன்படுத்தப்படுகிறது.
இந்தியா பப்பாளி உற்பத்தியாளர்களில் முதன்மையான நாடுகளில் ஒன்றாகும்.`,
    },
  };

  const lang = content[language];

  return (
    <div className="papaya-container">
      <div className="lang-toggle-btn">
        <button onClick={() => setLanguage(language === "en" ? "ta" : "en")}>
          {lang.toggle}
        </button>
      </div>

      <h1 className="papaya-title">{lang.title}</h1>

      <img
        src="https://static.vecteezy.com/system/resources/previews/003/000/904/non_2x/yellow-and-green-papaya-on-tree-photo.jpg"
        alt="Papaya"
        className="papaya-big-image"
      />

      <p className="papaya-description">{lang.description}</p>

      <div className="papaya-info">
        <p><strong>🌱 Season to Plant:</strong> {lang.season}</p>
        <p><strong>🦠 Common Diseases:</strong> {lang.disease}</p>
        <p><strong>💊 Treatments:</strong> {lang.medicine}</p>
        <p><strong>🍽️ Value-added Products:</strong> {lang.products}</p>
      </div>

      <div className="papaya-products">
        <img src="https://m.media-amazon.com/images/I/71b5GtV0UWL.jpg" alt="Papaya Jam" />
        <img src="https://exotikalhub.com/wp-content/uploads/2021/11/Dried-papaya-3.jpg" alt="Dried Papaya" />
      </div>
    </div>
  );
}

export default Papaya;
