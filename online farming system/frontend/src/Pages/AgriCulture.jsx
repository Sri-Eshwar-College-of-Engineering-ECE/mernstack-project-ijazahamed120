import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import crops from "../data/crops";
import "./Agriculture.css";

const AgriCulture = () => {
  const [isTamil, setIsTamil] = useState(false);
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setIsTamil(!isTamil);
  };

  return (
    <div className="agriculture-page">
      <div className="translate-button">
        <button onClick={toggleLanguage}>
          {isTamil ? "Switch to English" : "தமிழில் மொழிபெயர் செய்ய"}
        </button>
      </div>
      <h1>{isTamil ? "விவசாய பயிர்கள்" : "Agricultural Crops"}</h1>
      <div className="crops-container">
        {crops.map((crop) => (
          <div key={crop.id} className="crop-card" onClick={() => navigate(`/agriculture/${crop.id}`)}>
            <img src={crop.image} alt={crop.name} />
            <h2>{isTamil ? crop.tamilName : crop.name}</h2>
            <p>{isTamil ? "விவரம்: " : "Description: "}{isTamil ? crop.tamilName : crop.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgriCulture;
