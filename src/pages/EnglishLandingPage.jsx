import React, { lazy, Suspense } from 'react';
import Header from '../components/layout/Header';

const HeroSection = lazy(() => import('../components/sections/HeroSection'));
const PainPointSection = lazy(() => import('../components/sections/PainPointSection'));
const MethodSection = lazy(() => import('../components/sections/MethodSection'));
const DifferentialSection = lazy(() => import('../components/sections/DifferentialSection'));
const TestimonialSection = lazy(() => import('../components/sections/TestimonialSection'));
const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const FinalCTASection = lazy(() => import('../components/sections/FinalCTASection'));

const EnglishLandingPage = () => {
  return (
    <main className="landing-page">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <PainPointSection />
        <MethodSection />
        <DifferentialSection />
        <TestimonialSection />
        <AboutSection />
        <FinalCTASection />
      </Suspense>
    </main>
  );
};

export default EnglishLandingPage;
