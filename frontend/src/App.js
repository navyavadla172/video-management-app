import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AuthScreen from './components/AuthScreen';
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';
import FourthScreen from './components/FourthScreen';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/second">Second Screen</Link>
      <Link to="/third">Third Screen</Link>
      <Link to="/fourth">Fourth Screen</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/second" element={<SecondScreen />} />
        <Route path="/third" element={<ThirdScreen />} />
        <Route path="/fourth" element={<FourthScreen />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
