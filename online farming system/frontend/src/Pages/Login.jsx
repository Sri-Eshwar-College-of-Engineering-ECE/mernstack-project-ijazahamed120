import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        // Store user in localStorage
        const userProfile = {
          name: data.user.name,
          email: data.user.email,
          age: data.user.age || '',
          mobile: data.user.mobile || '',
          profilePic: null, // Default
        };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        localStorage.setItem('userEmail', data.user.email);
        localStorage.setItem('userName', data.user.name);

        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }

        // If profile details (age and mobile) are already filled, go to dashboard.
        // Otherwise, navigate to profile creation.
        if (data.user.age && data.user.mobile) {
          navigate('/dashboard');
        } else {
          navigate('/profile');
        }
      } else {
        setError(data.message || 'Login failed');
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
          <h1>Welcome Back</h1>
          <p className="subtitle">Enter your credentials to access your smart dashboard</p>

          {error && <p style={{ color: '#dc2626', margin: '0 0 14px 0', fontSize: '14px', fontWeight: 'bold' }}>{error}</p>}
          
          <form onSubmit={handleLogin}>
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
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkmark"></span>
                Remember Me
              </label>
              <span className="forgot-password" onClick={() => alert("Forgot password functionality is under development.")}>
                Forgot Password?
              </span>
            </div>

            <button type="submit" className="login-btn">
              Login to Dashboard
            </button>
          </form>
          
          <p className="footer-text">
            Don’t have an account?{' '}
            <span className="link" onClick={() => navigate('/signup')}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
