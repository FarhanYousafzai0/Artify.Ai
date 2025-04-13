import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const CtaSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Unleash Your Creativity?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Join thousands of artists creating amazing AI art with Artify today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-opacity"
          >
            Start Creating Now
            <FiArrowRight className="inline ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;