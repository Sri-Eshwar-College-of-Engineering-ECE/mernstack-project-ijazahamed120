import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderCheckout.css';

function OrderCheckout({ language = 'en' }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [orderId, setOrderId] = useState('');
  const [placedOrder, setPlacedOrder] = useState(null);
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    upiId: ''
  });

  const content = {
    en: {
      title: "Secure Checkout",
      deliveryDetails: "Delivery Details",
      payment: "Payment Method",
      confirmation: "Order Confirmation",
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      address: "Delivery Address",
      city: "City",
      state: "State",
      pincode: "PIN Code",
      next: "Continue to Payment",
      back: "Back to Delivery",
      paymentMethod: "Select how you would like to pay",
      cod: "Cash on Delivery",
      codDesc: "Pay in cash when your order is delivered to your door.",
      card: "Credit/Debit Card",
      cardDesc: "Pay securely using Visa, Mastercard, or RuPay.",
      upi: "UPI / Net Banking",
      upiDesc: "Instant bank transfer using PhonePe, GPay, or UPI ID.",
      cardNumber: "Card Number",
      cardExpiry: "Expiry Date (MM/YY)",
      cardCvv: "CVV",
      upiId: "UPI ID (e.g. username@upi)",
      placeOrder: "Complete Order & Place Order",
      orderSuccess: "Order Placed Successfully!",
      summary: "Order Summary",
      shipping: "Shipping & Handling",
      total: "Total Amount"
    },
    ta: {
      title: "பாதுகாப்பான வாங்குதல்",
      deliveryDetails: "விநியோக விவரங்கள்",
      payment: "கட்டண முறை",
      confirmation: "ஆர்டர் உறுதிப்படுத்தல்",
      name: "முழு பெயர்",
      phone: "தொலைபேசி எண்",
      email: "மின்னஞ்சல் முகவரி",
      address: "விநியோக முகவரி",
      city: "நகரம்",
      state: "மாநிலம்",
      pincode: "அஞ்சல் குறியீடு",
      next: "கட்டணத்திற்கு தொடரவும்",
      back: "விவரங்களுக்கு திரும்பவும்",
      paymentMethod: "கட்டண முறையைத் தேர்ந்தெடுக்கவும்",
      cod: "பெறும்போது பணம் செலுத்துதல்",
      codDesc: "விநியோகிக்கப்படும் போது பணமாக செலுத்தவும்.",
      card: "கிரெடிட்/டெபிட் கார்டு",
      cardDesc: "Visa, Mastercard, அல்லது RuPay மூலம் பாதுகாப்பாக செலுத்தவும்.",
      upi: "யுபிஐ / நெட் பேங்கிங்",
      upiDesc: "PhonePe, GPay அல்லது UPI மூலம் உடனடியாக செலுத்தவும்.",
      cardNumber: "கார்டு எண்",
      cardExpiry: "காலாவதி தேதி (MM/YY)",
      cardCvv: "CVV",
      upiId: "UPI ஐடி (எ.கா. username@upi)",
      placeOrder: "ஆர்டரை முடிக்கவும்",
      orderSuccess: "ஆர்டர் வெற்றிகரமாக வைக்கப்பட்டது!",
      summary: "ஆர்டர் சுருக்கம்",
      shipping: "விநியோக கட்டணம்",
      total: "மொத்த தொகை"
    }
  };

  const lang = content[language];

  useEffect(() => {
    try {
      const storedProduct = localStorage.getItem('checkoutProduct');
      if (storedProduct) {
        setProduct(JSON.parse(storedProduct));
      }
    } catch (err) {
      console.error("Error loading checkout product:", err);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.address || !formData.city || !formData.state || !formData.pincode) {
      alert("Please fill in all delivery details.");
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product) {
      alert("No product selected for checkout.");
      navigate('/products');
      return;
    }

    if (formData.paymentMethod === 'card' && (!formData.cardNumber || !formData.cardExpiry || !formData.cardCvv)) {
      alert("Please fill in card details.");
      return;
    }

    if (formData.paymentMethod === 'upi' && !formData.upiId) {
      alert("Please enter your UPI ID.");
      return;
    }

    const orderData = {
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
      },
      deliveryDetails: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
      },
      paymentDetails: {
        paymentMethod: formData.paymentMethod,
        cardNumber: formData.cardNumber ? `xxxx-xxxx-xxxx-${formData.cardNumber.slice(-4)}` : '',
        upiId: formData.upiId
      }
    };

    try {
      const response = await fetch('http://localhost:5001/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });
      const data = await response.json();
      if (data.success) {
        setOrderId(data.orderId);
        setPlacedOrder(orderData);
        setStep(3); // Go to step 3 (Invoice confirmation page)
        localStorage.removeItem('checkoutProduct');
      } else {
        alert(data.message || "Failed to place order.");
      }
    } catch (err) {
      console.error("Order error:", err);
      alert("Failed to connect to server for order placement.");
    }
  };

  const renderDeliveryForm = () => (
    <div className="checkout-card-form">
      <h2>{lang.deliveryDetails}</h2>
      
      <div className="input-row">
        <div className="input-container">
          <label>{lang.name}</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>{lang.phone}</label>
          <input
            type="tel"
            name="phone"
            placeholder="9876543210"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="input-container">
        <label>{lang.email}</label>
        <input
          type="email"
          name="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="input-container">
        <label>{lang.address}</label>
        <textarea
          name="address"
          placeholder="Flat, House no., Apartment, Street name"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="input-row-three">
        <div className="input-container">
          <label>{lang.city}</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>{lang.state}</label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label>{lang.pincode}</label>
          <input
            type="text"
            name="pincode"
            placeholder="PIN Code"
            value={formData.pincode}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <button type="button" className="action-btn next-btn" onClick={handleNext}>
        {lang.next}
      </button>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="checkout-card-form">
      <h2>{lang.payment}</h2>
      <p className="payment-help-text">{lang.paymentMethod}</p>

      <div className="payment-options-grid">
        {/* Cash on Delivery Card */}
        <div 
          className={`pay-card ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}
          onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
        >
          <div className="pay-card-header">
            <svg viewBox="0 0 24 24" width="24" height="24" className="pay-card-icon">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
            </svg>
            <h3>{lang.cod}</h3>
          </div>
          <p>{lang.codDesc}</p>
        </div>

        {/* Card Payments Card */}
        <div 
          className={`pay-card ${formData.paymentMethod === 'card' ? 'selected' : ''}`}
          onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
        >
          <div className="pay-card-header">
            <svg viewBox="0 0 24 24" width="24" height="24" className="pay-card-icon">
              <path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>
            <h3>{lang.card}</h3>
          </div>
          <p>{lang.cardDesc}</p>
        </div>

        {/* UPI Payments Card */}
        <div 
          className={`pay-card ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}
          onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
        >
          <div className="pay-card-header">
            <svg viewBox="0 0 24 24" width="24" height="24" className="pay-card-icon">
              <path fill="currentColor" d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
            </svg>
            <h3>{lang.upi}</h3>
          </div>
          <p>{lang.upiDesc}</p>
        </div>
      </div>

      {/* Conditional Inputs */}
      {formData.paymentMethod === 'card' && (
        <div className="payment-details-form anim-slide-down">
          <div className="input-container">
            <label>{lang.cardNumber}</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="4111 2222 3333 4444"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-row">
            <div className="input-container">
              <label>{lang.cardExpiry}</label>
              <input
                type="text"
                name="cardExpiry"
                placeholder="MM/YY"
                value={formData.cardExpiry}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-container">
              <label>{lang.cardCvv}</label>
              <input
                type="password"
                name="cardCvv"
                placeholder="123"
                maxLength="3"
                value={formData.cardCvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
      )}

      {formData.paymentMethod === 'upi' && (
        <div className="payment-details-form anim-slide-down">
          <div className="input-container">
            <label>{lang.upiId}</label>
            <input
              type="text"
              name="upiId"
              placeholder="username@okaxis"
              value={formData.upiId}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      )}

      <div className="checkout-button-group">
        <button type="button" className="action-btn back-btn" onClick={handleBack}>
          {lang.back}
        </button>
        <button type="submit" className="action-btn submit-btn" onClick={handleSubmit}>
          {lang.placeOrder}
        </button>
      </div>
    </div>
  );

  const renderInvoice = () => (
    <div className="invoice-container printable">
      <div className="invoice-header">
        <div className="invoice-logo">
          <svg viewBox="0 0 24 24" width="30" height="30" className="invoice-leaf-logo">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2A7.1 7.1 0 0 1 11 20z" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1.5" />
            <path d="M19 2c-2.26 4.33-5.27 7.14-8 10" stroke="#2E7D32" strokeWidth="1.5" />
          </svg>
          <h2>SmartFarm Invoice</h2>
        </div>
        <span className="invoice-badge">PAID</span>
      </div>

      <div className="invoice-meta">
        <p><strong>Order ID:</strong> #{orderId}</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
      </div>

      <hr className="invoice-divider" />

      <div className="invoice-grid">
        <div className="invoice-billing">
          <h3>Billed To:</h3>
          <p><strong>{placedOrder?.deliveryDetails.name}</strong></p>
          <p>{placedOrder?.deliveryDetails.address}</p>
          <p>{placedOrder?.deliveryDetails.city}, {placedOrder?.deliveryDetails.state} - {placedOrder?.deliveryDetails.pincode}</p>
          <p>Phone: {placedOrder?.deliveryDetails.phone}</p>
        </div>

        <div className="invoice-payment">
          <h3>Payment Method:</h3>
          <p><strong>{placedOrder?.paymentDetails.paymentMethod.toUpperCase()}</strong></p>
          {placedOrder?.paymentDetails.cardNumber && <p>Card: {placedOrder?.paymentDetails.cardNumber}</p>}
          {placedOrder?.paymentDetails.upiId && <p>UPI: {placedOrder?.paymentDetails.upiId}</p>}
        </div>
      </div>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Product Description</th>
            <th className="text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>{placedOrder?.product.name}</strong>
              <p style={{ fontSize: '12px', color: '#718096', margin: '4px 0 0 0' }}>{placedOrder?.product.description}</p>
            </td>
            <td className="text-right">₹{placedOrder?.product.price.toLocaleString()}</td>
          </tr>
          <tr className="subtotal-row">
            <td>Subtotal</td>
            <td className="text-right">₹{placedOrder?.product.price.toLocaleString()}</td>
          </tr>
          <tr className="shipping-row">
            <td>Shipping</td>
            <td className="text-right">FREE</td>
          </tr>
          <tr className="total-row">
            <td><strong>Total</strong></td>
            <td className="text-right"><strong>₹{placedOrder?.product.price.toLocaleString()}</strong></td>
          </tr>
        </tbody>
      </table>

      <div className="invoice-actions no-print">
        <button type="button" onClick={() => window.print()} className="print-btn">Print / Save PDF</button>
        <button type="button" onClick={() => navigate('/dashboard')} className="finish-btn">Return to Dashboard</button>
      </div>
    </div>
  );

  return (
    <div className="checkout-page-bg">
      <div className="checkout-header-nav">
        <button className="back-dashboard-link" onClick={() => navigate('/products')}>
          ⟵ Continue Shopping
        </button>
      </div>

      <div className="checkout-main-container">
        {step < 3 ? (
          <div className="checkout-split-layout">
            
            {/* Left side: Stepper + Dynamic Forms */}
            <div className="checkout-left-flow">
              <div className="checkout-stepper">
                <div className={`step-item ${step === 1 ? 'active' : step > 1 ? 'completed' : ''}`}>
                  <span className="step-num">{step > 1 ? "✓" : "1"}</span>
                  <span className="step-label">{lang.deliveryDetails}</span>
                </div>
                <div className="step-line" />
                <div className={`step-item ${step === 2 ? 'active' : ''}`}>
                  <span className="step-num">2</span>
                  <span className="step-label">{lang.payment}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="checkout-form-container">
                {step === 1 && renderDeliveryForm()}
                {step === 2 && renderPaymentForm()}
              </form>
            </div>

            {/* Right side: Summary Sidebar */}
            {product && (
              <div className="checkout-summary-sidebar">
                <h2>{lang.summary}</h2>
                <div className="summary-product-card">
                  {product.image && (
                    <img src={product.image} alt={product.name} className="summary-product-img" />
                  )}
                  <div className="summary-product-info">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span className="summary-qty">Qty: 1</span>
                  </div>
                </div>

                <hr className="summary-divider" />

                <div className="summary-rows">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{product.price.toLocaleString()}</span>
                  </div>
                  <div className="summary-row">
                    <span>{lang.shipping}</span>
                    <span className="shipping-free">FREE</span>
                  </div>
                  <hr className="summary-divider-light" />
                  <div className="summary-row total-amount-row">
                    <span>{lang.total}</span>
                    <strong>₹{product.price.toLocaleString()}</strong>
                  </div>
                </div>

                <div className="secure-badge-box">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2e7d32" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>SSL Encrypted Secure Payment Connection</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Full screen Invoice Receipt (step 3) */
          <div className="checkout-invoice-flow">
            {renderInvoice()}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderCheckout;
