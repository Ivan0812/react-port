/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="grid-container">
        <Routes>
          <Route path="/" element={<Navigate to="/Profile" replace />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;



