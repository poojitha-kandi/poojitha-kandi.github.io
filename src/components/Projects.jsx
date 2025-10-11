import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const featuredProjects = [
    {
      title: "Open Source Contribution – React.js",
      description: "Contributed to the official React.js documentation by translating the installation guide into Telugu, helping make React more accessible to Telugu-speaking developers worldwide.",
      image: "https://placehold.co/600x400/0a192f/64ffda?text=React+OSS",
      technologies: ["React", "Documentation", "Translation", "Open Source"],
      external: "https://github.com/reactjs/react.dev",
      github: "https://github.com/poojitha-kandi"
    },
    {
      title: "Machine Learning Image Classifier", 
      description: "Developed an intelligent image classification system using Google Teachable Machine, demonstrating proficiency in machine learning concepts and practical AI implementation.",
      image: "https://placehold.co/600x400/0a192f/64ffda?text=ML+Project",
      technologies: ["Machine Learning", "TensorFlow", "Python", "Computer Vision"],
      external: "#",
      github: "https://github.com/poojitha-kandi"
    },
    {
      title: "Dynamic Portfolio Website",
      description: "Designed and developed a modern, responsive portfolio website with advanced animations, smooth transitions, and optimized performance to showcase projects and skills.",
      image: "https://placehold.co/600x400/0a192f/64ffda?text=Portfolio",
      technologies: ["React", "JavaScript", "CSS", "Framer Motion"],
      external: "https://pooji.me",
      github: "https://github.com/poojitha-kandi/poojitha-kandi.github.io"
    }
  ];

  return (
    <motion.section 
      id="projects" 
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
          color: '#ccd6f6',
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
            03.
          </span>
          Some Things I've Built
        </h2>
        <div style={{
          display: 'block',
          position: 'relative',
          width: '300px',
          height: '1px',
          backgroundColor: '#233554',
          marginLeft: '20px'
        }}></div>
      </motion.div>

      <div>
        {featuredProjects.map((project, index) => (
          <motion.div 
            key={index}
            style={{
              position: 'relative',
              display: 'grid',
              gap: '10px',
              gridTemplateColumns: 'repeat(12, 1fr)',
              alignItems: 'center',
              marginBottom: index !== featuredProjects.length - 1 ? '100px' : '0'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Project Content */}
            <div style={{
              position: 'relative',
              gridColumn: index % 2 === 0 ? '1 / 7' : '7 / -1',
              gridRow: '1 / -1',
              zIndex: 2
            }}>
              <div>
                <p style={{
                  margin: '10px 0 0 0',
                  color: '#c4b5fd',
                  fontFamily: "'SF Mono', monospace",
                  fontSize: '13px',
                  fontWeight: '400'
                }}>
                  Featured Project
                </p>
                <h3 style={{
                  color: '#ccd6f6',
                  fontSize: 'clamp(24px, 5vw, 28px)',
                  margin: '0 0 20px 0',
                  fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif"
                }}>
                  <a 
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      transition: 'color 0.25s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#c4b5fd'}
                    onMouseLeave={(e) => e.target.style.color = '#ccd6f6'}
                  >
                    {project.title}
                  </a>
                </h3>
                
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '25px',
                  borderRadius: '4px',
                  backgroundColor: '#0a0a0a',
                  color: '#e5e7eb',
                  fontSize: '18px',
                  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
                }}>
                  <p style={{
                    margin: 0,
                    lineHeight: '1.3',
                    fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif"
                  }}>
                    {project.description}
                  </p>
                </div>
                
                <ul style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  position: 'relative',
                  zIndex: 2,
                  margin: '25px 0 10px',
                  padding: 0,
                  listStyle: 'none'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} style={{
                      margin: '0 20px 5px 0',
                      color: '#e5e7eb',
                      fontFamily: "'SF Mono', monospace",
                      fontSize: '13px',
                      whiteSpace: 'nowrap'
                    }}>
                      {tech}
                    </li>
                  ))}
                </ul>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  marginTop: '10px',
                  marginLeft: '-10px',
                  color: '#e5e7eb'
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '10px',
                      color: 'inherit',
                      textDecoration: 'none',
                      transition: 'color 0.25s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#c4b5fd'}
                    onMouseLeave={(e) => e.target.style.color = '#e5e7eb'}
                  >
                    <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '10px',
                      color: 'inherit',
                      textDecoration: 'none',
                      transition: 'color 0.25s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#c4b5fd'}
                    onMouseLeave={(e) => e.target.style.color = '#e5e7eb'}
                  >
                    <i className="fas fa-external-link-alt" style={{ fontSize: '18px' }}></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project Image */}
            <div style={{
              gridColumn: index % 2 === 0 ? '6 / -1' : '1 / 8',
              gridRow: '1 / -1',
              position: 'relative',
              zIndex: 1
            }}>
              <a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#c4b5fd',
                  borderRadius: '4px',
                  verticalAlign: 'middle',
                  display: 'inline-block',
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  borderRadius: '4px',
                  mixBlendMode: 'multiply',
                  filter: 'grayscale(100%) contrast(1) brightness(90%)',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  backgroundColor: '#c4b5fd'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      borderRadius: '4px',
                      width: '100%',
                      height: 'auto',
                      verticalAlign: 'middle',
                      mixBlendMode: 'multiply',
                      filter: 'grayscale(100%) contrast(1) brightness(90%)',
                      transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'none';
                      e.target.style.mixBlendMode = 'normal';
                      e.target.parentElement.style.filter = 'none';
                      e.target.parentElement.style.mixBlendMode = 'normal';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'grayscale(100%) contrast(1) brightness(90%)';
                      e.target.style.mixBlendMode = 'multiply';
                      e.target.parentElement.style.filter = 'grayscale(100%) contrast(1) brightness(90%)';
                      e.target.parentElement.style.mixBlendMode = 'multiply';
                    }}
                  />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        style={{
          textAlign: 'center',
          marginTop: '80px'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          to="/projects"
          style={{
            color: '#c4b5fd',
            backgroundColor: 'transparent',
            border: '1px solid #c4b5fd',
            borderRadius: '4px',
            padding: '1.25rem 1.75rem',
            fontSize: '14px',
            fontFamily: "'SF Mono', monospace",
            lineHeight: '1',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
            e.target.style.transform = 'translate(-4px, -4px)';
            e.target.style.boxShadow = '4px 4px 0px 0px #c4b5fd';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'translate(0, 0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Show Me More
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Projects;