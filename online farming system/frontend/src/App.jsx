import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Vegetables from "./Pages/Vegetables";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import OrderCheckout from "./Pages/OrderCheckout";
import Animalhusbandary from "./Pages/Animalhusbandary";
import AgriCulture from "./Pages/AgriCulture";
import Cropdetail from "./Pages/Cropdetail";
import Horticulture from './Pages/Horticulture';
import VegetableDetails from './Pages/VegetableDetails';
import Tomato from './Vegetabledetails/Tomato';
import Brinjal from './Vegetabledetails/Brinjal';
import Carrot from './Vegetabledetails/Carrot';
import LadiesFinger from './Vegetabledetails/LadiesFinger';
import Cabbage from './Vegetabledetails/Cabbage';
import Fruits from "./Pages/Fruits";
import Mango from "./Fruitdetails/Mango";
import Banana from "./Fruitdetails/Banana";
import Papaya from "./Fruitdetails/Papaya";
import Guava from "./Fruitdetails/Guava";
import Watermelon from "./Fruitdetails/Watermelon";
import Checkout from './Pages/Checkout';
import Fertilizer from "./Pages/Fertilizer";
import Weather from "./Pages/Weather";
import About from "./Pages/About";
import CustomerCare from "./Pages/CustomerCare";
import DiseaseInfo from "./Pages/DiseaseInfo";
import PestDisease from "./Pages/PestDisease";

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname.toLowerCase();
  if (currentPath === "/" || currentPath === "/profile" || currentPath === "/dashboard") {
    return null;
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/dashboard");
    }
  };

  const backButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.45rem",
    margin: "1.2rem 1rem 0.6rem 1rem",
    padding: "0.05rem 0",
    border: "none",
    backgroundColor: "transparent",
    color: "#1f2937",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    lineHeight: 1.2,
  };

  const arrowStyle = {
    color: "#2463e9",
    fontSize: "1.45rem",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <button style={backButtonStyle} onClick={handleBack}>
      <span style={arrowStyle}>⟵</span> Back
    </button>
  );
}

function App() {
  return (
    <Router>
      <BackButton />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<OrderCheckout />} />
        <Route path="/Vegetables" element={<Vegetables />} />
        <Route path="/animal-husbandry" element={<Animalhusbandary />} />
        {/* Agriculture section */}
        <Route path="/agriculture" element={<AgriCulture />} />
        <Route path="/agriculture/:id" element={<Cropdetail />} /> 
        <Route path="/horticulture" element={<Horticulture />} />
        <Route path="/vegetables" element={<VegetableDetails />} />
        <Route path="/vegetables/tomato" element={<Tomato />} />
        <Route path="/vegetables/brinjal" element={<Brinjal />} />
        <Route path="/vegetables/carrot" element={<Carrot />} />
        <Route path="/vegetables/ladies-finger" element={<LadiesFinger />} />
        <Route path="/vegetables/cabbage" element={<Cabbage />} />
        <Route path="/horticulture/Fruits" element={<Fruits />} />
        <Route path="/fruits/mango" element={<Mango />} />
        <Route path="/fruits/Banana" element={<Banana />} />
        <Route path="/fruits/Papaya" element={<Papaya />} />
        <Route path="/fruits/Guava" element={<Guava />} />
        <Route path="/fruits/Watermelon" element={<Watermelon />} />
        <Route path="/fertilizer" element={<Fertilizer />} />
        <Route path="/pest-disease" element={<PestDisease />} />
        <Route path="/disease-info" element={<DiseaseInfo />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/about" element={<About />} />
        <Route path="/customer-care" element={<CustomerCare />} />
      </Routes>
    </Router>
  );
}

export default App;
