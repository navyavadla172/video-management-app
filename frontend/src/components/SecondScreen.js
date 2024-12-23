import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondScreen.css';

function SecondScreen() {
  const [videoLink, setVideoLink] = useState('');
  const [keywords, setKeywords] = useState('');
  const navigate = useNavigate();

  const handleCallToAction = () => {
    navigate('/third');  // Navigate to the third screen
  };

  return (
    <div className="second-container">
      <div className="info-section">
        <h1>Now Repurpose long video, 10X faster.</h1>
        <p>
          Repurpose your long-form videos into concise, impactful content using our AI-powered technology.
        </p>
      </div>

      <div className="input-section">
        <h3>Video link here:</h3>
        <input
          type="text"
          placeholder="Paste video link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
      </div>

      <div className="input-section">
        <h3>Keywords:</h3>
        <input
          type="text"
          placeholder="Add keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </div>

      <div className="cta-button-container">
        <button className="cta-button" onClick={handleCallToAction}>
          Call to Action
        </button>
      </div>
    </div>
  );
}

export default SecondScreen;
