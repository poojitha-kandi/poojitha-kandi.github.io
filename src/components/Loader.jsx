import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const iconVariants = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(100, 255, 218, 0)'
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(100, 255, 218, 1)',
      transition: {
        default: { duration: 1, ease: 'easeInOut' },
        fill: { duration: 1, delay: 1 }
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    exit: {
      scale: 0,
      rotate: 180,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (finishLoading) {
          finishLoading();
        }
      }}
    >
      {isMounted && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#020c1b',
            zIndex: 99,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            style={{
              width: 'max-content',
              maxWidth: '100px',
              transition: 'var(--transition)',
              opacity: 1
            }}
            onAnimationComplete={() => {
              setTimeout(() => {
                setIsMounted(false);
              }, 2000);
            }}
          >
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                margin: '0 auto',
                fill: 'none',
                userSelect: 'none'
              }}
            >
              {/* Hexagon border */}
              <motion.polygon
                stroke="#64ffda"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 61 0 78 21 78 43 61 64 39 64 22 43 22 21"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              />
              
              {/* Letter P */}
              <motion.path
                d="M30,20 L30,44 M30,20 L42,20 C46,20 48,22 48,26 C48,30 46,32 42,32 L30,32"
                stroke="#64ffda"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;