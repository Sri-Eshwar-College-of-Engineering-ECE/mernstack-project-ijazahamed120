import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    navigate('/Profile');
  };

  return (
    <div className="background">
      <div className="container">
        <h2>Farmer Signup</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account?{' '}
          <span className="link" onClick={() => navigate('/')}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
