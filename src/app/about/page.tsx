import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './components/AboutHero';
import MissionVision from './components/MissionVision';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <Footer />
    </main>
  );
}