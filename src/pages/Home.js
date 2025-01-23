import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import EducationSection from '../components/EducationSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SkillsSection/>
      <EducationSection/>
    </div>
  );
};

export default Home;
