import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import Layout from './components/Layout';
import ResourceLoader from './components/ResourceLoader';

function App() {
  return (
    <>
      <ResourceLoader />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App; 