import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Fruits.css";

function Fruits() {
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Fruit Varieties",
      toggle: "தமிழில் மொழிபெயர் செய்ய",
      fruits: [
        {
          name: "Mango",
          desc: "Sweet tropical fruit rich in vitamins and antioxidants.",
          img: "https://media.istockphoto.com/id/1435602229/photo/close-up-of-red-mangoes.jpg?s=612x612&w=0&k=20&c=a2uO7Ly-irGjtfqZC0ZTt9ps_Sh8S3a6ulf-TMRebao=",
          route: "mango",
        },
        {
          name: "Banana",
          desc: "A nutritious fruit that's a great source of energy and fiber.",
          img: "https://images.unsplash.com/photo-1528279335935-f486951a6adf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3Dg",
          route: "banana",
        },
        {
          name: "Papaya",
          desc: "A soft fruit with digestive enzymes and health benefits.",
          img: "https://media.istockphoto.com/id/1163930184/photo/papaya-on-wooden-background.jpg?s=612x612&w=0&k=20&c=W-1l2k1J8raJGvUb1NM0oeqEdC2DqRbt-2gpzfXL01o=",
          route: "papaya",
        },
        {
          name: "Guava",
          desc: "Rich in Vitamin C, good for immunity and digestion.",
          img: "https://5.imimg.com/data5/SELLER/Default/2023/5/310076334/BP/PW/MX/2229642/guava-plants-500x500.jpg",
          route: "guava",
        },
        {
          name: "Watermelon",
          desc: "Hydrating summer fruit loaded with water and nutrients.",
          img: "https://5.imimg.com/data5/QH/WS/MY-29907888/watermelon-plants-500x500.png",
          route: "watermelon",
        },
      ],
    },
    ta: {
      title: "பழ வகைகள்",
      toggle: "Translate to English",
      fruits: [
        {
          name: "மாம்பழம்",
          desc: "விட்டமின்கள் மற்றும் ஆன்டிஆக்ஸிடன்ட்களால் நிறைந்த இனிப்பு பழம்.",
          img: "https://media.istockphoto.com/id/1435602229/photo/close-up-of-red-mangoes.jpg?s=612x612&w=0&k=20&c=a2uO7Ly-irGjtfqZC0ZTt9ps_Sh8S3a6ulf-TMRebao=",
          route: "mango",
        },
        {
          name: "வாழைப்பழம்",
          desc: "ஆற்றல் மற்றும் நார்ச்சத்து நிறைந்த சத்தான பழம்.",
          img: "https://images.unsplash.com/photo-1528279335935-f486951a6adf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3Dg",
          route: "banana",
        },
        {
          name: "பப்பாளி",
          desc: "ஜீரணத்தை மேம்படுத்தும் நன்மைகள் கொண்ட மெல்லிய பழம்.",
          img: "https://media.istockphoto.com/id/1163930184/photo/papaya-on-wooden-background.jpg?s=612x612&w=0&k=20&c=W-1l2k1J8raJGvUb1NM0oeqEdC2DqRbt-2gpzfXL01o=",
          route: "papaya",
        },
        {
          name: "கொய்யாப்பழம்",
          desc: "மிகுந்த விட்டமின் சி உடையது, ரீசிஸ்டென்ஸ் மற்றும் ஜீரணத்திற்கு நல்லது.",
          img: "https://5.imimg.com/data5/SELLER/Default/2023/5/310076334/BP/PW/MX/2229642/guava-plants-500x500.jpg",
          route: "guava",
        },
        {
          name: "தர்பூசணி",
          desc: "நீர் மற்றும் சத்துக்கள் நிறைந்த கோடை பழம்.",
          img: "https://5.imimg.com/data5/QH/WS/MY-29907888/watermelon-plants-500x500.png",
          route: "watermelon",
        },
      ],
    },
  };

  const lang = content[language];

  return (
    <div className="fruits-container">
      <div className="toggle-btn-container">
        <button className="lang-toggle" onClick={() => setLanguage(language === "en" ? "ta" : "en")}>
          {lang.toggle}
        </button>
      </div>

      <h1 className="fruits-title">{lang.title}</h1>

      <div className="fruit-list">
        {lang.fruits.map((fruit, index) => (
          <div
            className="fruit-card"
            key={index}
            onClick={() => navigate(`/fruits/${fruit.route}`)}
          >
            <img src={fruit.img} alt={fruit.name} className="fruit-img" />
            <h3>{fruit.name}</h3>
            <p>{fruit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fruits;
