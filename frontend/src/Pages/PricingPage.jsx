import React from 'react';
import { motion } from 'framer-motion';

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "9",
      features: [
        "100 AI generations/month",
        "Basic image styles",
        "Standard resolution",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "29",
      features: [
        "500 AI generations/month",
        "All premium styles",
        "High resolution",
        "Priority generation",
        "Commercial license"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "99",
      features: [
        "Unlimited generations",
        "All premium styles",
        "4K Ultra HD resolution",
        "Dedicated GPU access",
        "White-glove support",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your creative needs. Scale up or down as required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-xl p-8 bg-gray-900 border cursor-pointer ${plan.popular ? 'border-purple-500' : 'border-gray-800'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-medium ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-500' : 'bg-gray-800 hover:bg-gray-700'} transition-colors`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gray-900 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time and you'll retain access until the end of your billing period."
              },
              {
                question: "Do you offer team plans?",
                answer: "We offer custom enterprise plans for teams. Contact our sales team for more information."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and cryptocurrency payments."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="border-b border-gray-800 pb-6"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;