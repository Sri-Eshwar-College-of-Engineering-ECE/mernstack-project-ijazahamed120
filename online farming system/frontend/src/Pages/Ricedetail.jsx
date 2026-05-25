import React from "react";
import { useNavigate } from "react-router-dom";
import "./CropDetail.css";


const RiceDetail = () => {
  const navigate = useNavigate();

  const riceProduct = {
    name: "Rice Seeds",
    image: "/images/rice-product.jpg", // use actual image path
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product: riceProduct } });
  };

  return (
    <div className="crop-detail-container">
      {/* Existing crop info like season, yield, etc. */}

      <div className="product-section">
        <img src={riceProduct.image} alt="Rice Seeds" />
        <h3>{riceProduct.name}</h3>
        <button className="buy-now-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default RiceDetail;
