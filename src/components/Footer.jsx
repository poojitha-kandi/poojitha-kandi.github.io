import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      style={{ 
        textAlign: 'center', 
        padding: '3rem 0 2rem',
  borderTop: '1px solid #c4b5fd',
        marginTop: '4rem'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.p 
        style={{
          color: '#e5e7eb',
          fontSize: '0.875rem',
          marginBottom: '0.5rem'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        &copy; 2025 Poojitha Kandi. All Rights Reserved.
      </motion.p>
      <motion.p 
        style={{
          color: '#e5e7eb',
          fontSize: '0.875rem'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Designed & Built with <span style={{ color: '#c4b5fd' }}>&hearts;</span> using React & Framer Motion
      </motion.p>
    </motion.footer>
  );
};

export default Footer;