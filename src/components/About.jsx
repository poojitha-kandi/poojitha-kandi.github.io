import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Python',
    'Django',
    'AWS',
    'TypeScript',
    'Git & GitHub'
  ];

  return (
    <motion.section 
      id="about" 
      style={{ 
        padding: '100px 0',
        maxWidth: '1000px',
        margin: '0 auto',
        paddingLeft: 'clamp(25px, 5vw, 150px)',
        paddingRight: 'clamp(25px, 5vw, 150px)'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '2.5rem',
          whiteSpace: 'nowrap'
        }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{
          margin: '0',
          fontSize: 'clamp(26px, 5vw, 32px)',
          fontWeight: '600',
          color: '#e5e7eb',
          fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif",
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          marginRight: '20px'
        }}>
          <span style={{
            color: '#c4b5fd',
            fontFamily: "'SF Mono', monospace",
            fontSize: 'clamp(16px, 3vw, 20px)',
            fontWeight: '400',
            marginRight: '10px'
          }}>
            01.
          </span>
          About Me
        </h2>
        <div style={{
          display: 'block',
          position: 'relative',
          width: '300px',
          height: '1px',
          backgroundColor: '#c4b5fd',
          marginLeft: '20px'
        }}></div>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gap: '50px',
        alignItems: 'start'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div style={{
            fontSize: '20px',
            color: '#c4b5fd',
            lineHeight: '1.3',
            marginBottom: '20px',
            fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif"
          }}>
            <p style={{ marginBottom: '15px' }}>
              Hello! I'm Poojitha, a passionate software engineer based in India who enjoys 
              creating things that live on the internet. My interest in web development started 
              back in 2020 when I decided to try editing custom themes for my blog — turns out 
              hacking together HTML & CSS taught me a lot about web development!
            </p>
            <p style={{ marginBottom: '15px' }}>
              Fast-forward to today, and I've had the privilege of working on projects during my 
              internships, contributing to open-source projects like{' '}
              <span style={{ color: '#c4b5fd' }}>React.js documentation</span>, and earning my{' '}
              <span style={{ color: '#c4b5fd' }}>AWS Solutions Architect certification</span>.
            </p>
            <p style={{ marginBottom: '20px' }}>
              As a <span style={{ color: '#c4b5fd' }}>Reliance Foundation Scholar</span> pursuing 
              B.Tech in Computer Science with an 8.35 CGPA, I'm currently focused on building 
              accessible, inclusive products and experiences for a variety of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
            gap: '0px 10px',
            padding: '0',
            margin: '20px 0 0 0',
            overflow: 'hidden',
            listStyle: 'none'
          }}>
            {skills.map((skill, index) => (
              <motion.li
                key={skill}
                style={{
                  position: 'relative',
                  marginBottom: '10px',
                  paddingLeft: '20px',
                  fontSize: '13px',
                  fontFamily: "'SF Mono', monospace",
                  color: '#c4b5fd'
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: '#c4b5fd',
                  fontSize: '14px',
                  lineHeight: '12px'
                }}>▹</span>
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          style={{
            position: 'relative',
            maxWidth: '300px',
            marginLeft: 'auto'
          }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '300px',
            marginLeft: 'auto',
            backgroundColor: '#c4b5fd',
            borderRadius: '4px',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}>
            <div style={{
              position: 'relative',
              borderRadius: '4px',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              transform: 'translate(-10px, -10px)',
              backgroundColor: '#0a0a0a',
              border: '2px solid #c4b5fd'
            }}>
              <img
                src="/api/placeholder/300/300"
                alt="Poojitha Kandi"
                style={{
                  position: 'relative',
                  borderRadius: '4px',
                  width: '100%',
                  height: 'auto',
                  filter: 'grayscale(100%) contrast(1)',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  mixBlendMode: 'multiply'
                }}
                onMouseEnter={(e) => {
                  e.target.style.filter = 'none';
                  e.target.style.mixBlendMode = 'normal';
                  e.target.parentElement.style.transform = 'translate(-5px, -5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = 'grayscale(100%) contrast(1)';
                  e.target.style.mixBlendMode = 'multiply';
                  e.target.parentElement.style.transform = 'translate(-10px, -10px)';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;