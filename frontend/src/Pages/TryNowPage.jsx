import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiShare2, FiRefreshCw } from 'react-icons/fi';
import NavBar from '../Components/Home/NavBar';
import { useNavigate } from 'react-router-dom';

const TryNowPage = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const navigate = useNavigate();

  const generateImage = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedImage('/sample-ai-image.jpg');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <>
      <NavBar currentPage="try-now" />
      <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Create Stunning AI Art
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Transform your ideas into breathtaking visuals with our advanced AI. Describe what you imagine and let our neural networks do the rest.
          </p>

          <div className="bg-gray-900 rounded-xl p-1 mb-8">
            <div className="flex">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A cyberpunk cityscape at night with neon lights reflecting on wet streets..."
                className="flex-1 bg-gray-800 text-white p-4 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateImage}
                disabled={isGenerating}
                className="bg-gradient-to-r from-purple-600 cursor-pointer to-blue-500 px-6 py-4 rounded-r-xl font-medium disabled:opacity-50"
              >
                {isGenerating ? 'Generating...' : 'Generate'}
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Advanced Options</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">Style</label>
                  <select className="w-full bg-gray-800 text-white p-3 rounded-lg">
                    <option>Digital Art</option>
                    <option>Photorealistic</option>
                    <option>Anime</option>
                    <option>Cyberpunk</option>
                    <option>Fantasy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Aspect Ratio</label>
                  <div className="flex space-x-2">
                    {['1:1', '4:3', '16:9', '9:16'].map((ratio) => (
                      <motion.button
                        key={ratio}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gray-800 rounded-lg"
                      >
                        {ratio}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900 rounded-xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Your Creation</h2>
                {generatedImage && (
                  <div className="flex space-x-2">
                    <button 
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                      title="Download"
                    >
                      <FiDownload className="w-5 h-5" />
                    </button>
                    <button 
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                      title="Share"
                    >
                      <FiShare2 className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="flex-1 flex items-center justify-center bg-gray-800 rounded-lg overflow-hidden relative">
                {isGenerating ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="p-8"
                  >
                    <FiRefreshCw className="w-12 h-12 text-purple-500" />
                  </motion.div>
                ) : generatedImage ? (
                  <>
                    <img src={generatedImage} alt="Generated AI art" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-sm text-white font-medium">{prompt}</p>
                      <p className="text-xs text-gray-300">Created by: You</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-8 text-gray-500">
                    <p>Your AI-generated masterpiece will appear here</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TryNowPage;