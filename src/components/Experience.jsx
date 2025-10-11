import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Experience = () => {
  const experiences = [
    {
      title: "Web Development using Django",
      company: "APSSDC - Govt. of Andhra Pradesh",
      description: "Completed a government-organized internship, gaining hands-on experience in building web applications using the Django framework."
    },
    {
      title: "Web Development",
      company: "SystemTron - AICTE & MSME Recognized",
      description: "Successfully completed a 4-week intensive internship, focusing on core web technologies (HTML, CSS) and responsive design principles."
    }
  ];

  return (
    <motion.section 
      id="experience" 
      style={{ padding: '4rem 0' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Internships & Experience</h2>
      <div style={{
        maxWidth: '48rem',
        margin: '3rem auto 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="bg-secondary" 
            style={{
              backgroundColor: '#4f3a65',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.5rem'
            }}>
              {exp.title}
            </h3>
            <p style={{
              color: '#c4b5fd',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              {exp.company}
            </p>
            <p style={{
              color: '#d1d5db'
            }}>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        style={{
          textAlign: 'center',
          marginTop: '3rem'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          to="/experience"
          style={{
            display: 'inline-block',
            backgroundColor: '#c4b5fd',
            color: '#2d1b3f',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#a78bfa';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#c4b5fd';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          View Full Experience →
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Experience;