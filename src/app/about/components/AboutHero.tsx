'use client';
import React, { useEffect } from 'react';

export default function AboutHero() {
  useEffect(() => {
    const els = document.querySelectorAll('.about-hero-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />
      <div className="beam-border-h" />

      <div className="relative mx-auto max-w-6xl px-6 z-10">
        <div className="max-w-3xl">
          <span className="about-hero-reveal animate-on-scroll inline-block text-xs text-accent uppercase tracking-widest font-semibold mb-6 border border-accent/30 px-3 py-1.5">
            Who We Are
          </span>
          <h1 className="about-hero-reveal animate-on-scroll text-5xl sm:text-6xl lg:text-[5rem] font-extrabold tracking-tighter text-foreground uppercase leading-none" style={{ animationDelay: '0.1s' }}>
            About<br />
            <span className="text-accent">Agro</span>
            <span className="text-muted-foreground font-light">Connect</span>
          </h1>
          <p className="about-hero-reveal animate-on-scroll mt-6 text-lg text-muted-foreground leading-relaxed font-light max-w-2xl" style={{ animationDelay: '0.2s' }}>
            A passionate hackathon team at the intersection of agriculture and technology. We build solutions that matter — for farmers, for communities, for the planet.
          </p>
        </div>
      </div>
    </section>
  );
}