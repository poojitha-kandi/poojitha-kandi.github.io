import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FixedSidebars from '../components/FixedSidebars';
import Footer from '../components/Footer';

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Web Development using Django",
      company: "APSSDC - Govt. of Andhra Pradesh",
      duration: "2024",
      type: "Government Internship",
      description: "Completed an intensive government-organized internship focusing on Django web development. Gained hands-on experience in building full-stack web applications using Python's Django framework, including database design, user authentication, and deployment strategies.",
      skills: ["Django", "Python", "Web Development", "Database Design", "Backend Development"],
      achievements: [
        "Successfully completed all project milestones",
        "Built multiple web applications using Django",
        "Gained expertise in Python web development",
        "Learned industry best practices for web development"
      ]
    },
    {
      title: "Web Development Internship",
      company: "SystemTron - AICTE & MSME Recognized",
      duration: "4 weeks",
      type: "Technical Internship",
      description: "Successfully completed a comprehensive 4-week intensive internship focusing on core web technologies. Developed strong foundation in HTML5, CSS3, and responsive design principles while working on real-world projects and learning industry standards.",
      skills: ["HTML5", "CSS3", "Responsive Design", "Web Standards", "Frontend Development"],
      achievements: [
        "Mastered responsive design principles",
        "Built multiple responsive web projects",
        "Learned modern CSS techniques and best practices",
        "Gained proficiency in cross-browser compatibility"
      ]
    }
  ];

  const education = {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Reliance Foundation Scholar",
    duration: "2022 - Present",
    cgpa: "8.35 CGPA",
    highlights: [
      "Reliance Foundation Scholarship Recipient",
      "Strong academic performance with 8.35 CGPA",
      "Active participation in coding competitions",
      "Contributor to open source projects"
    ]
  };

  const certifications = [
    {
      title: "AWS Solutions Architecture",
      issuer: "Forage",
      description: "Comprehensive certification covering AWS cloud services, architecture design, and solutions implementation.",
      skills: ["AWS", "Cloud Computing", "Solutions Architecture", "Cloud Security"]
    },
    {
      title: "Accenture Software Engineering",
      issuer: "Forage", 
      description: "Industry-focused certification covering software engineering principles and Accenture's development methodologies.",
      skills: ["Software Engineering", "Agile Development", "Project Management", "Industry Practices"]
    },
    {
      title: "Career Edge - Young Professional",
      issuer: "TCS iON",
      description: "Professional development certification focusing on industry readiness and career advancement skills.",
      skills: ["Professional Development", "Industry Readiness", "Career Planning", "Soft Skills"]
    },
    {
      title: "Programming Fundamentals",
      issuer: "Sololearn & Codedx",
      description: "Foundation certifications in C programming and HTML, establishing strong programming fundamentals.",
      skills: ["C Programming", "HTML", "Programming Logic", "Web Fundamentals"]
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
            My Experience
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
            Professional experience, education, and certifications that shape my technical journey.
          </motion.p>

          {/* Professional Experience */}
          <motion.div
            style={{ marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#c4b5fd',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Professional Experience
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  style={{
                    backgroundColor: '#4f3a65',
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '0.5rem'
                      }}>
                        {exp.title}
                      </h3>
                      <p style={{
                        color: '#c4b5fd',
                        fontWeight: '600',
                        marginBottom: '0.25rem'
                      }}>
                        {exp.company}
                      </p>
                      <p style={{
                        color: '#d1d5db',
                        fontSize: '0.9rem'
                      }}>
                        {exp.type} • {exp.duration}
                      </p>
                    </div>
                  </div>
                  
                  <p style={{
                    color: '#d1d5db',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {exp.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      color: 'white',
                      fontWeight: '600',
                      marginBottom: '0.75rem'
                    }}>
                      Key Skills:
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          style={{
                            backgroundColor: '#c4b5fd',
                            color: '#2d1b3f',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '1rem',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 style={{
                      color: 'white',
                      fontWeight: '600',
                      marginBottom: '0.75rem'
                    }}>
                      Key Achievements:
                    </h4>
                    <ul style={{
                      color: '#d1d5db',
                      paddingLeft: '1.5rem'
                    }}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} style={{ marginBottom: '0.5rem' }}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            style={{ marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#c4b5fd',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Education
            </h2>
            <motion.div
              style={{
                backgroundColor: '#4f3a65',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem'
              }}>
                {education.degree}
              </h3>
              <p style={{
                color: '#c4b5fd',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                {education.institution}
              </p>
              <p style={{
                color: '#d1d5db',
                marginBottom: '1rem'
              }}>
                {education.duration} • {education.cgpa}
              </p>
              <ul style={{
                color: '#d1d5db',
                listStyle: 'none',
                padding: 0
              }}>
                {education.highlights.map((highlight, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                    • {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#c4b5fd',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Certifications
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  style={{
                    backgroundColor: '#4f3a65',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
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
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}>
                    {cert.issuer}
                  </p>
                  <p style={{
                    color: '#d1d5db',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {cert.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        style={{
                          backgroundColor: '#c4b5fd',
                          color: '#2d1b3f',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default ExperiencePage;