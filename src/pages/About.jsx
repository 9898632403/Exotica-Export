import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import visitCardImage from '../assets/visitcard.png';
import '../styles/About.css';

const AboutPage = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Typewriter headings
  const typewriterHeadings = [
    "Your Gateway to Global Trade",
    "Simplifying Export Processes",
    "Building Trust in International Trade"
  ];

  // Core values data
  const coreValues = [
    {
      icon: "🌐",
      title: "Transparency",
      description: "Clear communication at every step with no hidden costs or surprises."
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description: "Streamlined processes that save you time and reduce paperwork."
    },
    {
      icon: "🛡️",
      title: "Reliability",
      description: "Consistent service quality that you can depend on shipment after shipment."
    },
    {
      icon: "📈",
      title: "Growth Focus",
      description: "We measure our success by your expanding international business."
    }
  ];

  // What we're building data
  const buildingItems = [
    "Simplified export documentation system",
    "Personalized export consultancy services",
    "Competitive freight forwarding solutions",
    "Customs clearance assistance",
    "Market-specific export strategy development"
  ];

  // Gallery data
  const galleryItems = [
    {
      image: "/images/box.png",
      caption: "Sealed with Strength"
    },
    {
      image: "/images/cargo.png",
      caption: "Ready for Your Products"
    },
    {
      image: "/images/box2.png",
      caption: "Precision Build"
    },
    {
      image: "/images/box3.png",
      caption: "Secure Packaging"
    },
    {
      image: "/images/promise.jpg",
      caption: "Global Partnerships"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Exotica Export made our first export shipment surprisingly smooth. Their support with documentation really helped us avoid delays.",
      name: "Deep josi",
      rating: 5
    },
    {
      quote: " As a new exporter, I honestly needed a bit of hand-holding. The EXotica Export's team was patient, responsive, and explained everything clearly.",
      name: "Rahul Mehta",
      rating: 4
    },
    {
      quote: "Their freight rates were competitive, and the attention to detail saved us both time and cost. Helped a lot with our Dubai shipment.",
      name: "Anil Patel",
      rating: 5
    }
  ];

  // Typewriter effect state
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // State for mobile detection
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const typewriterEffect = () => {
      const currentHeading = typewriterHeadings[currentHeadingIndex];
      
      if (isTyping) {
        if (currentText.length < currentHeading.length) {
          setTimeout(() => {
            setCurrentText(currentHeading.substring(0, currentText.length + 1));
          }, 100);
        } else {
          setTimeout(() => setIsTyping(false), 3000);
        }
      } else {
        if (currentText.length > 0) {
          setTimeout(() => {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          }, 50);
        } else {
          setIsTyping(true);
          setCurrentHeadingIndex((prevIndex) => 
            (prevIndex + 1) % typewriterHeadings.length
          );
        }
      }
    };

    const timer = setTimeout(typewriterEffect, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, isTyping, currentHeadingIndex]);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage:`url("/images/heroback.jpg")`}}>
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 variants={fadeIn}>About Exotica Export</motion.h1>
          <motion.div className="typewriter-container" variants={fadeIn} transition={{ delay: 0.3 }}>
            <span className="typewriter-heading">{currentText}</span>
            <span className="typewriter-cursor">|</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Why We Started Section */}
      <section className="why-started-section">
        <div className="container">
          <motion.div
            className="why-started-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="section-header">
              <span className="section-icon">🧠</span>
              <h2>Our Founding Story</h2>
              <p className="section-subtitle">Bridging the gap between Indian manufacturers and global markets</p>
            </div>
            <motion.p 
              className="why-started-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              Exotica Export was born from our firsthand experience with the challenges Indian SMEs face in global trade. We saw talented manufacturers struggling with complex documentation, unclear regulations, and unreliable logistics partners. Our mission is to simplify exports for Indian businesses by combining local expertise with global standards.
            </motion.p>
            
            {!isMobile && (
              <>
                <motion.div 
                  className="dancing-circle circle-1"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="dancing-circle circle-2"
                  animate={{
                    y: [0, -30, 0],
                    x: [0, -15, 0],
                    rotate: [0, -15, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-icon">🧭</span>
            <h2>Our Promise</h2>
            <p className="section-subtitle">Commitments that drive our operations</p>
          </motion.div>
          
          <div className="mission-vision-cards">
            <motion.div 
              className="mission-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={isMobile ? fadeUp : slideInLeft}
              whileHover={{ y: isMobile ? 0 : -10 }}
            >
              <h3>To Our Clients</h3>
              <p>"We promise to make your export journey seamless, transparent, and profitable. You focus on manufacturing - we'll handle the complexities of global trade."</p>
              {!isMobile && (
                <motion.div 
                  className="horse-element"
                  animate={{
                    x: [0, 10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🤝
                </motion.div>
              )}
            </motion.div>
            
            <motion.div 
              className="vision-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={isMobile ? fadeUp : slideInRight}
              whileHover={{ y: isMobile ? 0 : -10 }}
            >
              <h3>To The Industry</h3>
              <p>"We're committed to raising India's export standards by combining technology with human expertise, creating a model for ethical and efficient trade."</p>
              {!isMobile && (
                <motion.div 
                  className="horse-element"
                  animate={{
                    x: [0, -10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  🌱
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="building-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-icon">🛠️</span>
            <h2>Our Services</h2>
            <p className="section-subtitle">Comprehensive solutions for exporters at every stage</p>
          </motion.div>
          
          <ul className="building-list">
            {buildingItems.map((item, index) => (
              <motion.li
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-icon">✨</span>
            <h2>Why Trust Us?</h2>
            <p className="section-subtitle">The principles that guide every shipment</p>
          </motion.div>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: isMobile ? "0px" : "-50px" }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: isMobile ? 0 : -10, 
                  boxShadow: isMobile ? "none" : "0 10px 20px rgba(0,0,0,0.1)" 
                }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Our Export Ecosystem
          </motion.h2>
          <p className="section-subtitle">Building connections across the supply chain</p>
          
          <div className="gallery-container">
            {galleryItems.map((item, index) => (
              <motion.div 
                key={index}
                className="gallery-item-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: isMobile ? "0px" : "-50px" }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="gallery-item">
                  <motion.div 
                    className="gallery-image-wrapper"
                    whileHover={{ scale: isMobile ? 1 : 1.03 }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.caption} 
                      className="gallery-image"
                      loading="lazy"
                    />
                    <div className="image-overlay"></div>
                    <p className="image-caption">{item.caption}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Client Experiences
          </motion.h2>
          <p className="section-subtitle">Hear from businesses who've grown with us</p>
          
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: isMobile ? "0px" : "-50px" }}
                variants={fadeUp}
                transition={{ delay: index * 0.2 }}
              >
                <div className="stars">
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </div>
                <p className="quote">"{testimonial.quote}"</p>
                <div className="testimonial-footer">
                  <p className="name">{testimonial.name}</p>
                  <p className="company">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact & Visiting Card Section */}
      <section className="contact-visiting-section">
        <div className="container">
          <motion.div 
            className="contact-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>Connect With Our Export Experts</h2>
            <p>Reach out for personalized guidance on your international trade journey</p>
            
            <motion.button
              className="contact-us-button"
              onClick={() => navigate('/contact')}
              whileHover={{ 
                scale: isMobile ? 1 : 1.05,
                backgroundColor: "#2c3e50",
                boxShadow: isMobile ? "none" : "0 5px 15px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.6 }}
            >
              Contact Us
            </motion.button>
            
            <div className="contact-details-container">
              <motion.div 
                className="contact-info"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: 0.2 }}
              >
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> exoticaaexport@gmail.com</p>
              </motion.div>
              
              <motion.div 
                className="visiting-card-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="visiting-card-wrapper"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: isMobile ? 1.02 : 1.05,
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                >
                  {/* Subtle sparkling lights */}
                  {!isMobile && (
                    <>
                      <motion.div
                        className="sparkle"
                        style={{
                          left: '10%',
                          top: '20%'
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                      />
                      <motion.div
                        className="sparkle"
                        style={{
                          right: '15%',
                          bottom: '30%'
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 1
                        }}
                      />
                      <motion.div
                        className="sparkle"
                        style={{
                          left: '30%',
                          top: '70%'
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 1.5
                        }}
                      />
                    </>
                  )}
                  
                  {/* Main card image */}
                  <img 
                    src="/images/final_visit.jpg"
                    alt="Exotica Export Visiting Card" 
                    className="visiting-card"
                  />
                  
                  {/* Subtle glow effect on hover */}
                  <motion.div 
                    className="card-glow"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;