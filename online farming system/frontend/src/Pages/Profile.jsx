import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [, setProfilePic] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userProfile = {
      name,
      email,
      age,
      mobile,
      profilePic: previewImage,
    };

    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    navigate("/dashboard");
  };

  return (
    <div className="profile-container">
      <div className="left-panel">
        <h1>Create Your Profile 🌾</h1>
        <p>Let’s set up your farming dashboard and grow your goals together.</p>
      </div>

      <div className="right-panel">
        <label htmlFor="file-input" className="image-box">
          {previewImage ? (
            <img src={previewImage} alt="Profile" className="uploaded-image" />
          ) : (
            <span className="upload-text">Upload Your Photo</span>
          )}
        </label>
        <input type="file" id="file-input" onChange={handleImageChange} accept="image/*" />

        <form className="profile-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
