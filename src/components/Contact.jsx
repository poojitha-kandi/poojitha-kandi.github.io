import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      style={{ 
        padding: '4rem 0',
        textAlign: 'center'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Let's Work Together</h2>
      <motion.div
        style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p style={{
          color: '#e5e7eb',
          fontSize: '1.2rem',
          lineHeight: '1.7',
          marginBottom: '2rem'
        }}>
          I'm always interested in new opportunities and collaborations. 
          Whether you have a project in mind or just want to connect, I'd love to hear from you.
        </p>
        <motion.a
          href="mailto:hello@pooji.me"
          style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            color: '#c4b5fd',
            border: '2px solid #c4b5fd',
            padding: '1rem 2.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}
          whileHover={{
            backgroundColor: '#c4b5fd',
            color: '#0a0a0a',
            scale: 1.05
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;