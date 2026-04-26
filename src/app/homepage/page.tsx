import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StatsBanner from './components/StatsBanner';
import AboutPreview from './components/AboutPreview';
import ActivitiesCarousel from './components/ActivitiesCarousel';
import TeamGrid from './components/TeamGrid';

export default function HomepagePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsBanner />
      <AboutPreview />
      <ActivitiesCarousel />
      <TeamGrid />
      <Footer />
    </main>
  );
}