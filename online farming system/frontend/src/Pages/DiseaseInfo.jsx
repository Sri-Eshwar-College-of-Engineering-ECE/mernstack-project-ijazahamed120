import React, { useState } from 'react';
import diseaseData from '../data/diseaseData';
import './DiseaseInfo.css';

function DiseaseInfo() {
  const crops = Object.keys(diseaseData);
  const [crop, setCrop] = useState(crops[0] || '');
  const diseases = crop ? Object.keys(diseaseData[crop] || {}) : [];
  const [disease, setDisease] = useState(diseases[0] || '');

  const handleCropChange = (e) => {
    const v = e.target.value;
    setCrop(v);
    const ds = Object.keys(diseaseData[v] || {});
    setDisease(ds[0] || '');
  };

  const handleDiseaseChange = (e) => setDisease(e.target.value);

  const info = (disease && diseaseData[crop]) ? diseaseData[crop][disease] : null;

  return (
    <div className="disease-info-page">
      <h1>Disease Information</h1>

      <div className="selectors">
        <label>
          Crop
          <select value={crop} onChange={handleCropChange}>
            {crops.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>

        <label>
          Disease
          <select value={disease} onChange={handleDiseaseChange}>
            {diseases.length === 0 && <option value="">— no data —</option>}
            {diseases.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </label>
      </div>

      {info ? (
        <div className="info-cards">
          <div className="card">
            <h3>Symptoms</h3>
            <ul>{info.symptoms.map(s => <li key={s}>{s}</li>)}</ul>
          </div>

          <div className="card">
            <h3>Causes</h3>
            <ul>{info.causes.map(s => <li key={s}>{s}</li>)}</ul>
          </div>

          <div className="card">
            <h3>Prevention</h3>
            <ul>{info.prevention.map(s => <li key={s}>{s}</li>)}</ul>
          </div>

          <div className="card">
            <h3>Treatment</h3>
            <ul>{info.treatment.map(s => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      ) : (
        <p className="no-data">Select a crop and disease to view information.</p>
      )}
    </div>
  );
}

export default DiseaseInfo;
