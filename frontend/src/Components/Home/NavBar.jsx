import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX,
  FiUser,
  FiHelpCircle,
  FiGrid,
  FiDollarSign,
  FiCompass,
  FiHome,
  FiZap // ✅ Correct icon from Feather Icons
} from 'react-icons/fi';

import { RiMagicLine, RiGalleryLine } from 'react-icons/ri';
import { BsStars } from 'react-icons/bs';

const NavBar = () => {
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Check if current page is the Try Now page
  const isTryNowPage = location.pathname === '/try-now';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      
      if (mobileMenuOpen && currentScrollPos > 10) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [prevScrollPos, mobileMenuOpen]);

  const navItems = [
    { name: 'Gallery', path: '/galery', icon: <RiGalleryLine className="text-lg" /> },
    { name: 'Pricing', path: '/pricing', icon: <FiDollarSign className="text-lg" /> },
    { name: 'Help', path: '/help', icon: <FiHelpCircle className="text-lg" /> },
  ];

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: '100%',
      transition: { 
        ease: 'easeInOut',
        duration: 0.3
      }
    }
  };

  return (
    <div className={`fixed top-0 w-full transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} bg-black bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-800`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center"
            >
              <RiMagicLine className="text-white text-lg" />
            </motion.div>
            <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">
              Artify.Ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          {isDesktop ? (
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/"
                className="relative text-gray-300 hover:text-white transition-colors px-2 py-1 group cursor-pointer flex items-center"
              >
                <FiHome className="mr-2" />
                Home
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </Link>
              
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className="relative text-gray-300 hover:text-white transition-colors px-2 py-1 group cursor-pointer flex items-center"
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                </Link>
              ))}
              
              <Link 
                to={isTryNowPage ? "/" : "/try-now"}
                className="relative group flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300 overflow-hidden"
              >
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: isTryNowPage ? -5 : 0 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                  className="inline-flex items-center"
                >
                  {isTryNowPage ? (
                    <>
                      <FiCompass className="mr-1" />
                      <span>Explore</span>
                    </>
                  ) : (
                    <>
                      <FiZap className="mr-1" />
                      <span>Generate</span>
                    </>
                  )}
                </motion.span>
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link 
                to={isTryNowPage ? "/" : "/try-now"}
                className="relative group flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-all duration-300 overflow-hidden text-sm"
              >
                {isTryNowPage ? (
                  <>
                    <FiCompass className="text-base" />
                    <span>Explore</span>
                  </>
                ) : (
                  <>
                    <FiSparkles className="text-base" />
                    <span>Generate</span>
                  </>
                )}
              </Link>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-2 cursor-pointer relative"
              >
                <motion.div
                  animate={mobileMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <BsStars className="text-xl" />
                </motion.div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && !isDesktop && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
            />
            <motion.div 
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-64 bg-black z-50 shadow-xl border-l border-gray-800"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                    <RiMagicLine className="text-white text-lg" />
                  </div>
                  <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">
                    Artify.Ai
                  </span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white p-1 cursor-pointer"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 space-y-2">
                <Link 
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
                >
                  <FiHome className="text-lg" />
                  <span>Home</span>
                </Link>
                
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                <div className="pt-2 border-t border-gray-800">
                  <Link 
                    to="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
                  >
                    <FiUser className="text-lg" />
                    <span>My Profile</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;