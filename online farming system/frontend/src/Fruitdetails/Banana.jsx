import React, { useState } from "react";
import "./Banana.css";

function Banana() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "🍌 Banana (Musa spp.)",
      toggle: "தமிழில் மொழிபெயர் செய்ய",
      season: "Best planted from March to June during warm, humid conditions.",
      disease: "Common diseases: Panama disease, Sigatoka leaf spot, Banana bunchy top virus.",
      medicine: "Use resistant varieties, proper drainage, and fungicides like Carbendazim.",
      products: "Banana Chips, Banana Shake, Banana Flour, and Dried Banana.",
      description: `Banana is a widely consumed tropical fruit, rich in potassium, fiber, and energy. 
It grows well in warm, humid climates and is usually planted during the early summer. 
India is the world's largest producer of bananas, with varieties like Robusta, Rasthali, and Nendran being popular. 
Bananas can be consumed raw or cooked, and are used to make chips, smoothies, sweets, and even flour. 
The banana plant is also important economically due to its fast growth and year-round fruiting.`,
    },
    ta: {
      title: "🍌 வாழைப்பழம் (Musa spp.)",
      toggle: "Translate to English",
      season: "மார்ச்சில் இருந்து ஜூன் வரை வெப்பம் மற்றும் ஈரத்தன்மை அதிகமான காலங்களில் நடவு சிறந்தது.",
      disease: "பொதுவான நோய்கள்: பனாமா நோய், சிகடோகா இலைக் கறுப்பு, வாழைப்பழம் பஞ்சிடாக் டாப் வைரஸ்.",
      medicine: "எதிர்ப்பு வகைகள், சிறந்த நீர்த்தேக்கம், மற்றும் கார்பென்டஸிம் போன்ற பூஞ்சை கொல்லிகள் பயன்படுத்தவும்.",
      products: "வாழை சிப்ஸ், வாழைப்பழ ஷேக், வாழை மாவு, மற்றும் உலர்ந்த வாழைப்பழம்.",
      description: `வாழைப்பழம் என்பது உலகளவில் பரவலாக உண்ணப்படும் வெப்பமண்டலப் பழமாகும். இது பொட்டாசியம், நார்ச்சத்து 
மற்றும் ஆற்றல் அதிகமாக கொண்டுள்ளது. இந்தியா உலகின் மிகப்பெரிய வாழைப்பழ உற்பத்தியாளராகும், 
என்றும் ரோபஸ்டா, ரஸ்தாலி மற்றும் நெந்திரன் ஆகியவை முக்கிய வகைகளாகும். 
வாழைப்பழம் பச்சையாகவும் சமைத்தும் உண்ணப்படுகிறது. சிப்ஸ், ஷேக், இனிப்பு மற்றும் மாவாகவும் பயன்படுத்தப்படுகிறது.`,
    },
  };

  const lang = content[language];

  return (
    <div className="banana-container">
      <div className="lang-toggle-btn">
        <button onClick={() => setLanguage(language === "en" ? "ta" : "en")}>
          {lang.toggle}
        </button>
      </div>

      <h1 className="banana-title">{lang.title}</h1>

      <img
        src="https://images.unsplash.com/photo-1528279335935-f486951a6adf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Banana"
        className="banana-big-image"
      />

      <p className="banana-description">{lang.description}</p>

      <div className="banana-info">
        <p><strong>🌱 Season to Plant:</strong> {lang.season}</p>
        <p><strong>🦠 Common Diseases:</strong> {lang.disease}</p>
        <p><strong>💊 Treatments:</strong> {lang.medicine}</p>
        <p><strong>🍽️ Value-added Products:</strong> {lang.products}</p>
      </div>

      <div className="banana-products">
        <img src="https://thefoodiebunch.com/wp-content/uploads/2023/02/Healthy-Baked-Banana-Chips.jpg" alt="Banana Chips" />
        <img src="https://media.istockphoto.com/id/1315105687/photo/banana-chips-healthy-food-dry-fruits-and-healthy-vegetable-chips-healthy-vegan-snack-on.jpg?s=612x612&w=0&k=20&c=oK4C9Sao7dJybs1jR2WYrhQdzqwucgk0rKrcEgyqg6I=" alt="Dried Banana" />
      </div>
    </div>
  );
}

export default Banana;
