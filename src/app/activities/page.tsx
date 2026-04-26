import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivitiesHero from './components/ActivitiesHero';
import ActivitiesGrid from './components/ActivitiesGrid';

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ActivitiesHero />
      <ActivitiesGrid />
      <Footer />
    </main>
  );
}