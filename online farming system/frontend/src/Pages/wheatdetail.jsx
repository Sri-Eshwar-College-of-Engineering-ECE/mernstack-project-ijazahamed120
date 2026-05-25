import React, { useState } from "react";
import "./CropDetail.css";

const WheatDetail = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ta" : "en"));
  };

  const content = {
    en: {
      title: "Wheat Cultivation Details",
      season: "🌾 Cropping Seasons",
      seasonDesc:
        "Wheat is mainly grown in the Rabi season (November - April) under cool and dry conditions.",
      disease: "🦠 Diseases & 🧪 Fertilizers",
      diseaseDesc:
        "Common diseases include rust, smut, and blight. Use fertilizers like Urea, DAP, and MOP. Apply Mancozeb or Propiconazole to control fungal infections.",
      tractor: "🚜 Tractors Used",
      weather: "🌦️ Weather Pattern",
      weatherDesc:
        "Wheat prefers cool weather with moderate rainfall (30–90 cm) and a temperature of 10°C to 25°C.",
      yield: "📊 Yield",
      yieldDesc:
        "Average yield is around 2500–5000 kg/ha depending on the region and variety.",
      products: "🛒 Value-Added Products",
      buy: "Buy Now"
    },
    ta: {
      title: "கோதுமை பயிரிடும் விவரங்கள்",
      season: "🌾 பயிரிடும் பருவங்கள்",
      seasonDesc:
        "கோதுமை ரபி பருவத்தில் (நவம்பர் - ஏப்ரல்) குளிர்ச்சியான, உலர்ந்த காலநிலையில் பயிரிடப்படுகிறது.",
      disease: "🦠 நோய்கள் மற்றும் 🧪 உரங்கள்",
      diseaseDesc:
        "முக்கிய நோய்கள்: ரஸ்ட், ஸ்மட், பிளைட். யூரியா, டிஏபி, மற்றும் எம்ஓபி உரங்களை பயன்படுத்தலாம். பூஞ்சை கட்டுப்பாட்டுக்கு மேன்கோஸெப் அல்லது பிரொபிகொனாசோல் பயன்படுத்தலாம்.",
      tractor: "🚜 பயன்படுத்தப்படும் டிராக்டர்கள்",
      weather: "🌦️ வானிலை நிலை",
      weatherDesc:
        "குளிரான காலநிலை மற்றும் 30–90 செ.மீ. மழையுடன் 10°C - 25°C வரை வெப்பநிலை கோதுமைக்கு ஏற்றது.",
      yield: "📊 அளவு (Yield)",
      yieldDesc:
        "சராசரி மகசூல்: 2500–5000 கி/ஹெக்டேர் (பரப்பளவு மற்றும் வகையை பொருத்தது).",
      products: "🛒 மதிப்பூட்டப்பட்ட தயாரிப்புகள்",
      buy: "வாங்கு"
    }
  };

  return (
    <div className="crop-detail-white">
      <button onClick={toggleLanguage} className="lang-toggle">
        {language === "en" ? "தமிழ்" : "English"}
      </button>

      <h1>{content[language].title}</h1>

      <section>
        <h2>{content[language].season}</h2>
        <p>{content[language].seasonDesc}</p>
      </section>

      <section>
        <h2>{content[language].disease}</h2>
        <p>{content[language].diseaseDesc}</p>
      </section>

      <section>
        <h2>{content[language].tractor}</h2>
        <div className="tractor-images">
          <img
            src="https://i.imgur.com/zfaJrSl.jpg"
            alt="Wheat Tractor 1"
          />
          <img
            src="https://i.imgur.com/Cg5Km8k.jpg"
            alt="Wheat Tractor 2"
          />
        </div>
      </section>

      <section>
        <h2>{content[language].weather}</h2>
        <p>{content[language].weatherDesc}</p>
      </section>

      <section>
        <h2>{content[language].yield}</h2>
        <p>{content[language].yieldDesc}</p>
      </section>

      <section>
        <h2>{content[language].products}</h2>
        <div className="product-list">
          <div className="product">
            <img src="https://i.imgur.com/FklzDxv.png" alt="Wheat Flour" />
            <p>Wheat Flour</p>
            <button>{content[language].buy}</button>
          </div>
          <div className="product">
            <img src="https://i.imgur.com/HsS8rMN.png" alt="Wheat Bread" />
            <p>Wheat Bread</p>
            <button>{content[language].buy}</button>
          </div>
          <div className="product">
            <img src="https://i.imgur.com/N8JZUXN.png" alt="Wheat Pasta" />
            <p>Wheat Pasta</p>
            <button>{content[language].buy}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WheatDetail;
