import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', name);
        navigate('/profile');
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      setError('Connection to backend failed');
    }
  };

  return (
    <div className="background">
      <div className="organic-card">
        <div className="logo-section">
          <svg viewBox="0 0 24 24" className="leaf-logo">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2A7.1 7.1 0 0 1 11 20z" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1.5" />
            <path d="M19 2c-2.26 4.33-5.27 7.14-8 10" stroke="#2E7D32" strokeWidth="1.5" />
          </svg>
          <span className="logo-text">SmartFarm</span>
        </div>

        <div className="form-section">
          <h1>Create Account</h1>
          <p className="subtitle">Join our smart farming platform today</p>

          {error && <p style={{ color: '#dc2626', margin: '0 0 14px 0', fontSize: '14px', fontWeight: 'bold' }}>{error}</p>}
          
          <form onSubmit={handleSignup}>
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Full Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Create password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input 
                type="password" 
                placeholder="Confirm password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className="login-btn">
              Create Account
            </button>
          </form>

          <p className="footer-text">
            Already have an account?{' '}
            <span className="link" onClick={() => navigate('/')}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
