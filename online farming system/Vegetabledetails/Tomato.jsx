import React from "react";
import "./Tomato.css";

function Tomato() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Tomato / தக்காளி</h2>
      <img
        src="https://www.bigbasket.com/media/uploads/p/l/10000159_15-fresho-tomato-hybrid.jpg"
        alt="Tomato"
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p style={{ marginTop: "15px" }}>
        Tomatoes are rich in vitamins A and C, and used widely in cooking.
        <br />
        தக்காளி என்பது விட்டமின் A மற்றும் C நிறைந்தது மற்றும் பலவிதமான உணவுகளில்
        பயன்படுத்தப்படுகிறது.
      </p>
    </div>
  );
}

export default Tomato;
