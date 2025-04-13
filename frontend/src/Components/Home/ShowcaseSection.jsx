import { motion } from 'framer-motion';

const ShowcaseSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Featured Creations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our community is creating with Artify.AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={`/showcase-${item}.jpg`}
                alt={`Showcase ${item}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 className="text-white font-bold text-lg">Amazing Creation #{item}</h3>
                  <p className="text-gray-300 text-sm">Created by Community Artist</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-purple-500 text-purple-400 hover:bg-purple-900/30 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;