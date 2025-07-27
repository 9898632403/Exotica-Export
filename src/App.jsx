import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutPage from './pages/About';
import HomePage from './pages/HomePage';
import Contact from './components/Contact'; // ✅ Add this line

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} /> {/* ✅ Contact route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
