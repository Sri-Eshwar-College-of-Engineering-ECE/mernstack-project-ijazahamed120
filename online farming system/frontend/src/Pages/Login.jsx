import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    navigate('/Profile');
  };

  return (
    <div className="background">
      <div className="container">
        <h2>Farmer Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account?{' '}
          <span className="link" onClick={() => navigate('/signup')}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
