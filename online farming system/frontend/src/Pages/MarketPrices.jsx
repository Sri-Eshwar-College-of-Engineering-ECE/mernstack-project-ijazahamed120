import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MarketPrices.css";

const MarketPrices = () => {
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState("Paddy");
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const [cropData, setCropData] = useState({
    Paddy: {
      name: "Paddy (Basmati)",
      tamilName: "நெல் (பாசுமதி)",
      price: "₹3,500",
      change: "+₹150",
      trend: "High Demand",
      status: "up",
      history: [
        { date: "11:20", price: 3410 },
        { date: "11:21", price: 3450 },
        { date: "11:22", price: 3430 },
        { date: "11:23", price: 3470 },
        { date: "11:24", price: 3480 },
        { date: "11:25", price: 3500 }
      ]
    },
    Tomato: {
      name: "Tomato",
      tamilName: "தக்காளி",
      price: "₹2,200",
      change: "-₹300",
      trend: "Increased Supply",
      status: "down",
      history: [
        { date: "11:20", price: 2350 },
        { date: "11:21", price: 2310 },
        { date: "11:22", price: 2280 },
        { date: "11:23", price: 2250 },
        { date: "11:24", price: 2210 },
        { date: "11:25", price: 2200 }
      ]
    },
    Wheat: {
      name: "Wheat",
      tamilName: "கோதுமை",
      price: "₹2,650",
      change: "+₹50",
      trend: "Stable",
      status: "up",
      history: [
        { date: "11:20", price: 2500 },
        { date: "11:21", price: 2550 },
        { date: "11:22", price: 2580 },
        { date: "11:23", price: 2600 },
        { date: "11:24", price: 2600 },
        { date: "11:25", price: 2650 }
      ]
    },
    Onion: {
      name: "Onion",
      tamilName: "வெங்காயம்",
      price: "₹1,800",
      change: "+₹200",
      trend: "Steady Demand",
      status: "up",
      history: [
        { date: "11:20", price: 1500 },
        { date: "11:21", price: 1600 },
        { date: "11:22", price: 1550 },
        { date: "11:23", price: 1700 },
        { date: "11:24", price: 1750 },
        { date: "11:25", price: 1800 }
      ]
    }
  });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/mandi-prices");
        const data = await response.json();
        if (data.success) {
          setCropData(prevData => {
            const updated = { ...prevData };
            Object.keys(data.prices).forEach(key => {
              if (updated[key]) {
                const newPrice = data.prices[key].price;
                const newChange = data.prices[key].change;
                const newTrend = data.prices[key].trend;
                const newStatus = data.prices[key].status;

                updated[key].price = `₹${newPrice.toLocaleString()}`;
                updated[key].change = `${newChange >= 0 ? '+' : ''}₹${newChange.toLocaleString()}`;
                updated[key].trend = newTrend;
                updated[key].status = newStatus;

                const currentHistory = [...updated[key].history];
                const now = new Date();
                const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                currentHistory.push({ date: timeStr, price: newPrice });
                if (currentHistory.length > 6) {
                  currentHistory.shift();
                }
                updated[key].history = currentHistory;
              }
            });
            return updated;
          });
        }
      } catch (err) {
        console.error("Failed to fetch Mandi prices:", err);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 5000);
    return () => clearInterval(interval);
  }, []);

  const getSvgDetails = (history) => {
    const prices = history.map(h => h.price);
    const min = Math.min(...prices) - 50;
    const max = Math.max(...prices) + 50;
    const height = 150;
    const chartHeight = 220;

    const points = history.map((h, idx) => {
      const x = 50 + (idx * 86);
      const y = chartHeight - 40 - ((h.price - min) / (max - min)) * height;
      return { x, y, price: h.price, date: h.date };
    });

    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${chartHeight - 30} L ${points[0].x} ${chartHeight - 30} Z`;

    return { linePath, areaPath, points };
  };

  const currentCrop = cropData[selectedCrop];
  const { linePath, areaPath, points } = getSvgDetails(currentCrop.history);

  return (
    <div className="market-prices-bg">
      <div className="navbar-overlay">
        <button className="dashboard-back-btn" onClick={() => navigate("/dashboard")}>
          ⟵ Back to Dashboard
        </button>
      </div>

      <div className="market-container">
        <div className="market-header">
          <h1>Live Mandi Wholesale Market Prices 📈</h1>
          <p>Stay updated with the latest wholesale market prices per Quintal (100 Kg) across regional mandis.</p>
        </div>

        <div className="market-layout">
          {/* Left panel: Interactive Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <h2>Price Trend: {currentCrop.name}</h2>
              <div className="crop-tabs">
                {Object.keys(cropData).map(key => (
                  <button
                    key={key}
                    className={`tab-btn ${selectedCrop === key ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCrop(key);
                      setHoveredPoint(null);
                    }}
                  >
                    {cropData[key].name}
                  </button>
                ))}
              </div>
            </div>

            <div className="svg-chart-container">
              <svg viewBox="0 0 540 220" className="mandi-svg-chart">
                <defs>
                  <linearGradient id="chartAreaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4CAF50" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="50" y1="30" x2="480" y2="30" stroke="rgba(0, 0, 0, 0.05)" />
                <line x1="50" y1="105" x2="480" y2="105" stroke="rgba(0, 0, 0, 0.05)" />
                <line x1="50" y1="180" x2="480" y2="180" stroke="rgba(0, 0, 0, 0.05)" />

                {/* Gradient Fill under the line */}
                <path d={areaPath} fill="url(#chartAreaGradient)" />

                {/* Line path */}
                <path
                  d={linePath}
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Interactive Points */}
                {points.map((p, idx) => (
                  <g key={idx}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="6"
                      fill="#ffffff"
                      stroke="#4CAF50"
                      strokeWidth="3.5"
                      className="chart-dot"
                      onMouseEnter={() => setHoveredPoint(p)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                    {/* X Axis Labels */}
                    <text x={p.x} y="210" textAnchor="middle" className="axis-label">
                      {p.date}
                    </text>
                  </g>
                ))}

                {/* Tooltip on Hover */}
                {hoveredPoint && (
                  <g>
                    <rect
                      x={hoveredPoint.x - 55}
                      y={hoveredPoint.y - 45}
                      width="110"
                      height="30"
                      rx="6"
                      fill="#1d5427"
                      filter="drop-shadow(0 3px 6px rgba(0,0,0,0.15))"
                    />
                    <text
                      x={hoveredPoint.x}
                      y={hoveredPoint.y - 25}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontWeight="bold"
                      fontSize="12"
                    >
                      ₹{hoveredPoint.price}
                    </text>
                  </g>
                )}
              </svg>
            </div>
            
            <div className="chart-footer-info">
              <span className="current-stat">Current Price: <strong>{currentCrop.price}</strong></span>
              <span className={`change-stat ${currentCrop.status}`}>
                {currentCrop.status === "up" ? "▲" : "▼"} {currentCrop.change}
              </span>
            </div>
          </div>

          {/* Right panel: Table */}
          <div className="table-card">
            <h2>Mandi Price Sheet</h2>
            <div className="table-wrapper">
              <table className="mandi-table">
                <thead>
                  <tr>
                    <th>Crop / பயிர்</th>
                    <th>Wholesale Price</th>
                    <th>Today's Change</th>
                    <th>Trend Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(cropData).map(key => {
                    const crop = cropData[key];
                    return (
                      <tr 
                        key={key} 
                        className={selectedCrop === key ? 'highlighted-row' : ''}
                        onClick={() => setSelectedCrop(key)}
                        style={{ cursor: "pointer" }}
                      >
                        <td>
                          <div className="crop-name-cell">
                            <span className="en-name">{crop.name}</span>
                            <span className="ta-name">{crop.tamilName}</span>
                          </div>
                        </td>
                        <td className="price-cell">{crop.price}</td>
                        <td className={`change-cell ${crop.status}`}>
                          {crop.status === "up" ? "▲" : "▼"} {crop.change.split(" ")[0]}
                        </td>
                        <td>
                          <span className={`trend-badge ${crop.status}`}>
                            {crop.trend}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;
