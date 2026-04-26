'use client';
import React, { useEffect } from 'react';

export default function ActivitiesHero() {
  useEffect(() => {
    const els = document.querySelectorAll('.act-hero-reveal');
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
    <section className="relative pt-32 pb-16 border-b border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />
      <div className="beam-border-h" />
      <div className="relative mx-auto max-w-6xl px-6 z-10">
        <div className="max-w-3xl">
          <span className="act-hero-reveal animate-on-scroll inline-block text-xs text-accent uppercase tracking-widest font-semibold mb-6 border border-accent/30 px-3 py-1.5">
            What We&apos;ve Competed In
          </span>
          <h1
            className="act-hero-reveal animate-on-scroll text-5xl sm:text-6xl lg:text-[5rem] font-extrabold tracking-tighter text-foreground uppercase leading-none"
            style={{ animationDelay: '0.1s' }}
          >
            Hackathon<br />
            <span className="text-accent">Activities</span>
          </h1>
          <p
            className="act-hero-reveal animate-on-scroll mt-6 text-lg text-muted-foreground leading-relaxed font-light max-w-xl"
            style={{ animationDelay: '0.2s' }}
          >
            Every competition is a chance to build, learn, and push the boundaries of agricultural technology. Here&apos;s our track record.
          </p>
        </div>
      </div>
    </section>
  );
}