import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Experience', path: '/experience', hash: '' },
    { name: 'Projects', path: '/projects', hash: '' },
    { name: 'Contact', path: '/', hash: '#contact' }
  ];

  return (
    <motion.header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
  backgroundColor: '#0a0a0a',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: '1rem 0'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#c4b5fd',
          textDecoration: 'none'
        }}>
          PK
        </Link>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {item.hash ? (
                <a
                  href={item.hash}
                  style={{
                    color: '#e5e7eb',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#c4b5fd'}
                  onMouseLeave={(e) => e.target.style.color = '#e5e7eb'}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.path}
                  style={{
                    color: location.pathname === item.path ? '#c4b5fd' : '#e5e7eb',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#c4b5fd'}
                  onMouseLeave={(e) => e.target.style.color = location.pathname === item.path ? '#c4b5fd' : '#e5e7eb'}
                >
                  {item.name}
                </Link>
              )}
            </motion.div>
          ))}
          
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #c4b5fd',
              borderRadius: '0.25rem',
              color: '#c4b5fd',
              backgroundColor: 'transparent',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Resume
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;