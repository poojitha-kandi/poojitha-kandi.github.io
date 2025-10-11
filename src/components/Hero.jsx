import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      position: 'relative',
      textAlign: 'center',
      padding: '0 2rem'
    }}>
      <div style={{
        maxWidth: '800px'
      }}>
        <motion.p 
          style={{
            color: '#c4b5fd',
            fontSize: '1.1rem',
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: '1.5rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '700',
            color: '#e5e7eb',
            marginBottom: '1rem',
            lineHeight: '1.1'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Poojitha Kandi
        </motion.h1>
        
        <motion.h2 
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: '600',
            color: '#c4b5fd',
            marginBottom: '2rem',
            lineHeight: '1.2',
            minHeight: '4rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I'm a{' '}
          <span style={{ color: '#c4b5fd' }}>
            <Typewriter
              words={[
                'Full Stack Developer',
                'Problem Solver', 
                'Tech Enthusiast',
                'Software Engineer'
              ]}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h2>
        
        <motion.p 
          style={{
            fontSize: '1.25rem',
            color: '#c4b5fd',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm a passionate software engineer specializing in building exceptional digital experiences. 
          Currently focused on creating accessible, human-centered products.
        </motion.p>
        
        <motion.div 
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              border: '2px solid #c4b5fd',
              borderRadius: '0.375rem',
              color: '#c4b5fd',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              backgroundColor: 'transparent',
              transition: 'all 0.3s ease'
            }}
            whileHover={{
              backgroundColor: '#0a0a0a',
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
          
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#c4b5fd',
              borderRadius: '0.375rem',
              color: '#0a0a0a',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              border: '2px solid #c4b5fd',
              transition: 'all 0.3s ease'
            }}
            whileHover={{
              backgroundColor: '#0a0a0a',
              color: '#c4b5fd',
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;