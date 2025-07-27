import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  // Mobile menu scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}
      style={{ paddingLeft: 0 }}
    >
      <div className="navbar-container" style={{ paddingLeft: 0 }}>
        <div className="navbar-inner" style={{ paddingLeft: 0 }}>
          {/* Logo Container - Perfectly left-aligned */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              marginRight: windowWidth < 1024 ? '125px' : 'auto',
              paddingLeft: '0px',
              marginLeft: '0px',
              display: 'flex',
              alignItems: 'flex-start',
              overflow: 'visible'
            }}
          >
            <Link 
              to="/" 
              style={{ 
                display: 'flex', 
                padding: 0,
                marginLeft: 0,
                lineHeight: 0
              }}
            >
              <img 
                src={logo} 
                alt="Brand Logo" 
                style={{ 
                  height: windowWidth < 640 ? '270px' : windowWidth < 1024 ? '200px' : '220px',
                  width: 'auto',
                  marginLeft: 0,
                  paddingLeft: 0,
                  objectFit: 'contain'
                }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          {windowWidth >= 1024 && (
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="navbar-links-container"
            >
              {navLinks.map((link) => (
                <motion.div 
                  key={link.name} 
                  variants={itemVariants}
                  className="nav-link-wrapper"
                  onMouseEnter={() => setIsHovering(link.path)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <Link
                    to={link.path}
                    className={`nav-link-item ${
                      location.pathname === link.path ? 'active-link' : ''
                    }`}
                  >
                    {link.name}
                    {(isHovering === link.path || location.pathname === link.path) && (
                      <motion.span 
                        className="nav-link-underline"
                        layoutId="nav-underline"
                        initial={false}
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}

          {/* Mobile Menu Button */}
          {windowWidth < 1024 && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="navbar-menu-button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Menu"
              style={{ zIndex: 1001 }}
            >
              {isMobileMenuOpen ? (
                <X size={28} className="menu-icon" />
              ) : (
                <Menu size={28} className="menu-icon" />
              )}
            </motion.button>
          )}
        </div>

        {/* Mobile Menu */}
        {windowWidth < 1024 && (
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mobile-menu-backdrop"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25 }}
                  className="mobile-menu-overlay"
                >
                  <motion.div 
                    className="mobile-menu-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {navLinks.map((link) => (
                      <motion.div
                        key={link.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="mobile-menu-item"
                      >
                        <Link
                          to={link.path}
                          className={`mobile-menu-link ${
                            location.pathname === link.path ? 'mobile-active-link' : ''
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                          {location.pathname === link.path && (
                            <motion.span 
                              className="mobile-link-indicator"
                              layoutId="mobile-nav-indicator"
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;