import { motion } from 'framer-motion';
import { FiImage, FiUsers, FiZap } from 'react-icons/fi';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiImage className="w-6 h-6" />,
      title: "Stunning AI Art",
      description: "Generate breathtaking images with our advanced AI models"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Vibrant Community",
      description: "Join thousands of creative artists sharing their work"
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Get results in seconds with our optimized AI infrastructure"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Why Choose Artify.AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The most powerful AI art generation platform with features designed for creators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;