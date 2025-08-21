"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import CommitteeSection from '@/components/CommitteeSection';
import Footer from '@/components/Footer';
import SponsorsSection from '@/components/SponsorsSection';
import LearnMore from '@/components/LearnMore';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation scrollY={scrollY} />
      <main>
        <HeroSection />
        <LearnMore />
        <EventsSection />
        <CommitteeSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}