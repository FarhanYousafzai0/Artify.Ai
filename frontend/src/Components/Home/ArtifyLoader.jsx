import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiImage } from 'react-icons/fi';

const ArtifyLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center">
          <FiImage className="text-white text-4xl" />
        </div>
        
        {/* Pulsing Ring Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute inset-0 border-2 border-purple-400 rounded-2xl"
        />
      </motion.div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Artify.AI
        </h1>
      </motion.div>

      {/* Loading Bar */}
      <motion.div 
        className="mt-8 w-64 h-2 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 2.5,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Animated Name Signature */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ strokeWidth: 0 }}
          animate={{ strokeWidth: 1 }}
          transition={{
            duration: 1.5,
            delay: 2
          }}
        >
          Created by{' '}
          <motion.span 
            className="text-purple-300 font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 }}
          >
            Farhan Yousafzai
          </motion.span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ArtifyLoader;