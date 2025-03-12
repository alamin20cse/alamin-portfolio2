import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id='contact'
      className="border-4 border-gray-300 rounded-lg shadow-lg py-6 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 pb-6">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white py-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600 mt-2">md.alamin165086@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white py-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-600 mt-2">+8801754165086</p>
          </div>

          {/* Location */}
          <div className="bg-white py-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">Location</h3>
            <p className="text-gray-600 mt-2">Pabna, Rajshahi, Bangladesh</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
