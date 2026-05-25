import React, { useState } from "react";
import "./Guava.css";

function Guava() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "🍏 Guava (Psidium guajava)",
      toggle: "தமிழில் மொழிபெயர் செய்ய",
      season: "Best planted during June-July and September-October.",
      disease: "Common diseases: Wilt, Anthracnose, Fruit fly.",
      medicine: "Apply neem cake, Trichoderma fungus, and use insect traps.",
      products: "Guava Jam and Guava Juice",
      desc: "Guava is a nutrient-rich fruit known for its high vitamin C content. It helps improve digestion and boosts immunity. Guavas are easy to grow and require minimal care once established.",
    },
    ta: {
      title: "🍏 கொய்யாப்பழம் (பசிடியம் குஜாவா)",
      toggle: "Translate to English",
      season: "ஜூன்-ஜூலை மற்றும் செப்டம்பர்-அக்டோபரில் நடவு சிறந்தது.",
      disease: "பொதுவான நோய்கள்: வாடல், ஆன்ட்ராக்னோஸ், பழ ஈ.",
      medicine: "வேம்பு பட்டை, டிரைகோடெர்மா பூஞ்சை மற்றும் பூச்சி கொல்லிகள் பயன்படுத்தவும்.",
      products: "கொய்யா ஜாம் மற்றும் கொய்யா சாறு",
      desc: "கொய்யாப்பழம் என்பது அதிக அளவு விட்டமின் சி கொண்ட சத்துள்ள ஒரு பழமாகும். இது ஜீரணத்தை மேம்படுத்தி நோய் எதிர்ப்பு சக்தியை அதிகரிக்க உதவுகிறது.",
    },
  };

  const lang = content[language];

  return (
    <div className="guava-container">
      <button className="lang-toggle" onClick={() => setLanguage(language === "en" ? "ta" : "en")}>
        {lang.toggle}
      </button>

      <h1>{lang.title}</h1>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/231/146/496/board-in-the-basket-guava-wallpaper-preview.jpg"
        alt="Guava"
        className="guava-image"
      />
      <p className="guava-desc">{lang.desc}</p>
      <p><strong>🌱 Season to plant:</strong> {lang.season}</p>
      <p><strong>🦠 Diseases:</strong> {lang.disease}</p>
      <p><strong>💊 Medicines:</strong> {lang.medicine}</p>
      <p><strong>🍹 Value-added Products:</strong> {lang.products}</p>

      <div className="guava-products">
        <img src="https://media.istockphoto.com/id/1218824676/photo/guava.jpg?s=612x612&w=0&k=20&c=LC6DiMjBi9DgAoOXIchmXDuIWPLtl2uqGtgEM_zxXu0=" alt="Guava Jam" />
        <img src="https://img.freepik.com/premium-photo/guava-juice-being-poured-from-blender-into-glass-with-slice-guava-rim_198067-290656.jpg" alt="Guava Juice" />
      </div>
    </div>
  );
}

export default Guava;
