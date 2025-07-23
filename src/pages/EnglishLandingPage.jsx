import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import PainPointSection from '../components/sections/PainPointSection';
import MethodSection from '../components/sections/MethodSection';
import DifferentialSection from '../components/sections/DifferentialSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import AboutSection from '../components/sections/AboutSection';
import FinalCTASection from '../components/sections/FinalCTASection';

const EnglishLandingPage = () => {
  return (
    <main className="landing-page">
      <Header />
      <HeroSection />
      <PainPointSection />
      <MethodSection />
      <DifferentialSection />
      <TestimonialSection />
      <AboutSection />
      <FinalCTASection />
    </main>
  );
};

export default EnglishLandingPage;