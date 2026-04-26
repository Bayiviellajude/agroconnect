'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function AboutPreview() {
  useEffect(() => {
    const els = document.querySelectorAll('.about-reveal');
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
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="lg:col-span-5 about-reveal animate-on-scroll">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_11f9a6f9a-1772469871393.png"
                  alt="Team collaborating on agricultural technology in a bright workspace with computers and plant data"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw" />

              </div>
              {/* Floating tag */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 text-xs font-bold uppercase tracking-widest">
                Est. 2024
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:col-span-7 flex flex-col gap-6 about-reveal animate-on-scroll" style={{ animationDelay: '0.15s' }}>
            <span className="text-xs text-accent uppercase tracking-widest font-semibold">Our Mission</span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Cultivating the future through{' '}
              <span className="text-accent">technology</span> and{' '}
              <span className="text-muted-foreground font-light">innovation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg font-light">
              AgroConnect was born at the intersection of agriculture and technology. We build solutions that empower farmers with real-time data, predictive analytics, and smart automation — making sustainable farming accessible and profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-accent text-accent text-sm font-semibold px-6 py-3 hover:bg-accent hover:text-accent-foreground transition-colors uppercase tracking-wider">

                Meet the Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/activities"
                className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium px-6 py-3 border border-border hover:border-foreground hover:text-foreground transition-colors uppercase tracking-wider">

                Our Activities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}