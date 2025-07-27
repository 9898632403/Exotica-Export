import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutPage from './pages/About';
import HomePage from './pages/HomePage';
import Contact from './components/Contact';
import Footer from './components/Footer'; // ✅ Footer import

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* ✅ Footer displayed at bottom */}
      </Router>
    </div>
  );
}

export default App;
