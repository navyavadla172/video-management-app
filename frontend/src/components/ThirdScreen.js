import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ThirdScreen.css';

function ThirdScreen() {
  const navigate = useNavigate(); // Initialize the navigate function

  const videos = [
    { id: 1, title: 'Sample Video 1', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 2, title: 'Sample Video 2', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 3, title: 'Sample Video 3', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 4, title: 'Sample Video 4', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 5, title: 'Sample Video 5', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 6, title: 'Sample Video 6', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ];

  const handleVideoClick = (videoUrl) => {
    // Redirect to the 4th screen with the selected video's URL
    navigate('/fourth', { state: { videoUrl } });
  };

  return (
    <div className="third-screen-container">
      <div className="header">
        <div className="logo">
          <h1>Video Management</h1>
        </div>
        <div className="nav-buttons">
          <button onClick={() => navigate('/')}>Dashboard</button>
          <button onClick={() => navigate('/pricing')}>Pricing</button>
          <button onClick={() => navigate('/support')}>Support</button>
        </div>
        <div className="profile-icons">
          <button>Notifications</button>
          <button>Profile</button>
        </div>
      </div>

      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id} className="video-item" onClick={() => handleVideoClick(video.videoUrl)}>
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <h4>{video.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdScreen;
