import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FixedSidebars from '../components/FixedSidebars';

const Home = () => {
  return (
    <>
      <Navbar />
      <FixedSidebars />
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;