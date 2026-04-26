'use client';
import React, { useEffect } from 'react';

export default function MissionVision() {
  useEffect(() => {
    const els = document.querySelectorAll('.mv-reveal');
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
    <section className="py-20 lg:py-28 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <div className="mv-reveal animate-on-scroll">
            <div className="relative pl-6 border-l-2 border-accent">
              <span className="text-xs text-accent uppercase tracking-widest font-semibold mb-4 block">01 — Mission</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight mb-6">
                To democratize agricultural intelligence for smallholder farmers across Africa
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light text-base lg:text-lg">
                We believe every farmer deserves access to the same technological advantages as large-scale agribusinesses. Through affordable IoT devices, mobile-first platforms, and AI-driven insights, we are closing the precision agriculture gap — one community at a time.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: '2.5M+', label: 'Farmers targeted' },
                  { value: '15', label: 'Crops supported' },
                ]?.map((stat) => (
                  <div key={stat?.label} className="border border-border p-4">
                    <p className="text-2xl font-light text-accent tracking-tighter">{stat?.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat?.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="mv-reveal animate-on-scroll" style={{ animationDelay: '0.15s' }}>
            <div className="relative pl-6 border-l-2 border-secondary">
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-4 block">02 — Vision</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight mb-6">
                A world where food security is a solved problem, not a persistent crisis
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light text-base lg:text-lg">
                By 2030, we envision AgroConnect-powered communities where farmers make data-driven decisions, supply chains are transparent and fair, and agricultural waste is minimized through intelligent resource management. Technology is not the end goal — thriving communities are.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: '2030', label: 'Target year' },
                  { value: '10+', label: 'Countries' },
                ]?.map((stat) => (
                  <div key={stat?.label} className="border border-border p-4">
                    <p className="text-2xl font-light text-accent tracking-tighter">{stat?.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat?.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}