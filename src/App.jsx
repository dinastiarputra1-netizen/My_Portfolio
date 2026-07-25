import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      const timeout = window.setTimeout(() => {
        const delayedTarget = document.getElementById(id);
        if (delayedTarget) {
          delayedTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);

      return () => window.clearTimeout(timeout);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Services />
            <Contact />
          </>
        }
      />
      <Route
        path="/projects/:projectId"
        element={
          <>
            <Navbar />
            <ProjectDetail />
          </>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;