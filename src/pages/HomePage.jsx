import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { FaPlane, FaShip, FaTruck, FaWarehouse, FaBoxOpen, FaGlobeAmericas, FaShieldAlt, FaHeadset, FaHandshake, FaChartLine, FaCertificate, FaLeaf } from 'react-icons/fa';
import { GiCargoShip, GiCargoCrate, GiDeliveryDrone, GiWorld } from 'react-icons/gi';
import { MdOutlineAir, MdLocalShipping, MdSecurity, MdSupportAgent } from 'react-icons/md';
import { RiRouteFill, RiGlobalLine } from 'react-icons/ri';
import { BsBoxSeam, BsClockHistory } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../styles/Home.css';
// import boxImage from '../assets/cargurated_box.png';

const Home = () => {
  const [boxOpen, setBoxOpen] = useState(false);
  
  // Hero slider data
  const heroSlides = [
    {
      image: '/images/hero-1.jpg',
      title: 'Exotica Export - Box Specialists',
      subtitle: 'Premium white & brown corrugated box solutions'
    },
    {
      image: '/images/hero-2.jpg',
      title: 'Packaging Excellence',
      subtitle: 'Custom corrugated boxes for all your shipping needs'
    },
    {
      image: '/images/hero-3.jpg',
      title: 'Global Packaging Partners',
      subtitle: 'Quality boxes for international shipments'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Delivered custom packaging for delicate items like ceramics, ensuring zero breakage during international shipping.",
      name: "Packaging Milestone",
      rating: 5
    },
    {
      quote: "Successfully fulfilled bulk orders of white & brown corrugated boxes tailored for export-grade durability.",
      name: "Custom Box Solutions",
      rating: 5
    },
    {
      quote: "Trusted by emerging exporters as a reliable delivery partner for safe, secure, and timely packaging supply.",
      name: "Your Trusted Delivery Partner",
      rating: 5
    }
  ];

  // Services with detailed descriptions
  const services = [
    { 
      name: "White Corrugated Boxes", 
      icon: <FaBoxOpen size={40} />,
      desc: "Premium quality white corrugated boxes for retail packaging and premium shipments. Available in all standard sizes."
    },
    { 
      name: "Brown Corrugated Boxes", 
      icon: <FaBoxOpen size={40} />,
      desc: "Durable brown corrugated boxes for heavy-duty shipping and industrial use. Custom sizes available."
    },
    { 
      name: "Custom Printing", 
      icon: <FaCertificate size={40} />,
      desc: "Brand your boxes with our custom printing services. Minimum order quantity applies."
    },
    { 
      name: "Export Packaging", 
      icon: <FaWarehouse size={40} />,
      desc: "Specialized boxes designed to withstand international shipping conditions."
    },
    { 
      name: "Bulk Orders", 
      icon: <BsBoxSeam size={40} />,
      desc: "Discounted rates for large quantity orders. Perfect for manufacturers and wholesalers."
    }
  ];

  // Function to copy email to clipboard
  const copyEmail = () => {
    navigator.clipboard.writeText('exoticaaexport@gmail.com');
    alert('Email copied to clipboard!');
  };

  // Function to redirect to contact page
  const redirectToContact = () => {
    // Replace this with your actual contact page route
    window.location.href = '/contact';
  };

  return (
    <div className="homepage">
      {/* Animated background elements */}
      <div className="floating-logistics-icons">
        {Array(12).fill().map((_, i) => (
          <motion.div
            key={i}
            className="floating-icon"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              rotate: Math.random() * 360
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 30,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "linear"
            }}
          >
            {['✈️', '🚢', '📦', '🛳️', '🚛', '🌐'][i % 6]}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          effect="fade"
          speed={1200}
          pagination={{ clickable: true }}
          loop
          className="hero-slider"
        > 
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide" style={{ backgroundImage:`url("/images/hero_home.jpg")` }}>
                <motion.div
                  className="hero-content"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1>
                    <Typewriter
                      options={{
                        strings: [slide.title],
                        autoStart: true,
                        loop: false,
                        delay: 50,
                        deleteSpeed: Infinity
                      }}
                    />
                  </h1>
                  <p>{slide.subtitle}</p>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="stats-bar">
          <motion.div 
            whileHover={{ y: -5 }}
            className="stat-item"
          >
            <GiWorld size={30} />
            <h3>50+</h3>
            <p>Export Countries</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="stat-item"
          >
            <GiCargoShip size={30} />
            <h3>10K+</h3>
            <p>Boxes Monthly</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="stat-item"
          >
            <FaShieldAlt size={30} />
            <h3>99.5%</h3>
            <p>Damage-Free</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="stat-item"
          >
            <BsClockHistory size={30} />
            <h3>24/7</h3>
            <p>Support</p>
          </motion.div>
        </div>
      </section>

      {/* Export Box Solutions Section */}
      <section className="export-section">
        <div className="container">
          <div className="content-block">
            <h2>Exotica Export Box Solutions</h2>
            <p>
              Specializing in high-quality white and brown corrugated boxes for all export needs. 
              Our boxes are manufactured to international standards to ensure your products 
              arrive in perfect condition, no matter the destination.
            </p>
            <ul>
              <li><FaChartLine /> Custom box sizes and strengths available</li>
              <li><MdSecurity /> Double-wall options for fragile items</li>
              <li><FaLeaf /> Eco-friendly materials</li>
              <li><RiRouteFill /> Optimized for all transport methods</li>
            </ul>
          </div>
          
          <div className="image-block">
            <motion.div 
              className="cargo-box"
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <GiCargoCrate size={60} />
            </motion.div>
            <p>Our premium corrugated boxes protect your products</p>
          </div>
        </div>
      </section>

      {/* Box Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="image-block">
            <motion.img 
              src="/images/box3.png" 
              alt="Corrugated Box" 
              className="box-image"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          
          <div className="content-block">
            <h2>Our Corrugated Box Advantages</h2>
            <p>
              Exotica Export boxes are engineered for maximum protection and efficiency. 
              We use high-quality kraft paper and precise fluting to create boxes that 
              withstand the rigors of international shipping.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><FaBoxOpen size={24} /></div>
                <h4>Strength Options</h4>
                <p>From single to triple wall construction</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><FaShieldAlt size={24} /></div>
                <h4>Moisture Resistant</h4>
                <p>Special coatings for humid conditions</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><MdOutlineAir size={24} /></div>
                <h4>Lightweight</h4>
                <p>Reduces shipping costs</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><GiDeliveryDrone size={24} /></div>
                <h4>Custom Printing</h4>
                <p>Brand your packaging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Box Reveal Section */}
      <section className="box-reveal-section">
        <div className="container">
          <motion.div 
            className="interactive-box"
            onClick={() => setBoxOpen(!boxOpen)}
            whileHover={{ scale: 1.02 }}
          >
            <AnimatePresence mode="wait">
              {!boxOpen ? (
                <motion.div
                  key="closed"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="box-closed"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <img src="/images/cargurated_box.png" alt="Corrugated Box" className="box-image" />
                  </motion.div>
                  <h3>Our Box Construction</h3>
                  <p>Click to explore what makes our boxes special</p>
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="box-open"
                >
                  <motion.div
                    className="exploded-items"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {['🧊', '🛡️', '🧩', '🔒', '📏'].map((item, index) => (
                      <motion.div
                        key={index}
                        className="exploded-item"
                        initial={{ x: 0, y: 0, rotate: 0 }}
                        animate={{
                          x: [0, Math.random() * 120 - 60],
                          y: [0, Math.random() * 120 - 60],
                          rotate: [0, Math.random() * 360]
                        }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    className="box-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3>Premium Corrugated Construction</h3>
                    <p>
                      Our boxes feature:
                    </p>
                    <ul>
                      <li>High-quality kraft paper facing</li>
                      <li>Precision fluting for maximum strength</li>
                      <li>Reinforced corners and edges</li>
                      <li>Customizable inner dividers</li>
                    </ul>
                    <p>
                      We test all our boxes for burst strength, edge crush resistance, 
                      and drop performance to ensure they meet international shipping standards.
                    </p>
                  </motion.div>
                  
                  <motion.button
                    className="close-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setBoxOpen(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close Inspection
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <div className="container">
          <div className="typewriter-heading">
            <h2 className="section-title">
              <Typewriter
                options={{
                  strings: ["Why Choose Exotica Export?", "Premium Packaging Solutions", "Your Box Specialists"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  pauseFor: 3000
                }}
              />
            </h2>
          </div>
          
          <div className="cards-grid">
            {[
              {
                icon: <RiGlobalLine size={40} />,
                title: "Export Expertise",
                content: "We specialize in boxes designed specifically for international shipping requirements and conditions.",
                stats: "50+ countries served"
              },
              {
                icon: <FaHeadset size={40} />,
                title: "Direct Support",
                content: "Get advice directly from our founders Naitik Miyani and Parth Sonani on your packaging needs.",
                stats: "Email: exoticaexport@gmail.com"
              },
              {
                icon: <FaShieldAlt size={40} />,
                title: "Tested Strength",
                content: "Every box design undergoes rigorous testing to ensure it can handle the stresses of shipping.",
                stats: "99.5% damage-free rate"
              },
              {
                icon: <FaLeaf size={40} />,
                title: "Sustainable",
                content: "Our boxes use recycled materials and are 100% recyclable. We're committed to eco-friendly packaging.",
                stats: "70% recycled content"
              },
              {
                icon: <FaHandshake size={40} />,
                title: "Fair Pricing",
                content: "As manufacturers, we offer competitive prices without middleman markups.",
                stats: "Direct factory prices"
              },
              {
                icon: <FaChartLine size={40} />,
                title: "Custom Solutions",
                content: "Need special box dimensions or features? We'll work with you to create the perfect solution.",
                stats: "No minimum for standard sizes"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="card"
                whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
                <div className="card-stats">{card.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Distribution Section */}
      <section className="distribution-section">
        <div className="container">
          <div className="content-block">
            <h2>Global Box Distribution</h2>
            <p>
              Exotica Export boxes are trusted by shippers worldwide. Our products are designed to perform 
              across all transportation methods and environmental conditions.
            </p>
            <ul>
              <li>Optimized for air freight weight restrictions</li>
              <li>Moisture-resistant for ocean shipping</li>
              <li>Stackable for container efficiency</li>
              <li>Meeting international phytosanitary standards</li>
            </ul>
          </div>
          
          <div className="image-block">
            <div className="transport-methods">
              <motion.div 
                className="transport-icon"
                whileHover={{ scale: 1.1 }}
              >
                <FaTruck size={40} />
                <span>Road</span>
              </motion.div>
              <motion.div 
                className="transport-icon"
                whileHover={{ scale: 1.1 }}
              >
                <FaShip size={40} />
                <span>Sea</span>
              </motion.div>
              <motion.div 
                className="transport-icon"
                whileHover={{ scale: 1.1 }}
              >
                <FaPlane size={40} />
                <span>Air</span>
              </motion.div>
            </div>
            <p>Our boxes perform perfectly on all routes</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Turning packaging precision into real export success for growing businesses.</h2>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="testimonial-card"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="testimonial-rating">
                    {Array(testimonial.rating).fill().map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <div className="testimonial-content">
                    <p>"{testimonial.quote}"</p>
                  </div>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.company}, {testimonial.country}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-item"
                whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Upgrade Your Export Packaging?</h2>
            <p>
              Contact founders Naitik Miyani and Parth Sonani directly to discuss your box requirements 
              and get samples of our premium corrugated packaging solutions.
            </p>
            <div className="cta-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button primary"
                onClick={redirectToContact}
              >
                Request Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button secondary"
                onClick={copyEmail}
              >
                Email: exoticaaexport@gmail.com
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <div className="animated-background">
          <motion.div
            className="globe-icon"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <GiWorld size={100} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;