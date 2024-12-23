import React from 'react';
import ReactDOM from 'react-dom/client'; // for React 18 and above
import App from './App'; // Import the App component
import './index.css'; // Import global styles

// React 18 and above (use createRoot instead of ReactDOM.render)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
