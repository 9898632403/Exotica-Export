import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import { FiSend, FiCheckCircle, FiGlobe, FiTruck, FiPackage, FiAnchor, FiMapPin, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    company: "",
    country: "",
    service: "",
    cargo_type: "",
    volume: "",
    destination: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [currentBackground, setCurrentBackground] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const backgroundThemes = [
    "linear-gradient(135deg, #001f3f 0%, #003366 50%, #0074D9 100%)",
    "linear-gradient(135deg, #2E4053 0%, #566573 50%, #7F8C8D 100%)",
    "linear-gradient(135deg, #1A5276 0%, #2874A6 50%, #3498DB 100%)",
    "linear-gradient(135deg, #154360 0%, #1F618D 50%, #2980B9 100%)",
  ];

  useEffect(() => {
    // Initialize EmailJS with your User ID from .env
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundThemes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      // Send the email using EmailJS with .env variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      
      setStatus("success");
      // Reset form
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        company: "",
        country: "",
        service: "",
        cargo_type: "",
        volume: "",
        destination: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    }
  };

  const services = [
    { value: "Export Logistics", label: "Export Logistics", icon: <FiGlobe /> },
    { value: "Freight Forwarding", label: "Freight Forwarding", icon: <FiTruck /> },
    { value: "Customs Clearance", label: "Customs Clearance", icon: <FiPackage /> },
    { value: "Warehousing", label: "Warehousing & Distribution", icon: <FiMapPin /> },
    { value: "Consultation", label: "Trade Consultation", icon: <FiAnchor /> },
    { value: "Others", label: "Other Services", icon: <FiSend /> },
  ];

  const cargoTypes = [
    "General Cargo",
    "Perishable Goods",
    "Hazardous Materials",
    "Oversized Loads",
    "Temperature Controlled",
    "High Value Items",
    "Project Cargo",
    "Others"
  ];

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: backgroundThemes[currentBackground],
        transition: "background 1.5s ease-in-out",
      }}
    >
      <div className="global-trade-pattern-overlay"></div>
      
      <div className="contact-hero">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Global Logistics Solutions Tailored for Your Business
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Partner with Exotia Export for seamless cross-border trade operations. 
          Our network spans 150+ countries with 24/7 operational support.
        </motion.p>
      </div>

      {status === "success" ? (
        <motion.div 
          className="thank-you"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <FiCheckCircle className="success-icon" />
          <h2>Your Inquiry Has Been Received</h2>
          <p className="success-message">
            Thank you for contacting Exotica Export. Your request is important to us.
          </p>
          <div className="next-steps">
            <h3>What Happens Next:</h3>
            <ul>
              <li>Our trade specialist will review your requirements within 1 business day</li>
              <li>You'll receive a preliminary quote and service proposal</li>
              <li>We'll schedule a consultation to discuss optimal logistics solutions</li>
            </ul>
          </div>
          <p className="emergency-contact">
            For urgent matters, please call our 24/7 operations center at <br />
            <a href="tel:+919737169878">+91 9737169878</a>, <a href="tel:+919712286501">+91 9712286501</a>
          </p>
        </motion.div>
      ) : (
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Contact Information Section */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="title-icon">✒️</span> Contact Information
            </h3>
            
            <div className="form-group">
              <label>Full Name <span className="required">*</span></label>
              <input
                type="text"
                name="from_name"
                placeholder="e.g. John Smith"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address <span className="required">*</span></label>
              <input
                type="email"
                name="from_email"
                placeholder="your@company.com"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number <span className="required">*</span></label>
              <input
                type="tel"
                name="phone"
                placeholder="+[country code] [number]"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Your organization"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Country of Operation <span className="required">*</span></label>
              <input
                type="text"
                name="country"
                placeholder="Primary business location"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Shipment Details Section */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="title-icon">🚢</span> Shipment Details
            </h3>

            <div className="form-group">
              <label>Service Required <span className="required">*</span></label>
              <div className="select-wrapper">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="select-arrow" />
              </div>
            </div>

            <div className="form-group">
              <label>Cargo Type <span className="required">*</span></label>
              <div className="select-wrapper">
                <select
                  name="cargo_type"
                  value={formData.cargo_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select cargo type</option>
                  {cargoTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <FiChevronDown className="select-arrow" />
              </div>
            </div>

            <div className="form-group">
              <label>Estimated Volume <span className="required">*</span></label>
              <div className="select-wrapper">
                <select
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select volume range</option>
                  <option value="LTL (Less Than Truckload)">LTL (Less Than Truckload)</option>
                  <option value="FTL (Full Truckload)">FTL (Full Truckload)</option>
                  <option value="1-5 Containers">1-5 Containers</option>
                  <option value="5-20 Containers">5-20 Containers</option>
                  <option value="20+ Containers">20+ Containers</option>
                  <option value="Bulk Shipment">Bulk Shipment</option>
                </select>
                <FiChevronDown className="select-arrow" />
              </div>
            </div>

            <div className="form-group">
              <label>Primary Destination(s) <span className="required">*</span></label>
              <input
                type="text"
                name="destination"
                placeholder="Country/Region/Port"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="title-icon">📝</span> Additional Information
            </h3>
            <div className="form-group">
              <label>Your Requirements <span className="required">*</span></label>
              <textarea
                name="message"
                placeholder="Please include:\n- Specific requirements\n- Time constraints\n- Special handling needs\n- Any other relevant details"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              />
            </div>
          </div>

          <div className="form-footer">
            <p className="disclaimer">
              By submitting this form, you agree to our <a href="/privacy">Privacy Policy</a> and 
              consent to our global team contacting you regarding your logistics needs.
            </p>
            <motion.button 
              type="submit" 
              disabled={status === "sending"}
              whileHover={{ scale: isMobile ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="submit-button"
            >
              {status === "sending" ? (
                <span className="button-loading">
                  <span className="spinner"></span> Processing...
                </span>
              ) : (
                <>
                  <FiSend className="button-icon" /> Submit Logistics Request
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      )}
    </motion.div>
  );
};

export default Contact;