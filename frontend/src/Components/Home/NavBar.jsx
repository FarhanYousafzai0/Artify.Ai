import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiImage, FiUser, FiHelpCircle, FiGrid, FiPlay, FiDollarSign } from 'react-icons/fi';

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

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

  // Updated to match your route paths exactly
  const navItems = [
   
    { name: 'Gallery', path: '/galery', icon: <FiGrid /> }, // Note: matches your '/galery' route
    { name: 'Create Post', path: '/create-post', icon: <FiImage /> },
    { name: 'Pricing', path: '/pricing', icon: <FiDollarSign /> },
    { name: 'Help', path: '/help', icon: <FiHelpCircle /> }, // Matches your '/help' route
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
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <FiImage className="text-white" />
            </div>
            <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">
              Artify.Ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          {isDesktop ? (
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className="relative text-gray-300 hover:text-white transition-colors px-2 py-1 group"
                >
                  {item.name}
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
                to="/try-now"
                className="bg-gradient-to-r cursor-pointer from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Generate
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link 
                to="/try-now"
                className="bg-gradient-to-r cursor-pointer from-purple-600 to-blue-500 text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                Generate
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-300 hover:text-white focus:outline-none p-1"
              >
                <div className="flex flex-col space-y-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-5 h-0.5 bg-gray-300"
                      animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
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
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div 
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 shadow-xl"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                    <FiImage className="text-white" />
                  </div>
                  <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">
                    Artify.Ai
                  </span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white p-1"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 space-y-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-800">
                  <Link 
                    to="/profile"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
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