import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Solutions Architecture",
      issuer: "Forage",
      icon: "fab fa-aws",
      color: "#FF9900"
    },
    {
      title: "Accenture Software Engineering",
      issuer: "Forage",
      icon: "fas fa-code",
      color: "#c4b5fd"
    },
    {
      title: "Career Edge - Young Professional",
      issuer: "TCS iON",
      icon: "fas fa-user-graduate",
      color: "#0078D4"
    },
    {
      title: "Programming Fundamentals",
      issuer: "Sololearn & Codedx",
      icon: "fas fa-laptop-code",
      color: "#61DAFB"
    }
  ];

  return (
    <motion.section 
      id="certifications" 
      style={{ padding: '4rem 0' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Certifications</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1000px',
        margin: '3rem auto 0'
      }}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            style={{
              backgroundColor: '#4f3a65',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(196, 181, 253, 0.1)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8,
              borderColor: '#c4b5fd',
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: 'rgba(196, 181, 253, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                border: '2px solid rgba(196, 181, 253, 0.2)'
              }}
              whileHover={{
                backgroundColor: 'rgba(196, 181, 253, 0.2)',
                borderColor: '#c4b5fd',
                scale: 1.1
              }}
            >
              <i 
                className={cert.icon} 
                style={{ 
                  fontSize: '1.5rem',
                  color: cert.color
                }}
              ></i>
            </motion.div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.5rem'
            }}>
              {cert.title}
            </h3>
            <p style={{
              color: '#c4b5fd',
              fontWeight: '500',
              fontSize: '1rem'
            }}>
              {cert.issuer}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;