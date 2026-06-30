import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./YieldEstimator.css";

const YieldEstimator = () => {
  const navigate = useNavigate();
  const [cropType, setCropType] = useState("Paddy");
  const [landSize, setLandSize] = useState(1);
  const [soilQuality, setSoilQuality] = useState("good");
  const [irrigation, setIrrigation] = useState("standard");
  const [mandiPrices, setMandiPrices] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  // Fetch Mandi prices for accurate live calculation
  useEffect(() => {
    const getPrices = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/mandi-prices");
        const data = await response.json();
        if (data.success) {
          setMandiPrices(data.prices);
        }
      } catch (err) {
        console.error("Failed to load mandi prices for estimator:", err);
      }
    };
    getPrices();
  }, []);

  const handleCalculate = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Base yields per acre (in Tons)
      const baseYields = {
        Paddy: 3.5,
        Wheat: 2.2,
        Tomato: 12.0,
        Onion: 10.0,
        Brinjal: 10.5,
        Carrot: 9.0,
        LadiesFinger: 5.0,
        Cabbage: 14.0,
        Mango: 6.0,
        Banana: 18.0,
        Papaya: 15.0,
        Guava: 8.5,
        Watermelon: 16.0
      };

      // Fallback base Mandi prices per Quintal (100 Kg) if not in the live API
      const defaultPrices = {
        Paddy: 3500,
        Wheat: 2650,
        Tomato: 2200,
        Onion: 1800,
        Brinjal: 2000,
        Carrot: 2400,
        LadiesFinger: 2100,
        Cabbage: 1500,
        Mango: 4500,
        Banana: 2800,
        Papaya: 2000,
        Guava: 3200,
        Watermelon: 1200
      };

      // Multipliers
      const soilMultipliers = {
        good: 1.0,
        average: 0.85,
        poor: 0.6
      };

      const irrigationMultipliers = {
        high: 1.1,
        standard: 1.0,
        low: 0.75
      };

      const selectedBaseYield = baseYields[cropType] || 2.0;
      const soilMult = soilMultipliers[soilQuality];
      const irrMult = irrigationMultipliers[irrigation];

      // Calculate Total Yield (Tons)
      const totalYield = selectedBaseYield * landSize * soilMult * irrMult;

      // Fetch live price per quintal (100 kg), 1 Ton = 10 Quintals
      let pricePerQuintal = defaultPrices[cropType] || 2000;
      if (mandiPrices && mandiPrices[cropType]) {
        pricePerQuintal = mandiPrices[cropType].price;
      }
      const pricePerTon = pricePerQuintal * 10;

      // Gross Revenue
      const grossRevenue = totalYield * pricePerTon;

      // Base Expenses per acre (₹20,000 base)
      const baseCostPerAcre = 20000;
      const irrigationCostAdjustment = irrigation === "high" ? 1.15 : irrigation === "low" ? 0.85 : 1.0;
      const totalCost = baseCostPerAcre * landSize * irrigationCostAdjustment;

      // Net Profit
      const netProfit = grossRevenue - totalCost;

      // Custom Farming Tip
      let tip = "Apply appropriate organic fertilizers timely to maximize the harvest quality.";
      if (soilQuality === "poor") {
        tip = "Your soil quality is rated poor. We recommend adding organic humus and vermicompost to naturally restore soil carbon levels.";
      } else if (irrigation === "low") {
        tip = "Low irrigation restricts yield. Consider installing high-efficiency drip irrigation to conserve water while maximizing absorption.";
      } else if (cropType === "Paddy" && soilQuality === "good") {
        tip = "Excellent crop conditions! Practice systematic crop rotation after harvesting Paddy to prevent soil exhaustion.";
      }

      setResults({
        totalYield: totalYield.toFixed(2),
        pricePerTon,
        grossRevenue: Math.round(grossRevenue),
        totalCost: Math.round(totalCost),
        netProfit: Math.round(netProfit),
        tip
      });
      setLoading(false);
    }, 600);
  };

  return (
    <div className="estimator-bg">
      <div className="navbar-overlay">
        <button className="dashboard-back-btn" onClick={() => navigate("/dashboard")}>
          ⟵ Back to Dashboard
        </button>
      </div>

      <div className="estimator-container">
        <div className="estimator-header">
          <h1>Crop Yield & Revenue Estimator 🌾</h1>
          <p>Estimate your crop harvest tonnage, operational expenses, and net profit margins using real-time mandi prices.</p>
        </div>

        <div className="estimator-grid">
          {/* Left Panel: Form */}
          <div className="estimator-card">
            <h2>Estimation Inputs</h2>
            <form onSubmit={handleCalculate}>
              <div className="form-group">
                <label>Select Crop</label>
                <select value={cropType} onChange={(e) => setCropType(e.target.value)}>
                  <optgroup label="Grains & Crops">
                    <option value="Paddy">Paddy (Basmati)</option>
                    <option value="Wheat">Wheat</option>
                    <option value="Onion">Onion</option>
                  </optgroup>
                  <optgroup label="Vegetables">
                    <option value="Tomato">Tomato</option>
                    <option value="Brinjal">Brinjal</option>
                    <option value="Carrot">Carrot</option>
                    <option value="LadiesFinger">Ladies Finger</option>
                    <option value="Cabbage">Cabbage</option>
                  </optgroup>
                  <optgroup label="Fruits">
                    <option value="Mango">Mango</option>
                    <option value="Banana">Banana</option>
                    <option value="Papaya">Papaya</option>
                    <option value="Guava">Guava</option>
                    <option value="Watermelon">Watermelon</option>
                  </optgroup>
                </select>
              </div>

              <div className="form-group">
                <label>Land Size (Acres)</label>
                <input
                  type="number"
                  min="0.5"
                  max="100"
                  step="0.5"
                  value={landSize}
                  onChange={(e) => setLandSize(parseFloat(e.target.value) || 1)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Soil Quality</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="soilQuality"
                      value="good"
                      checked={soilQuality === "good"}
                      onChange={() => setSoilQuality("good")}
                    />
                    Good
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="soilQuality"
                      value="average"
                      checked={soilQuality === "average"}
                      onChange={() => setSoilQuality("average")}
                    />
                    Average
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="soilQuality"
                      value="poor"
                      checked={soilQuality === "poor"}
                      onChange={() => setSoilQuality("poor")}
                    />
                    Poor
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Water Irrigation Level</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="irrigation"
                      value="high"
                      checked={irrigation === "high"}
                      onChange={() => setIrrigation("high")}
                    />
                    High
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="irrigation"
                      value="standard"
                      checked={irrigation === "standard"}
                      onChange={() => setIrrigation("standard")}
                    />
                    Standard
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="irrigation"
                      value="low"
                      checked={irrigation === "low"}
                      onChange={() => setIrrigation("low")}
                    />
                    Low
                  </label>
                </div>
              </div>

              <button type="submit" className="calculate-btn" disabled={loading}>
                {loading ? "Simulating Harvest..." : "Calculate Yield & Profit"}
              </button>
            </form>
          </div>

          {/* Right Panel: Results */}
          <div className="results-card">
            <h2>Financial Projection</h2>
            {results ? (
              <div className="results-content">
                <div className="stats-row">
                  <div className="stat-box">
                    <span>Expected Yield</span>
                    <strong>{results.totalYield} Tons</strong>
                  </div>
                  <div className="stat-box">
                    <span>Market Rate / Ton</span>
                    <strong>₹{results.pricePerTon.toLocaleString()}</strong>
                  </div>
                </div>

                <div className="breakdown-list">
                  <div className="breakdown-item">
                    <span>Gross Revenue</span>
                    <span className="val pos">₹{results.grossRevenue.toLocaleString()}</span>
                  </div>
                  <div className="breakdown-item">
                    <span>Total Cost (Expenses)</span>
                    <span className="val neg">₹{results.totalCost.toLocaleString()}</span>
                  </div>
                  <div className="breakdown-divider" />
                  <div className="breakdown-item total">
                    <span>Net Profit</span>
                    <span className={`val total-profit ${results.netProfit >= 0 ? "positive" : "negative"}`}>
                      ₹{results.netProfit.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* SVG Margin Chart */}
                <div className="results-chart-box">
                  <h3>Cost vs Profit Breakdown</h3>
                  <svg viewBox="0 0 400 120" className="profit-svg-bar">
                    {/* Background Grid */}
                    <line x1="10" y1="110" x2="390" y2="110" stroke="#edf2f7" strokeWidth="2" />
                    
                    {/* Expenses Bar */}
                    <rect x="30" y="45" width="340" height="15" rx="7" fill="#fed7d7" />
                    <rect
                      x="30"
                      y="45"
                      width={Math.min(340, (results.totalCost / results.grossRevenue) * 340) || 30}
                      height="15"
                      rx="7"
                      fill="#e53e3e"
                      className="animated-bar"
                    />
                    <text x="30" y="35" className="chart-label text-neg">Expenses: ₹{results.totalCost.toLocaleString()}</text>

                    {/* Net Profit Bar */}
                    {results.netProfit > 0 ? (
                      <>
                        <rect x="30" y="90" width="340" height="15" rx="7" fill="#c6f6d5" />
                        <rect
                          x="30"
                          y="90"
                          width={Math.min(340, (results.netProfit / results.grossRevenue) * 340) || 30}
                          height="15"
                          rx="7"
                          fill="#38a169"
                          className="animated-bar"
                        />
                        <text x="30" y="80" className="chart-label text-pos">Net Profit: ₹{results.netProfit.toLocaleString()}</text>
                      </>
                    ) : (
                      <text x="30" y="95" className="chart-label text-warn">Net Loss: Estimated costs exceed market revenues.</text>
                    )}
                  </svg>
                </div>

                <div className="advisor-tip">
                  <h4>💡 Agronomist Advisory Tip</h4>
                  <p>{results.tip}</p>
                </div>
              </div>
            ) : (
              <div className="empty-results">
                <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="#a0aec0" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a3 3 0 0 1-3-3H6.75M12 12.75a3 3 0 0 0 3-3H17.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p>Fill out the parameters on the left and click calculate to view your projected harvest yield, operating expenses, and net profit margins.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YieldEstimator;
