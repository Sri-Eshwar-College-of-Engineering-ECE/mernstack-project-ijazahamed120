import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Vegetables.css";

function Vegetables() {
  const [language, setLanguage] = useState("en");

  const vegetableImages = {
    tomato: "https://media.istockphoto.com/id/450481469/photo/natural-tomato-greenhouse.jpg?s=612x612&w=0&k=20&c=zeftcGALF-HmVwF7N2nfRlHfIz12wKi5UHkbVX3t_W8=",
    brinjal: "https://www.shutterstock.com/image-photo/purple-striped-brinjal-eggplant-growing-600nw-1733812151.jpg",
    carrot: "https://media.istockphoto.com/id/636718322/photo/fresh-ripe-harvested-carrots-on-the-ground-in-the-garden.jpg?s=612x612&w=0&k=20&c=DvG9SQ1ozy_djkBzqt81iDglXqJbNLCOIH52T3xziyU=",
    ladiesFinger: "https://media.istockphoto.com/id/186514942/photo/tender-ladys-finger-okra.jpg?s=612x612&w=0&k=20&c=P8sOa8isz9PqrbdqPHtmF85rvaT2jz_79qjrYCY53jo=",
    cabbage: "https://media.istockphoto.com/id/1341385091/photo/cabbage-cultivation-close-up.jpg?s=612x612&w=0&k=20&c=KlKO9b5L2nzeEcOTT8wfKWq41h234M7AH9rS-OSaoDM="
  };

  const content = {
    en: {
      title: "Vegetable Varieties",
      toggle: "தமிழில் மொழிபெயர் செய்ய",
      vegetables: [
        {
          name: "Tomato",
          desc: "Rich in vitamins A and C, used in various dishes.",
          img: vegetableImages.tomato,
          path: "tomato",
        },
        {
          name: "Brinjal",
          desc: "Popular for curries and fries, comes in many varieties.",
          img: vegetableImages.brinjal,
          path: "brinjal",
        },
        {
          name: "Carrot",
          desc: "Crunchy root vegetable rich in beta-carotene.",
          img: vegetableImages.carrot,
          path: "carrot",
        },
        {
          name: "Ladies Finger",
          desc: "Also known as Okra, great for digestion and immunity.",
          img: vegetableImages.ladiesFinger,
          path: "ladies-finger",
        },
        {
          name: "Cabbage",
          desc: "Leafy vegetable used in salads, stir-fries, and soups.",
          img: vegetableImages.cabbage,
          path: "cabbage",
        },
      ],
    },
    ta: {
      title: "காய்கறி வகைகள்",
      toggle: "Translate to English",
      vegetables: [
        {
          name: "தக்காளி",
          desc: "விட்டமின் A மற்றும் C நிறைந்தது, பலவிதமான உணவுகளில் பயன்படுத்தப்படுகிறது.",
          img: vegetableImages.tomato,
          path: "tomato",
        },
        {
          name: "கத்தரிக்காய்",
          desc: "குழம்பு மற்றும் பொரியல் தயாரிக்க பிரபலமானது, பல வகைகளில் கிடைக்கும்.",
          img: vegetableImages.brinjal,
          path: "brinjal",
        },
        {
          name: "காரட்",
          desc: "பீட்டா-கேரோட்டீன் நிறைந்த ஒரு இரசமான வேர் காய்கறி.",
          img: vegetableImages.carrot,
          path: "carrot",
        },
        {
          name: "வெண்டைக்காய்",
          desc: "ஜீரணம் மற்றும் நோய் எதிர்ப்பு சக்திக்கு உதவும் நல்ல காய்கறி.",
          img: vegetableImages.ladiesFinger,
          path: "ladies-finger",
        },
        {
          name: "முட்டைகோஸ்",
          desc: "சாலட்கள், ஸ்டிர்-ப்ரை மற்றும் சூப்புகளுக்கு பயன்படும் இலைகளைக் கொண்ட காய்கறி.",
          img: vegetableImages.cabbage,
          path: "cabbage",
        },
      ],
    },
  };

  const lang = content[language];

  return (
    <div className="vegetables-container">
      <button
        className="lang-toggle"
        onClick={() => setLanguage(language === "en" ? "ta" : "en")}
      >
        {lang.toggle}
      </button>
      <h1 className="vegetables-title">{lang.title}</h1>

      <div className="vegetable-list">
        {lang.vegetables.map((veg, index) => (
          <Link to={`/vegetables/${veg.path}`} key={index}>
            <div className="vegetable-card">
              <img src={veg.img} alt={veg.name} />
              <h3>{veg.name}</h3>
              <p>{veg.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Vegetables;
