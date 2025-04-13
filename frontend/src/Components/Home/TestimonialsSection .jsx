import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This AI art generator blew my mind! The quality is professional grade.",
      author: "Sarah K., Digital Artist",
      stars: 5
    },
    {
      quote: "I've tried many AI tools, but Artify produces the most consistent results.",
      author: "Michael T., Game Developer",
      stars: 4
    },
    {
      quote: "The perfect tool for quick concept art and inspiration.",
      author: "Jessica L., Illustrator",
      stars: 5
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
            What Our Users Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <p className="text-purple-400 font-medium">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;