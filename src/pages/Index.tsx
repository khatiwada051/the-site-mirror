
import React from 'react';
import HeroSection from '@/components/HeroSection';
import RescueSection from '@/components/RescueSection';
import StorySection from '@/components/StorySection';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RescueSection />
      <StorySection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
