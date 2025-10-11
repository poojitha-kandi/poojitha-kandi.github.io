import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{
        backgroundColor: '#2d1b3f',
        color: '#e5e7eb',
        minHeight: '100vh'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;