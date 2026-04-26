'use client';
import React, { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const values = [
  {
    icon: 'LightBulbIcon',
    title: 'Innovation First',
    description: 'We challenge conventional approaches to agricultural problems, always asking "what if technology could do this better?"',
  },
  {
    icon: 'UsersIcon',
    title: 'Community-Centered',
    description: 'Every feature we build is tested with real farmers. If it doesn\'t solve a real problem, it doesn\'t ship.',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Sustainable Impact',
    description: 'Short-term hacks are fine; long-term solutions are our goal. We build for environmental and economic sustainability.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Data Integrity',
    description: 'Farmers trust us with their livelihoods. We treat every data point with the care it deserves.',
  },
];

export default function ValuesSection() {
  useEffect(() => {
    const els = document.querySelectorAll('.values-reveal');
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
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-24 bg-card border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 values-reveal animate-on-scroll">
          <span className="text-xs text-accent uppercase tracking-widest font-semibold">What Drives Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mt-2 uppercase">
            Our Values
          </h2>
        </div>

        {/* Asymmetric values layout — NOT a uniform 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="bg-card p-8 lg:p-10 group values-reveal animate-on-scroll hover:bg-background transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center mb-6 group-hover:border-accent/50 transition-colors">
                <Icon name={v.icon as 'LightBulbIcon'} size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}