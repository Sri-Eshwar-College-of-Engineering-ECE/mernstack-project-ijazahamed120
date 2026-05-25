import React, { useState } from "react";
import "./Fertilizer.css";

const fertilizerData = {
  en: {
    title: "Fertilizer Information",
    toggle: "தமிழில் மொழிபெயர் செய்ய",
    fertilizers: [
      {
        name: "Urea",
        img: "https://mahazone.com/wp-content/uploads/2022/07/urea-pure-500x500-1.jpg",
        description: "High-nitrogen fertilizer essential for leaf growth",
        benefits: [
          "Promotes rapid vegetative growth",
          "Improves leaf color and quality",
          "Quick nitrogen release",
          "Cost-effective fertilizer option"
        ],
        suitableFor: [
          "Rice",
          "Wheat",
          "Corn",
          "Leafy vegetables"
        ]
      },
      {
        name: "NPK 15-15-15",
        img: "https://www.dfgrupo.com/wp-content/uploads/2022/04/NPK-Nitrofoska-DFGRUPO.jpg",
        description: "Balanced fertilizer with equal parts nitrogen, phosphorus, and potassium",
        benefits: [
          "Provides balanced nutrition",
          "Supports overall plant growth",
          "Improves crop yield",
          "Enhances root development"
        ],
        suitableFor: [
          "Tomatoes",
          "Potatoes",
          "General vegetables",
          "Fruit trees"
        ]
      },
      {
        name: "Single Super Phosphate",
        img: "https://productimages.withfloats.com/actual/5c5504f9e19ad600012fe91b.jpg",
        description: "Phosphorus-rich fertilizer that also contains calcium and sulfur",
        benefits: [
          "Promotes root growth",
          "Improves flowering and fruiting",
          "Enhances disease resistance",
          "Provides additional sulfur"
        ],
        suitableFor: [
          "Pulses",
          "Oilseeds",
          "Sugarcane",
          "Vegetables"
        ]
      },
      {
        name: "Potash",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5uT3NrVrXsztjLpjyBvloOl6z0RuHJbA7Q&s",
        description: "Potassium-rich fertilizer for improved crop quality",
        benefits: [
          "Enhances fruit quality",
          "Improves disease resistance",
          "Helps in water regulation",
          "Strengthens plant stems"
        ],
        suitableFor: [
          "Bananas",
          "Citrus fruits",
          "Potatoes",
          "Cotton"
        ]
      },
      {
        name: "Zinc Sulfate",
        img: "https://cpimg.tistatic.com/10282173/b/4/Zinc-Sulphate-For-Fertilizer..jpg",
        description: "Micronutrient fertilizer essential for plant growth",
        benefits: [
          "Corrects zinc deficiency",
          "Improves protein synthesis",
          "Enhances crop yield",
          "Supports enzyme functions"
        ],
        suitableFor: [
          "Rice",
          "Corn",
          "Citrus",
          "Beans"
        ]
      },
      {
        name: "DAP",
        img: "https://m.media-amazon.com/images/I/71xBf6iUG9L.jpg",
        description: "Di-ammonium Phosphate, high in nitrogen and phosphorus",
        benefits: [
          "Quick nutrient availability",
          "Promotes early growth",
          "Improves seed formation",
          "Enhances root development"
        ],
        suitableFor: [
          "Wheat",
          "Vegetables",
          "Fruits",
          "Flowers"
        ]
      },
      {
        name: "Organic Compost",
        img: "https://m.media-amazon.com/images/I/61148eY0ZfL._AC_UF1000,1000_QL80_.jpg",
        description: "Natural fertilizer made from decomposed organic matter",
        benefits: [
          "Improves soil structure",
          "Enhances soil fertility",
          "Promotes beneficial microorganisms",
          "Environment-friendly option"
        ],
        suitableFor: [
          "All crops",
          "Kitchen gardens",
          "Organic farming",
          "Nurseries"
        ]
      }
    ]
  },
  ta: {
    title: "உர தகவல்",
    toggle: "Translate to English",
    fertilizers: [
      {
        name: "யூரியா",
        img: "https://mahazone.com/wp-content/uploads/2022/07/urea-pure-500x500-1.jpg",
        description: "இலை வளர்ச்சிக்கு அவசியமான அதிக நைட்ரஜன் உரம்",
        benefits: [
          "வேகமான தாவர வளர்ச்சியை ஊக்குவிக்கிறது",
          "இலை நிறம் மற்றும் தரத்தை மேம்படுத்துகிறது",
          "விரைவான நைட்ரஜன் வெளியீடு",
          "செலவு குறைந்த உர விருப்பம்"
        ],
        suitableFor: [
          "நெல்",
          "கோதுமை",
          "மக்காச்சோளம்",
          "கீரை காய்கறிகள்"
        ]
      },
      {
        name: "NPK 15-15-15",
        img: "https://www.dfgrupo.com/wp-content/uploads/2022/04/NPK-Nitrofoska-DFGRUPO.jpg",
        description: "நைட்ரஜன், பாஸ்பரஸ் மற்றும் பொட்டாசியம் சமஅளவில் கொண்ட சமச்சீர் உரம்",
        benefits: [
          "சமச்சீர் ஊட்டச்சத்து வழங்குகிறது",
          "ஒட்டுமொத்த தாவர வளர்ச்சிக்கு உதவுகிறது",
          "பயிர் மகசூலை அதிகரிக்கிறது",
          "வேர் வளர்ச்சியை மேம்படுத்துகிறது"
        ],
        suitableFor: [
          "தக்காளி",
          "உருளைக்கிழங்கு",
          "பொது காய்கறிகள்",
          "பழ மரங்கள்"
        ]
      },
      {
        name: "சிங்கிள் சூப்பர் பாஸ்பேட்",
        img: "https://productimages.withfloats.com/actual/5c5504f9e19ad600012fe91b.jpg",
        description: "கால்சியம் மற்றும் சல்பர் கொண்ட பாஸ்பரஸ் நிறைந்த உரம்",
        benefits: [
          "வேர் வளர்ச்சியை ஊக்குவிக்கிறது",
          "பூக்கள் மற்றும் காய்கள் உற்பத்தியை மேம்படுத்துகிறது",
          "நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது",
          "கூடுதல் சல்பர் வழங்குகிறது"
        ],
        suitableFor: [
          "பருப்பு வகைகள்",
          "எண்ணெய் வித்துக்கள்",
          "கரும்பு",
          "காய்கறிகள்"
        ]
      },
      {
        name: "பொட்டாஷ்",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5uT3NrVrXsztjLpjyBvloOl6z0RuHJbA7Q&s",
        description: "பயிர் தரத்தை மேம்படுத்த பொட்டாசியம் நிறைந்த உரம்",
        benefits: [
          "பழங்களின் தரத்தை மேம்படுத்துகிறது",
          "நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது",
          "நீர் ஒழுங்குமுறையில் உதவுகிறது",
          "தாவர தண்டுகளை வலுப்படுத்துகிறது"
        ],
        suitableFor: [
          "வாழைப்பழம்",
          "சிட்ரஸ் பழங்கள்",
          "உருளைக்கிழங்கு",
          "பருத்தி"
        ]
      },
      {
        name: "துத்தநாக சல்பேட்",
        img: "https://cpimg.tistatic.com/10282173/b/4/Zinc-Sulphate-For-Fertilizer..jpg",
        description: "தாவர வளர்ச்சிக்கு அவசியமான நுண்ணூட்டச்சத்து உரம்",
        benefits: [
          "துத்தநாக குறைபாட்டை சரிசெய்கிறது",
          "புரத உற்பத்தியை மேம்படுத்துகிறது",
          "பயிர் மகசூலை அதிகரிக்கிறது",
          "நொதி செயல்பாடுகளை ஆதரிக்கிறது"
        ],
        suitableFor: [
          "நெல்",
          "மக்காச்சோளம்",
          "சிட்ரஸ்",
          "பீன்ஸ்"
        ]
      },
      {
        name: "டி.ஏ.பி",
        img: "https://m.media-amazon.com/images/I/71xBf6iUG9L.jpg",
        description: "டை-அம்மோனியம் பாஸ்பேட், அதிக நைட்ரஜன் மற்றும் பாஸ்பரஸ் கொண்டது",
        benefits: [
          "விரைவான ஊட்டச்சத்து கிடைக்கும் தன்மை",
          "ஆரம்ப வளர்ச்சியை ஊக்குவிக்கிறது",
          "விதை உருவாக்கத்தை மேம்படுத்துகிறது",
          "வேர் வளர்ச்சியை அதிகரிக்கிறது"
        ],
        suitableFor: [
          "கோதுமை",
          "காய்கறிகள்",
          "பழங்கள்",
          "பூக்கள்"
        ]
      },
      {
        name: "இயற்கை உரம்",
        img: "https://m.media-amazon.com/images/I/61148eY0ZfL._AC_UF1000,1000_QL80_.jpg",
        description: "மக்கிய கரிம பொருட்களிலிருந்து தயாரிக்கப்பட்ட இயற்கை உரம்",
        benefits: [
          "மண் அமைப்பை மேம்படுத்துகிறது",
          "மண் வளத்தை அதிகரிக்கிறது",
          "பயனுள்ள நுண்ணுயிரிகளை ஊக்குவிக்கிறது",
          "சுற்றுச்சூழலுக்கு உகந்த விருப்பம்"
        ],
        suitableFor: [
          "அனைத்து பயிர்களும்",
          "சமையல் தோட்டங்கள்",
          "இயற்கை விவசாயம்",
          "நாற்றங்கால்கள்"
        ]
      }
    ]
  }
};

function Fertilizer() {
  const [language, setLanguage] = useState("en");
  const lang = fertilizerData[language];

  return (
    <div className="fertilizer-container">
      <button
        className="lang-toggle"
        onClick={() => setLanguage(language === "en" ? "ta" : "en")}
      >
        {lang.toggle}
      </button>
      <h1>{lang.title}</h1>
      <div className="fertilizer-list">
        {lang.fertilizers.map((fertilizer, idx) => (
          <div key={idx} className="fertilizer-card">
            <img src={fertilizer.img} alt={fertilizer.name} />
            <div className="fertilizer-content">
              <h2>{fertilizer.name}</h2>
              <p className="description">{fertilizer.description}</p>
              
              <div className="info-section">
                <h3>{language === "en" ? "Benefits" : "நன்மைகள்"}</h3>
                <ul>
                  {fertilizer.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>{language === "en" ? "Suitable For" : "இதற்கு ஏற்றது"}</h3>
                <ul>
                  {fertilizer.suitableFor.map((crop, index) => (
                    <li key={index}>{crop}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fertilizer;
