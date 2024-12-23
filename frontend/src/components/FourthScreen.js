import React from 'react';
import { useLocation } from 'react-router-dom';
import './FourthScreen.css';

function FourthScreen() {
  const location = useLocation(); // Access the location state
  const { videoUrl } = location.state || {}; // Get the video URL from the state

  return (
    <div className="fourth-screen-container">
      <div className="header">
        <div className="logo">
          <h1>Video Management</h1>
        </div>
        <div className="nav-buttons">
          <button>Dashboard</button>
          <button>Pricing</button>
          <button>Support</button>
        </div>
        <div className="profile-icons">
          <button>Notifications</button>
          <button>Profile</button>
        </div>
      </div>

      <div className="video-details-container">
        <div className="video-player">
          <h3>Watch the Video</h3>
          {videoUrl ? (
            <video controls width="100%">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No video selected.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FourthScreen;
