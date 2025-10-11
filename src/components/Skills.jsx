import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
  { name: "JavaScript", icon: "fab fa-js", color: "#c4b5fd" },
  { name: "Python", icon: "fab fa-python", color: "#c4b5fd" },
  { name: "Java", icon: "fab fa-java", color: "#e5e7eb" },
  { name: "TypeScript", icon: "fab fa-js", color: "#c4b5fd" }
      ]
    },
    {
      title: "Frontend",
      skills: [
  { name: "React", icon: "fab fa-react", color: "#c4b5fd" },
  { name: "HTML5", icon: "fab fa-html5", color: "#e5e7eb" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "#c4b5fd" },
  { name: "Sass", icon: "fab fa-sass", color: "#c4b5fd" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
  { name: "Node.js", icon: "fab fa-node-js", color: "#e5e7eb" },
  { name: "Django", icon: "fab fa-python", color: "#c4b5fd" },
  { name: "MySQL", icon: "fas fa-database", color: "#c4b5fd" },
  { name: "MongoDB", icon: "fas fa-leaf", color: "#e5e7eb" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
  { name: "Git", icon: "fab fa-git-alt", color: "#c4b5fd" },
  { name: "GitHub", icon: "fab fa-github", color: "#e5e7eb" },
  { name: "AWS", icon: "fab fa-aws", color: "#c4b5fd" },
  { name: "Docker", icon: "fab fa-docker", color: "#c4b5fd" }
      ]
    }
  ];

  return (
    <motion.section 
      id="skills" 
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
            02.
          </span>
          Technologies & Skills
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        marginTop: '60px'
      }}>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            style={{
              backgroundColor: '#0a0a0a',
              borderRadius: '4px',
              padding: '30px',
              boxShadow: 'none',
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              transform: 'translateY(-7px)',
              boxShadow: 'none'
            }}
          >
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#e5e7eb',
              marginBottom: '25px',
              fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif",
              borderBottom: '2px solid #c4b5fd',
              paddingBottom: '10px'
            }}>
              {category.title}
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px'
            }}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px',
                    borderRadius: '4px',
                    backgroundColor: '#181028',
                    border: '1px solid #c4b5fd',
                    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                    cursor: 'pointer',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: categoryIndex * 0.1 + skillIndex * 0.05 
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    transform: 'scale(1.05)',
                  }}
                >
                  <i 
                    className={skill.icon} 
                    style={{ 
                      fontSize: '24px',
                      color: '#c4b5fd',
                      minWidth: '24px',
                      transition: 'color 0.25s'
                    }}
                  ></i>
                  <span
                    style={{
                      color: '#c4b5fd',
                      fontSize: '14px',
                      fontWeight: '500',
                      fontFamily: "'SF Mono', monospace",
                      transition: 'color 0.25s'
                    }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Cloud */}
      <motion.div
        style={{
          marginTop: '60px',
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 style={{
          fontSize: '18px',
          color: '#e5e7eb',
          marginBottom: '20px',
          fontFamily: "'Calibre', 'Inter', sans-serif"
        }}>
          Other Technologies I've Worked With
        </h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px'
        }}>
          {['Figma', 'Photoshop', 'Linux', 'Firebase', 'Netlify', 'Vercel', 'VS Code', 'Postman'].map((tech, index) => (
            <motion.span
              key={tech}
              style={{
                padding: '8px 16px',
                backgroundColor: '#c4b5fd',
                border: '1px solid #c4b5fd',
                borderRadius: '20px',
                color: '#0a0a0a',
                fontSize: '13px',
                fontFamily: "'SF Mono', monospace",
                transition: 'all 0.25s'
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: '#c4b5fd',
                transform: 'scale(1.1)'
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;