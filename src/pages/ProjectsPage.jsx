import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FixedSidebars from '../components/FixedSidebars';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Open Source Contribution – React.js",
      description: "Contributed to the official React.js documentation by translating the installation guide into Telugu. This contribution was merged into the main React repository, demonstrating my commitment to open source and multilingual accessibility.",
      technologies: ["React.js", "Documentation", "Telugu Translation", "Open Source"],
      image: "https://placehold.co/600x400/4f3a65/ddd6fe?text=React+OSS",
      github: "https://github.com/reactjs/react.dev",
      live: "https://react.dev"
    },
    {
      title: "Image Classification Model",
      description: "Developed and trained a machine learning model using Google Teachable Machine for accurate image classification. The model can identify and categorize various objects with high precision.",
      technologies: ["Machine Learning", "Google Teachable Machine", "Image Processing", "AI"],
      image: "https://placehold.co/600x400/4f3a65/ddd6fe?text=ML+Project",
      github: "#",
      live: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "Built and deployed a responsive personal portfolio website to showcase projects, skills, and professional contributions. Features modern design, smooth animations, and optimized performance.",
      technologies: ["React.js", "CSS3", "Responsive Design", "Web Development"],
      image: "https://placehold.co/600x400/4f3a65/ddd6fe?text=Portfolio",
      github: "https://github.com/poojitha-kandi/poojitha-kandi.github.io",
      live: "https://poojitha-kandi.github.io"
    },
    {
      title: "Calculator Web Application",
      description: "Developed a fully functional calculator web application with a clean, intuitive user interface. Features all basic arithmetic operations with responsive design for various screen sizes.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "https://placehold.co/600x400/4f3a65/ddd6fe?text=Calculator",
      github: "#",
      live: "#"
    },
    {
      title: "To-Do List Web App",
      description: "Designed and built a feature-rich To-Do List application with task management capabilities including add, delete, and edit functions. Includes dark/light mode toggle for enhanced user experience.",
      technologies: ["JavaScript", "Local Storage", "CSS3", "DOM Manipulation"],
      image: "https://placehold.co/600x400/4f3a65/ddd6fe?text=Todo+App",
      github: "#",
      live: "#"
    },
    {
      title: "Netflix Homepage Clone",
      description: "Created a pixel-perfect, fully responsive Netflix homepage clone using only HTML and CSS. Demonstrates advanced CSS skills including flexbox, grid, and responsive design principles.",
      technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
      image: "https://placehold.co/600x400/4f3a65/ddd6fe?text=Netflix+Clone",
      github: "#",
      live: "#"
    }
  ];

  return (
    <>
      <Navbar />
      <FixedSidebars />
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        paddingTop: '2rem'
      }}>
        <motion.section
          style={{ padding: '4rem 0' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#d1d5db',
              maxWidth: '600px',
              margin: '0 auto 4rem'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of my technical projects and contributions to the development community.
          </motion.p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem',
            marginTop: '3rem'
          }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                style={{
                  backgroundColor: '#4f3a65',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '1rem'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: '#d1d5db',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          backgroundColor: '#c4b5fd',
                          color: '#2d1b3f',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#c4b5fd',
                        textDecoration: 'none',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <i className="fab fa-github"></i>
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#c4b5fd',
                        textDecoration: 'none',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;