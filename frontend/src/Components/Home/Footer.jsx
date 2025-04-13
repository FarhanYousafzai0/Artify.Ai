import { motion } from 'framer-motion';
import { FiMail, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';

const Footer = () => {
  const links = [
    {
      title: "Product",
      items: ["Features", "Pricing", "Gallery", "API"]
    },
    {
      title: "Company",
      items: ["About", "Blog", "Careers", "Press"]
    },
    {
      title: "Resources",
      items: ["Help Center", "Tutorials", "Community", "Status"]
    },
    {
      title: "Legal",
      items: ["Privacy", "Terms", "Cookie Policy", "Guidelines"]
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <FiMail className="text-white" />
              </div>
              <span className="text-white font-bold text-xl">Artify.AI</span>
            </div>
            <p className="text-gray-400 mb-6">
              The most powerful AI art generation platform for creators, artists, and developers.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-white font-bold mb-4">{link.title}</h3>
              <ul className="space-y-3">
                {link.items.map((item, i) => (
                  <li key={i}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Artify.AI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;