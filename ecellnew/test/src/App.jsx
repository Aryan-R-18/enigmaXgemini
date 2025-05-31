import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TestimonialSlider from './components/Slider';
import './index.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/testimonials" element={<TestimonialSlider />} />
    </Routes>
  );
}
