import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutPage from './pages/About';
import HomePage from './pages/HomePage';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import { Analytics } from "@vercel/analytics/react"; // ✅ Added import

// 👇 ScrollToTop component inside App.jsx
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <Analytics /> {/* ✅ Safely added at the bottom */}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
