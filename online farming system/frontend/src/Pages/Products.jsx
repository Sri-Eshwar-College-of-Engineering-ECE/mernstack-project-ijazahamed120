import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

function Products() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Organic Fertilizer",
      tamilName: "இயற்கை உரம்",
      price: 499,
      image: "/organic_fertilizer.jpg",
      description: "High-quality organic fertilizer for better crop yield",
      tamilDescription: "சிறந்த பயிர் மகசூலுக்கான உயர்தர இயற்கை உரம்"
    },
    {
      id: 2,
      name: "Garden Tool Set",
      tamilName: "தோட்டக்கருவி தொகுப்பு",
      price: 1299,
      image: "https://i5.walmartimages.com/seo/Heavy-Duty-Garden-Tools-22-Pieces-Set-Rust-Proof-Durable-Gardening-Supplies-Ergonomic-Gardening-Hand-Tools-Ideal-Gardening-Gifts-for-Women_3ba1a6e9-bb76-421f-8428-0eca4b1fdcae.07139c33800617c05fea8402ab1432a3.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      description: "Complete set of essential gardening tools",
      tamilDescription: "அத்தியாவசிய தோட்டக்கருவிகளின் முழு தொகுப்பு"
    },
    {
      id: 3,
      name: "Premium Seed Pack",
      tamilName: "உயர்தர விதை தொகுப்பு",
      price: 299,
      image: "https://5.imimg.com/data5/SELLER/Default/2022/9/MC/EH/ZI/3055311/seeds-packaging-pouch-500x500.jpg",
      description: "High-quality seeds for various vegetables",
      tamilDescription: "பல்வேறு காய்கறிகளுக்கான உயர்தர விதைகள்"
    },
    {
      id: 4,
      name: "Plant Protection Kit",
      tamilName: "தாவர பாதுகாப்பு கருவி",
      price: 899,
      image: "https://media.istockphoto.com/id/833284634/photo/crop-sprayer.jpg?s=612x612&w=0&k=20&c=vUauMNioP579mhBdvWKYUbDw1mzCle3GoU2JhTEwzk0=",
      description: "Complete kit for plant disease prevention",
      tamilDescription: "தாவர நோய் தடுப்புக்கான முழுமையான கருவி"
    },
    {
      id: 5,
      name: "Drip Irrigation System",
      tamilName: "சொட்டு நீர்ப்பாசன அமைப்பு",
      price: 2499,
      image: "https://thumbs.dreamstime.com/b/sophisticated-drip-irrigation-setup-delivering-precise-water-amounts-directly-to-plant-roots-enhancing-efficiency-gardens-348023541.jpg",
      description: "Efficient water management system for crops",
      tamilDescription: "பயிர்களுக்கான திறமையான நீர் மேலாண்மை அமைப்பு"
    },
    {
      id: 6,
      name: "Soil Testing Kit",
      tamilName: "மண் பரிசோதனை கருவி",
      price: 799,
      image: "https://5.imimg.com/data5/HD/VK/MY-1383163/soil-testing-kit-500x500.jpg",
      description: "Professional kit for soil quality analysis",
      tamilDescription: "மண் தர ஆய்விற்கான தொழில்முறை கருவி"
    },
    {
      id: 7,
      name: "Organic Pesticides",
      tamilName: "இயற்கை பூச்சிக்கொல்லி",
      price: 399,
      image: "https://media.istockphoto.com/id/1301665553/photo/it-has-to-be-protected.jpg?s=612x612&w=0&k=20&c=DiZslWKvPfL-qsSSRVsF5MQFHeZYGJCnLCMnTBD-5JM=",
      description: "Natural pest control solutions",
      tamilDescription: "இயற்கை பூச்சி கட்டுப்பாட்டு தீர்வுகள்"
    },
    {
      id: 8,
      name: "Vermicompost",
      tamilName: "மண்புழு உரம்",
      price: 599,
      image: "https://t4.ftcdn.net/jpg/08/82/26/15/360_F_882261539_cC02M8hZgGhaVdZsCha87svHYdoiBj5c.jpg",
      description: "High-quality earthworm compost",
      tamilDescription: "உயர்தர மண்புழு உரம்"
    }
  ];

  const content = {
    en: {
      title: "Agricultural Products",
      addToCart: "Add to Cart",
      buyNow: "Buy Now",
      cartItems: "Items in Cart",
      price: "₹",
      toggleLang: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      title: "விவசாய பொருட்கள்",
      addToCart: "கார்ட்டில் சேர்",
      buyNow: "இப்போது வாங்கு",
      cartItems: "கார்ட்டில் உள்ள பொருட்கள்",
      price: "₹",
      toggleLang: "Translate to English"
    }
  };

  const lang = content[language];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(language === 'en' ? 'Product added to cart!' : 'பொருள் கார்ட்டில் சேர்க்கப்பட்டது!');
  };

  const buyNow = (product) => {
    localStorage.setItem('checkoutProduct', JSON.stringify(product));
    navigate('/checkout');
  };

  return (
    <div className="products-container">
      <div className="header">
        <h1>{lang.title}</h1>
        <button 
          className="lang-toggle"
          onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
        >
          {lang.toggleLang}
        </button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={language === 'en' ? product.name : product.tamilName} className="product-image" />
            <div className="product-info">
              <h3>{language === 'en' ? product.name : product.tamilName}</h3>
              <p className="product-description">{language === 'en' ? product.description : product.tamilDescription}</p>
              <p className="product-price">{lang.price}{product.price}</p>
              <div className="button-group">
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  {lang.addToCart}
                </button>
                <button 
                  className="buy-now-btn"
                  onClick={() => buyNow(product)}
                >
                  {lang.buyNow}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
