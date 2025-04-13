import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../Components/Home/NavBar';

const HelpCenterPage = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: "🚀",
      questions: [
        "How do I create my first AI image?",
        "What should I include in my prompt?",
        "Understanding different art styles"
      ]
    },
    {
      title: "Account & Billing",
      icon: "💳",
      questions: [
        "Managing my subscription",
        "Updating payment methods",
        "Requesting a refund"
      ]
    },
    {
      title: "Technical Issues",
      icon: "🔧",
      questions: [
        "Troubleshooting generation errors",
        "Improving image quality",
        "API documentation"
      ]
    },
    {
      title: "Legal & Safety",
      icon: "⚖️",
      questions: [
        "Content policy",
        "Copyright information",
        "Commercial usage"
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Help Center
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Find answers to common questions or contact our support team.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/3"
          >
            <div className="bg-gray-900 rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <motion.li
                    key={category.title}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => setActiveCategory(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center cursor-pointer transition-colors ${
                        activeCategory === index 
                          ? 'bg-gray-800 text-white' 
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <span className="text-2xl mr-3">{category.icon}</span>
                      {category.title}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:w-2/3"
          >
            <div className="bg-gray-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <span className="text-2xl mr-3">{categories[activeCategory].icon}</span>
                {categories[activeCategory].title}
              </h2>
              <p className="text-gray-400 mb-8">Common questions about {categories[activeCategory].title.toLowerCase()}</p>

              <div className="space-y-6">
                {categories[activeCategory].questions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-800 pb-6"
                  >
                    <h3 className="text-lg font-semibold mb-3">{question}</h3>
                    <p className="text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
              <p className="text-gray-300 mb-6">
                Our support team is available 24/7 to assist you with any questions or issues you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Join Community
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default HelpCenterPage;