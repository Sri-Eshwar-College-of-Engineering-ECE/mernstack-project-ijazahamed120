import React, { useEffect, useRef, useState } from "react";
import "./PestDisease.css";

const PLANT_ID_API_KEY = import.meta.env.VITE_PLANTID_API_KEY;
const PLANT_ID_ENDPOINT = "https://api.plant.id/v2/health_assessment";

const cropOptions = [
  { value: "rice", label: "Rice", ta: "அரிசி" },
  { value: "tomato", label: "Tomato", ta: "தக்காளி" },
  { value: "chilli", label: "Chilli", ta: "மிளகாய்" },
  { value: "banana", label: "Banana", ta: "வாழைப் பழம்" },
  { value: "brinjal", label: "Brinjal", ta: "கத்தரிக்காய்" },
  { value: "potato", label: "Potato", ta: "உருளைக்கிழங்கு" },
  { value: "cotton", label: "Cotton", ta: "பட்டு" },
  { value: "others", label: "Others", ta: "மற்றவை" },
];

const resultTemplates = {
  rice: {
    diseaseName: "Rice Blast",
    diseaseNameTa: "அரிசி பிளாஸ்ட்",
    confidence: "93% Match",
    referenceImage: "https://img.freepik.com/free-photo/close-up-rice-leaf-with-rice-blast-disease_23-2148165380.jpg?w=900&t=st=1700000000~exp=1700000600~hmac=33333333333333333333333333333333",
    symptoms: ["Yellow-orange spots", "Leaf tip dieback", "Necrotic lesions"],
    causes: ["Fungal infection", "High humidity", "Dense planting"],
    affectedCrops: ["Rice", "Wheat"],
    severity: "High",
    prevention: ["Use disease-resistant varieties", "Improve spacing", "Remove infected leaves"],
    treatment: ["Apply copper fungicide", "Use balanced nitrogen", "Practice crop rotation"],
    tips: ["Inspect leaves weekly", "Water early morning", "Keep field clean"],
  },
  tomato: {
    diseaseName: "Early Blight",
    diseaseNameTa: "ஆரம்ப பிளைட்",
    confidence: "88% Match",
    referenceImage: "https://img.freepik.com/free-photo/tomato-leaf-disease-close-up_1232-4499.jpg?w=900&t=st=1700000000~exp=1700000600~hmac=44444444444444444444444444444444",
    symptoms: ["Brown concentric spots", "Yellowing leaves", "Leaf drop"],
    causes: ["Fungal spores", "Wet leaves", "Poor air circulation"],
    affectedCrops: ["Tomato", "Potato", "Brinjal"],
    severity: "Medium",
    prevention: ["Avoid overhead irrigation", "Use mulch", "Space plants well"],
    treatment: ["Spray neem oil", "Apply copper fungicide", "Remove affected foliage"],
    tips: ["Keep tools clean", "Monitor weather", "Use healthy seedlings"],
  },
  chilli: {
    diseaseName: "Powdery Mildew",
    diseaseNameTa: "துவர்ப்பு பூச்சணுக்கொட்டை",
    confidence: "81% Match",
    referenceImage: "https://img.freepik.com/free-photo/close-up-natural-white-mildew-on-leaves_23-2149005330.jpg?w=900&t=st=1700000000~exp=1700000600~hmac=55555555555555555555555555555555",
    symptoms: ["White powdery coating", "Leaf curling", "Stunted growth"],
    causes: ["Fungi", "High humidity", "Poor airflow"],
    affectedCrops: ["Chilli", "Cucumber", "Banana"],
    severity: "Medium",
    prevention: ["Avoid dense planting", "Improve airflow", "Keep leaves dry"],
    treatment: ["Use sulfur spray", "Apply potassium bicarbonate", "Remove badly infected leaves"],
    tips: ["Water at soil level", "Avoid excess fertilizer", "Rotate crops"],
  },
  brinjal: {
    diseaseName: "Bacterial Leaf Spot",
    diseaseNameTa: "பாக்டீரியல் இலைக்கோளாறு",
    confidence: "86% Match",
    referenceImage: "https://img.freepik.com/free-photo/bacterial-spots-on-eggplant-leaf_23-2148955768.jpg?w=900&t=st=1700000000~exp=1700000600~hmac=66666666666666666666666666666666",
    symptoms: ["Small water-soaked spots", "Dark lesions", "Leaf yellowing"],
    causes: ["Bacteria", "Rain splash", "Infected seedlings"],
    affectedCrops: ["Brinjal", "Tomato", "Pepper"],
    severity: "High",
    prevention: ["Use clean seeds", "Avoid wet foliage", "Sanitize tools"],
    treatment: ["Apply copper spray", "Remove infected leaves", "Avoid overhead watering"],
    tips: ["Monitor regularly", "Maintain field hygiene", "Use resistant varieties"],
  },
  potato: {
    diseaseName: "Late Blight",
    diseaseNameTa: "தாமத பிளாஸ்ட்",
    confidence: "90% Match",
    referenceImage: "https://img.freepik.com/free-photo/potato-plant-damaged-late-blight-disease_23-2149000009.jpg?w=900&t=st=1700000000~exp=1700000600~hmac=77777777777777777777777777777777",
    symptoms: ["Water-soaked spots", "Leaf wilting", "White fungal growth"],
    causes: ["Fungal spores", "Cool wet weather", "Poor drainage"],
    affectedCrops: ["Potato", "Tomato"],
    severity: "High",
    prevention: ["Plant in well-drained soil", "Space plants", "Avoid leaf wetness"],
    treatment: ["Apply copper fungicide", "Remove infected plants", "Avoid overhead irrigation"],
    tips: ["Inspect fields in morning", "Keep foliage dry", "Use certified seed"],
  },
  banana: {
    diseaseName: "Yellow Sigatoka",
    diseaseNameTa: "மஞ்சள் சிகாடோக்கா",
    confidence: "84% Match",
    referenceImage: "https://img.freepik.com/free-photo/banana-plant-leaves-diseased-sigatoka_23-2148193408.jpg?w=900&t=st=1700000000~exp=1700000600~hmac=88888888888888888888888888888888",
    symptoms: ["Yellow streaks", "Brown spots", "Leaf death"],
    causes: ["Fungal infection", "Wet conditions", "Poor sanitation"],
    affectedCrops: ["Banana"],
    severity: "Medium",
    prevention: ["Remove infected leaves", "Use resistant varieties", "Improve drainage"],
    treatment: ["Apply fungicide", "Prune diseased foliage", "Keep fields clean"],
    tips: ["Avoid overwatering", "Space plants well", "Monitor regularly"],
  },
  others: {
    diseaseName: "Leaf Spot Disease",
    diseaseNameTa: "இலை நுண்ணறை நோய்",
    confidence: "78% Match",
    referenceImage: "https://img.freepik.com/free-photo/leaf-spot-disease-on-leaf_23-2146099023.jpg?w=900&t=st=1700000000~exp=1700000600~hmac=99999999999999999999999999999999",
    symptoms: ["Dark spots", "Yellow halos", "Leaf drop"],
    causes: ["Fungus", "Bacteria", "Wet weather"],
    affectedCrops: ["Multiple crops"],
    severity: "Low",
    prevention: ["Improve air circulation", "Avoid overhead irrigation", "Use clean seeds"],
    treatment: ["Apply organic fungicide", "Remove affected leaves", "Use proper spacing"],
    tips: ["Inspect crops weekly", "Keep tools clean", "Rotate crops"],
  },
};

const severityColor = {
  Low: "#24a148",
  Medium: "#f0a500",
  High: "#d90429",
};

const parsePlantIdResponse = (response) => {
  // Plant.id health_assessment response varies; try common paths
  const ha = response.health_assessment || response;
  const suggestion = ha.suggestions?.[0] || ha.suggestions || {};
  const prob = suggestion.probability ?? suggestion.probability_score ?? null;

  const diseaseName = suggestion.name || suggestion.disease_name || suggestion.display_name || "Unknown";
  const confidence = prob ? `${Math.round(prob * 100)}% Match` : "Unknown confidence";

  const details = suggestion.disease_details || suggestion.details || suggestion.health_details || {};

  const normalize = (v) => {
    if (!v) return [];
    if (Array.isArray(v)) return v;
    if (typeof v === "string") return v.split(/[,;]\s*/).map(s => s.trim()).filter(Boolean);
    return [];
  };

  return {
    diseaseName,
    diseaseNameTa: diseaseName,
    confidence,
    referenceImage: suggestion.image_url || ha.image || "",
    symptoms: normalize(details.symptoms || details.common_symptoms || details.signs),
    causes: normalize(details.cause || details.causes || details.pathogen),
    affectedCrops: normalize(details.affected_crops || details.affected_plants) || [],
    severity: details.severity || "Unknown",
    prevention: normalize(details.prevention || details.preventive_measures),
    treatment: normalize(details.treatment || details.treatments || details.control),
    tips: normalize(details.tips || details.advice || details.recommendations),
    raw: response,
  };
};

const PestDisease = () => {
  const [language, setLanguage] = useState("en");
  const [selectedCrop, setSelectedCrop] = useState("tomato");
  const [imagePreview, setImagePreview] = useState("");
  const [stage, setStage] = useState("home");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [apiError, setApiError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("pestHistory") || "[]");
    setHistory(saved);
  }, []);

  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.includes("image")) {
      alert("Please upload a JPG or PNG image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
      setStage("home");
    };
    reader.readAsDataURL(file);
  };

  const handleSelectCrop = (value) => {
    setSelectedCrop(value);
  };

  const sendToPlantId = async () => {
    if (!PLANT_ID_API_KEY) {
      throw new Error("Plant.id API key is not configured. Set VITE_PLANTID_API_KEY in your frontend .env file.");
    }

    const base64 = imagePreview.replace(/^data:image\/[^;]+;base64,/, "");
    const payload = {
      images: [base64],
      modifiers: ["health_all"],
      language: "en",
    };

    const response = await fetch(PLANT_ID_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": PLANT_ID_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Plant.id request failed: ${response.status} ${text}`);
    }

    return response.json();
  };

  const handleDetect = async () => {
    if (!imagePreview) {
      alert("Please upload an image first.");
      return;
    }

    setApiError("");
    setStage("loading");

    try {
      const data = await sendToPlantId();
      const apiResult = parsePlantIdResponse(data);
      const resultPayload = {
        ...apiResult,
        image: imagePreview,
        crop: selectedCrop,
        date: new Date().toLocaleString(),
      };
      setResult(resultPayload);
      setStage("result");
      saveHistory(resultPayload);
    } catch (error) {
      console.error(error);
      setApiError(error.message || "Plant.id analysis failed.");
      setStage("home");
    }
  };

  const handleReset = () => {
    setImagePreview("");
    setResult(null);
    setStage("home");
  };

  const saveHistory = (entry) => {
    const newEntry = {
      id: Date.now(),
      payload: entry,
    };

    const updatedHistory = [newEntry, ...history].slice(0, 8);
    setHistory(updatedHistory);
    localStorage.setItem("pestHistory", JSON.stringify(updatedHistory));
  };

  const handleViewHistory = (entry) => {
    // entry.payload contains the full saved API result
    setResult(entry.payload);
    setStage("result");
  };

  const translate = (textEn, textTa) => (language === "ta" ? textTa : textEn);
  const resultDetails = result || null;

  return (
    <div className="pest-page">
      <div className="pest-hero-card">
        <div className="pest-hero-text">
          <span className="indicator">AI Plant Disease Detection</span>
          <h1>{translate("AI Plant Disease Detection", "ஐஐ புல் நோய் கண்டறிதல்")}</h1>
          <p>{translate("Upload plant leaf image to identify disease", "பிளன்ட் இலைப் படத்தை பதிவேற்றி நோயை கண்டறியவும்")}</p>
          <div className="pest-hero-actions">
            <button onClick={() => fileInputRef.current?.click()}>{translate("Upload from gallery", "கேலரி மூலம் பதிவேறு")}</button>
            <button onClick={() => fileInputRef.current?.click()}>{translate("Take photo using camera", "கேமராவால் புகைப்படம் எடு")}</button>
          </div>
        </div>
        <div className="pest-hero-image" />
      </div>

      <div className="upload-section">
        <div className="upload-panel">
          <div className="panel-title">{translate("Image Upload Section", "படம் பதிவேற்ற பகுதி")}</div>
          <div className="upload-controls">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg"
              capture="environment"
              style={{ display: "none" }}
              onChange={handleUpload}
            />
            {!imagePreview ? (
              <div className="upload-placeholder">
                <p>{translate("Upload JPG or PNG image of the affected leaf.", "பாதிக்கப்பட்ட இலையின் JPG அல்லது PNG படத்தை பதிவேற்று.")}</p>
              </div>
            ) : (
              <div className="image-preview-card">
                <img src={imagePreview} alt="Uploaded preview" />
                <div className="preview-actions">
                  <button onClick={() => fileInputRef.current?.click()}>{translate("Change image", "படத்தை மாற்று")}</button>
                  <button onClick={handleReset}>{translate("Remove image", "படத்தை நீக்கு")}</button>
                </div>
              </div>
            )}
            <div className="supported-formats">
              {translate("Supported formats: JPG / PNG", "ஆதரவு செய்யப்பட்ட வடிவங்கள்: JPG / PNG")}
            </div>
          </div>

          <div className="crop-selection">
            <div className="panel-title">{translate("Crop Selection", "பயிர் தேர்வு")}</div>
            <div className="crop-list">
              {cropOptions.map((crop) => (
                <button
                  key={crop.value}
                  className={crop.value === selectedCrop ? "crop-card active" : "crop-card"}
                  onClick={() => handleSelectCrop(crop.value)}
                >
                  {translate(crop.label, crop.ta)}
                </button>
              ))}
            </div>
          </div>

          <div className="detect-area">
            <button className="detect-button" onClick={handleDetect} disabled={!imagePreview}>
              {translate("Detect Disease", "நோயை கண்டறி")}
            </button>
            <p>{translate("Upload → Preview → Detect", "பதிவேற்று → முன்னோட்டம் → கண்டறி")}</p>
            {apiError && <p className="error-text">{apiError}</p>}
          </div>
        </div>

        <div className="info-panel">
          <div className="info-box">
            <h2>{translate("Why this helps farmers", "இது விவசாயிகளுக்கு எப்படி உதவும்")}</h2>
            <p>{translate("Identify plant disease early and keep crops healthy.", "மூலையை முறையீடு செய்வதன் மூலம் பயிர்களை ஆரோக்கியமாக வைத்துக் கொள்ளவும்.")}</p>
            <p>{translate("Learn symptoms, causes, and treatment in one place.", "ஒரே இடத்தில் அறிகுறிகள், காரணங்கள் மற்றும் சிகிச்சையை அறிக.")}</p>
            <p>{translate("Save results for quick reference later.", "விளைவுகளை பின்னர் எளிதில் பார்க்க சேமி.")}</p>
          </div>

          <div className="emergency-box">
            <h3>{translate("Expert / Emergency Help", "வல்லுநர் / அவசர உதவி")}</h3>
            <p>{translate("Contact local agriculture support if the disease is severe.", "நோய் கடுமையானால் உள்ளூர் விவசாய ஆதரவுடன் தொடர்பு கொள்ளவும்.")}</p>
            <a href="tel:+18001234567">{translate("Call agricultural helpline", "விவசாய உதவி நம்பரை அழை")}</a>
          </div>
        </div>
      </div>

      {stage === "loading" && (
        <div className="loading-panel">
          <div className="loader" />
          <h2>{translate("Analyzing image…", "படத்தை பகுப்பாய்வு செய்கிறது…")}</h2>
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
        </div>
      )}

      {stage === "result" && result && (
        <div className="result-panel">
          <div className="result-header">
            <div>
              <span className="result-tag">{translate("Result", "முடிவு")}</span>
              <h1>{translate(result.diseaseName, result.diseaseNameTa)}</h1>
              <p className="confidence">{result.confidence}</p>
            </div>
            <div className="language-switch">
              <button onClick={() => setLanguage("en")}>English</button>
              <button onClick={() => setLanguage("ta")}>தமிழ்</button>
            </div>
          </div>

          <div className="result-grid">
            <div className="result-card image-card">
              <h3>{translate("Uploaded Image", "பதிவேற்றப்பட்ட படம்")}</h3>
              <img src={result.image} alt="Detected" />
            </div>
            <div className="result-card reference-card">
              <h3>{translate("Reference Image", "குறிப்பு படம்")}</h3>
              <img src={result.referenceImage} alt="Reference" />
            </div>
            <div className="result-card">
              <h3>{translate("Symptoms", "அறிகுறிகள்")}</h3>
              <ul>
                {(resultDetails?.symptoms || result.symptoms || []).map((item) => (
                  <li key={item}>{translate(item, item)}</li>
                ))}
              </ul>
            </div>
            <div className="result-card">
              <h3>{translate("Causes", "காரணங்கள்")}</h3>
              <ul>
                {(resultDetails?.causes || result.causes || []).map((item) => (
                  <li key={item}>{translate(item, item)}</li>
                ))}
              </ul>
            </div>
            <div className="result-card">
              <h3>{translate("Affected Crops", "பாதிக்கப்பட்ட பயிர்கள்")}</h3>
              <p>{translate((result.affectedCrops || []).join(", "), (result.affectedCrops || []).join(", "))}</p>
            </div>
            <div className="result-card severity-card">
              <h3>{translate("Severity Level", "கடுமை நிலை")}</h3>
              <div className="severity-pill" style={{ backgroundColor: severityColor[result.severity] || "#24a148" }}>
                {translate(result.severity, result.severity)}
              </div>
            </div>
            <div className="result-card">
              <h3>{translate("Prevention Methods", "தடை முறைகள்")}</h3>
              <ul>
                {(resultDetails?.prevention || result.prevention || []).map((item) => (
                  <li key={item}>{translate(item, item)}</li>
                ))}
              </ul>
            </div>
            <div className="result-card">
              <h3>{translate("Treatment / Solution", "சிகிச்சை / தீர்வு")}</h3>
              <ul>
                {(resultDetails?.treatment || result.treatment || []).map((item) => (
                  <li key={item}>{translate(item, item)}</li>
                ))}
              </ul>
            </div>
            <div className="result-card">
              <h3>{translate("Farmer Tips", "விவசாய யுக்திகள்")}</h3>
              <ul>
                {(result.tips || []).map((item) => (
                  <li key={item}>{translate(item, item)}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="result-actions">
            <button onClick={handleReset}>{translate("Detect another image", "மறு படம் கண்டறி")}</button>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div className="history-panel">
          <h2>{translate("History", "பின்னணி")}</h2>
          <div className="history-grid">
            {history.map((entry) => {
              const payload = entry.payload || entry;
              return (
                <div key={entry.id} className="history-card">
                  <img src={payload.image} alt={payload.diseaseName} />
                  <div>
                    <strong>{translate(payload.diseaseName, payload.diseaseNameTa)}</strong>
                    <p>{payload.date}</p>
                    <div className="history-actions">
                      <button onClick={() => handleViewHistory(entry)}>{translate("View again", "மீண்டும் பார்க்க")}</button>
                      <button onClick={() => {
                        const updated = history.filter((item) => item.id !== entry.id);
                        setHistory(updated);
                        localStorage.setItem("pestHistory", JSON.stringify(updated));
                      }}>{translate("Delete", "அழி")}</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PestDisease;
