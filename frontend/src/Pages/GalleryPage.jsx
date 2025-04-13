import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../Components/Home/NavBar';

const GalleryPage = () => {
  const images = [
    { id: 1, prompt: "Cyberpunk city at night", likes: 124, url: "/gallery1.jpg" },
    { id: 2, prompt: "Portrait of a steampunk woman", likes: 89, url: "/gallery2.jpg" },
    { id: 3, prompt: "Fantasy landscape with floating islands", likes: 156, url: "/gallery3.jpg" },
    { id: 4, prompt: "Hyperrealistic futuristic car", likes: 72, url: "/gallery4.jpg" },
    { id: 5, prompt: "Surrealist melting clock landscape", likes: 201, url: "/gallery5.jpg" },
    { id: 6, prompt: "Anime-style samurai warrior", likes: 143, url: "/gallery6.jpg" },
    { id: 7, prompt: "Underwater alien civilization", likes: 98, url: "/gallery7.jpg" },
    { id: 8, prompt: "Neon-lit rainy Tokyo street", likes: 167, url: "/gallery8.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Community Gallery
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore inspiring creations from our community of AI artists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-900">
                <img
                  src={image.url}
                  alt={image.prompt}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-xl">
                <p className="text-sm font-medium truncate">{image.prompt}</p>
                <div className="flex items-center mt-1 text-sm text-gray-300">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  {image.likes}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`image-${selectedImage.id}`}
              className="max-w-4xl w-full bg-gray-900 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.prompt}
                  className="w-full max-h-[80vh] object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-100 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{selectedImage.prompt}</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-700 mr-3"></div>
                    <span className="text-gray-300">Community Creator</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <span>{selectedImage.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                      </svg>
                      <span>Share</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                      <span>Download</span>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Prompt Details</h4>
                  <p className="text-gray-400">
                    This image was generated using the prompt: "{selectedImage.prompt}". The style used was "Digital Art" with high detail and 4K resolution.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
    </>
  );
};

export default GalleryPage;