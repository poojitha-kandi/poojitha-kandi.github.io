import React from 'react';
import { motion } from 'framer-motion';

const FixedSidebars = () => {
  const socialLinks = [
    { href: "https://github.com/poojitha-kandi", icon: "fab fa-github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/poojithakandi/", icon: "fab fa-linkedin", label: "LinkedIn" },
    { href: "https://x.com/poojitha_kandi", icon: "fab fa-twitter", label: "Twitter" },
    { href: "https://www.pooji.me/", icon: "fas fa-globe", label: "Website" }
  ];

  return (
    <>
      {/* Left Sidebar - Social Links */}
      <motion.div
        style={{
          position: 'fixed',
          left: '2.5rem',
          bottom: '0',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          marginBottom: '1.5rem'
        }}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '2px solid #5d4776',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '1.25rem',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                borderColor: '#c4b5fd',
                color: '#c4b5fd',
                y: -5,
                backgroundColor: 'rgba(196, 181, 253, 0.1)',
                scale: 1.1
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </div>
        <motion.div 
          style={{
            width: '2px',
            height: '6rem',
            backgroundColor: '#5d4776'
          }}
          initial={{ height: 0 }}
          animate={{ height: '6rem' }}
          transition={{ duration: 0.8, delay: 2.2 }}
        ></motion.div>
      </motion.div>

      {/* Right Sidebar - Email */}
      <motion.div
        style={{
          position: 'fixed',
          right: '2.5rem',
          bottom: '0',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <motion.a
          href="mailto:hello@pooji.me"
          style={{
            color: '#d1d5db',
            textDecoration: 'none',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            writingMode: 'vertical-rl',
            marginBottom: '1.5rem',
            fontFamily: 'monospace',
            transition: 'all 0.3s ease'
          }}
          whileHover={{
            color: '#c4b5fd',
            y: -8
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        >
          hello@pooji.me
        </motion.a>
        <motion.div 
          style={{
            width: '2px',
            height: '6rem',
            backgroundColor: '#5d4776'
          }}
          initial={{ height: 0 }}
          animate={{ height: '6rem' }}
          transition={{ duration: 0.8, delay: 2.4 }}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default FixedSidebars;