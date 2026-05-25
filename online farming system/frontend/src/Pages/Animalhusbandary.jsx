import React, { useState } from "react";
import "./Animalhusbandary.css";

const animalData = {
  en: {
    title: "Animal Husbandry",
    toggle: "தமிழில் மொழிபெயர் செய்ய",
    animals: [
      {
        name: "Cattle",
        desc: "Cattle farming is one of the most important agricultural activities in India, providing milk, meat, and labor for farming operations.",
        img: "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=800&q=80",
        breeds: [
          "Holstein Friesian",
          "Jersey",
          "Gir",
          "Sahiwal"
        ],
        care: [
          "Regular vaccination and deworming",
          "Clean and spacious shelter",
          "Fresh water availability",
          "Balanced feed with minerals"
        ],
        products: [
          "Milk and dairy products",
          "Organic manure",
          "Leather",
          "Bio-gas from waste"
        ]
      },
      {
        name: "Poultry",
        desc: "Poultry farming includes raising chickens for eggs and meat. It's a profitable venture with quick returns and low initial investment.",
        img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
        breeds: [
          "White Leghorn",
          "Rhode Island Red",
          "Plymouth Rock",
          "Kadaknath"
        ],
        care: [
          "Proper ventilation",
          "Regular vaccination",
          "Clean drinking water",
          "Quality feed with proteins"
        ],
        products: [
          "Eggs",
          "Meat",
          "Feathers",
          "Manure"
        ]
      },
      {
        name: "Goat",
        desc: "Goat farming is ideal for small farmers. Goats are adaptable, require less space, and provide multiple products.",
        img: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
        breeds: [
          "Jamunapari",
          "Black Bengal",
          "Boer",
          "Beetal"
        ],
        care: [
          "Regular grazing",
          "Proper housing",
          "Timely vaccination",
          "Mineral supplements"
        ],
        products: [
          "Milk",
          "Meat",
          "Wool",
          "Manure"
        ]
      }
    ]
  },
  ta: {
    title: "கால்நடை வளர்ப்பு",
    toggle: "Translate to English",
    animals: [
      {
        name: "கால்நடை",
        desc: "கால்நடை வளர்ப்பு இந்தியாவின் மிக முக்கியமான வேளாண் நடவடிக்கைகளில் ஒன்றாகும், இது பால், இறைச்சி மற்றும் வேளாண் பணிகளுக்கான உழைப்பை வழங்குகிறது.",
        img: "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=800&q=80",
        breeds: [
          "ஹோல்ஸ்டீன் ஃப்ரீசியன்",
          "ஜெர்சி",
          "கிர்",
          "சாஹிவால்"
        ],
        care: [
          "வழக்கமான தடுப்பூசி மற்றும் புழு நீக்கம்",
          "சுத்தமான மற்றும் விசாலமான தங்குமிடம்",
          "சுத்தமான நீர் கிடைக்கும் வசதி",
          "தாதுக்களுடன் கூடிய சமச்சீர் உணவு"
        ],
        products: [
          "பால் மற்றும் பால் பொருட்கள்",
          "இயற்கை உரம்",
          "தோல்",
          "கழிவுகளில் இருந்து உயிரி-எரிவாயு"
        ]
      },
      {
        name: "கோழி வளர்ப்பு",
        desc: "கோழி வளர்ப்பில் முட்டை மற்றும் இறைச்சிக்காக கோழிகளை வளர்ப்பது அடங்கும். இது குறைந்த முதலீட்டில் விரைவான லாபம் தரும் தொழில்.",
        img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
        breeds: [
          "வெள்ளை லெக்ஹார்ன்",
          "ரோடு ஐலண்ட் ரெட்",
          "பிளைமத் ராக்",
          "கடக்நாத்"
        ],
        care: [
          "சரியான காற்றோட்டம்",
          "வழக்கமான தடுப்பூசி",
          "சுத்தமான குடிநீர்",
          "புரதத்துடன் கூடிய தரமான உணவு"
        ],
        products: [
          "முட்டைகள்",
          "இறைச்சி",
          "இறகுகள்",
          "எரு"
        ]
      },
      {
        name: "ஆடு",
        desc: "ஆடு வளர்ப்பு சிறு விவசாயிகளுக்கு ஏற்றது. ஆடுகள் தகவமைப்புத்திறன் கொண்டவை, குறைந்த இடம் தேவைப்படும், பல பொருட்களை வழங்கும்.",
        img: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
        breeds: [
          "ஜமுனாபாரி",
          "கருப்பு வங்காள",
          "போயர்",
          "பீட்டல்"
        ],
        care: [
          "வழக்கமான மேய்ச்சல்",
          "சரியான வீட்டு வசதி",
          "உரிய நேரத்தில் தடுப்பூசி",
          "தாது சத்து துணை உணவுகள்"
        ],
        products: [
          "பால்",
          "இறைச்சி",
          "கம்பளி",
          "எரு"
        ]
      }
    ]
  }
};

function Animalhusbandary() {
  const [language, setLanguage] = useState("en");
  const lang = animalData[language];

  return (
    <div className="animal-container">
      <button
        className="lang-toggle"
        onClick={() => setLanguage(language === "en" ? "ta" : "en")}
      >
        {lang.toggle}
      </button>
      <h1>{lang.title}</h1>
      <div className="animal-list">
        {lang.animals.map((animal, idx) => (
          <div key={idx} className="animal-card">
            <img src={animal.img} alt={animal.name} />
            <div className="animal-content">
              <h2>{animal.name}</h2>
              <p className="description">{animal.desc}</p>
              
              <div className="info-section">
                <h3>{language === "en" ? "Popular Breeds" : "பிரபலமான இனங்கள்"}</h3>
                <ul>
                  {animal.breeds.map((breed, index) => (
                    <li key={index}>{breed}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>{language === "en" ? "Care Tips" : "பராமரிப்பு குறிப்புகள்"}</h3>
                <ul>
                  {animal.care.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>{language === "en" ? "Products" : "பொருட்கள்"}</h3>
                <ul>
                  {animal.products.map((product, index) => (
                    <li key={index}>{product}</li>
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

export default Animalhusbandary;
