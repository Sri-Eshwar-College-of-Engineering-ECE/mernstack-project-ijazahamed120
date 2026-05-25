import React, { useState } from "react";
import "./Watermelon.css";

function Watermelon() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "Watermelon",
      season: "Best planted in late spring or early summer.",
      disease: "Common diseases: Fusarium wilt, Powdery mildew.",
      medicine: "Use Trichoderma, neem oil, and maintain good drainage.",
      products: "Watermelon Juice and Candied Watermelon Rind",
      toggle: "தமிழில் மொழிபெயர் செய்ய",
    },
    ta: {
      title: "தர்பூசணி",
      season: "வசந்தகால இறுதியில் அல்லது கோடை தொடக்கத்தில் நடவு சிறந்தது.",
      disease: "பொதுவான நோய்கள்: ஃபுசேரியம் வில்ட், தூசு பூஞ்சை.",
      medicine: "ட்ரைக்கோடெர்மா, வேம்பெண்ணெய் பயன்படுத்தவும் மற்றும் நல்ல வடிகாலமைப்பை பராமரிக்கவும்.",
      products: "தர்பூசணி சாறு மற்றும் இனிப்பான தர்பூசணி தோல்",
      toggle: "Translate to English",
    },
  };

  const lang = content[language];

  return (
    <div className="watermelon-container">
      <button className="lang-toggle" onClick={() => setLanguage(language === "en" ? "ta" : "en")}>
        {lang.toggle}
      </button>

      <h1>{lang.title}</h1>
      <img
        className="watermelon-image"
        src="https://media.istockphoto.com/id/157374780/photo/watermelon.jpg?s=612x612&w=0&k=20&c=B9SM1WidJ97CfQisiYpE5_emKGtvpeHDeYC4amJSZeM="
        alt="Watermelon"
      />
      <p className="watermelon-desc"><strong>Season to Plant:</strong> {lang.season}</p>
      <p className="watermelon-desc"><strong>Diseases:</strong> {lang.disease}</p>
      <p className="watermelon-desc"><strong>Medicines:</strong> {lang.medicine}</p>
      <p className="watermelon-desc"><strong>Value-added Products:</strong> {lang.products}</p>

      <div className="watermelon-products">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/029/543/597/small/a-glass-of-watermelon-juice-with-fresh-watermelon-on-wooden-table-outdoors-ai-generated-pro-photo.jpg" alt="Watermelon Juice" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsH3ELCJCgWSxhc9kIsLX66T6iDEIwS3Spg&s" alt="Candied Watermelon Rind" />
      </div>
    </div>
  );
}

export default Watermelon;
