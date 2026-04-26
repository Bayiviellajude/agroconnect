'use client';
import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const heroImages = [
{
  src: "https://images.unsplash.com/photo-1605372567150-7a926e55420f",
  alt: 'Agricultural field at dusk with golden light, dark soil rows, deep shadows, dramatic low-angle perspective'
},
{
  src: "https://images.unsplash.com/photo-1560168504-a8617c6d7144",
  alt: 'Close-up of wheat crop in dim field light, dark moody atmosphere, shadowed stalks with amber tones'
},
{
  src: "https://images.unsplash.com/photo-1635358748067-136010c4bde8",
  alt: 'Aerial view of farmland at night, dark earth tones, shadowed irrigation channels, minimal light'
}];


const stats = [
{ value: '12', label: 'Hackathons', imgIndex: 0 },
{ value: '04', label: 'Awards Won', imgIndex: 1 },
{ value: '08', label: 'Team Members', imgIndex: 2 }];


export default function HeroSection() {
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(heroImages[0]);
  const [fading, setFading] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleStatClick = (index: number) => {
    if (index === activeStatIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveStatIndex(index);
      setImgSrc(heroImages[stats[index].imgIndex]);
      setFading(false);
    }, 500);
  };

  // Scroll-reveal
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-screen items-center">

        {/* Left: Headlines */}
        <div className="lg:col-span-5 flex flex-col justify-center relative z-20 pt-8 lg:pt-0">
          <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center gap-2 border border-border text-muted-foreground text-xs uppercase tracking-widest px-3 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Hackathon Team 2026
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-[4.5rem] leading-none font-extrabold tracking-tighter text-foreground uppercase animate-on-scroll"
            style={{ animationDelay: '0.15s' }}>

            Agro<br />
            <span className="text-accent">Connect</span><br />
            <span className="text-muted-foreground font-light text-4xl sm:text-5xl lg:text-[3.5rem]">Team</span>
          </h1>

          <p
            className="mt-6 text-base lg:text-lg text-muted-foreground max-w-md leading-relaxed font-light animate-on-scroll"
            style={{ animationDelay: '0.2s' }}>

            Building agricultural technology solutions that bridge the gap between modern innovation and sustainable farming practices.
          </p>

          <div className="mt-10 flex flex-col items-start gap-3 animate-on-scroll" style={{ animationDelay: '0.25s' }}>
            <div className="agro-btn-wrapper">
              <div className="agro-btn-line horizontal top" />
              <div className="agro-btn-line vertical right" />
              <div className="agro-btn-line horizontal bottom" />
              <div className="agro-btn-line vertical left" />
              <button className="agro-btn">
                <span>Explore Our Work</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <span className="text-xs text-muted-foreground uppercase tracking-widest pl-4 opacity-70">
              Scroll to discover ↓
            </span>
          </div>
        </div>

        {/* Center: Oval Image */}
        <div className="lg:col-span-4 relative flex items-center justify-center py-12 lg:py-0 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 grid-bg opacity-50 z-0" />
          <div className="absolute top-1/4 right-0 text-border text-2xl font-light z-10">+</div>
          <div className="absolute bottom-1/4 left-0 text-border text-2xl font-light z-10">+</div>

          <div className="relative z-10 w-full max-w-xs lg:max-w-none aspect-[3/4] rounded-[50%] overflow-hidden border border-border shadow-2xl group">
            <AppImage
              src={imgSrc.src}
              alt={imgSrc.alt}
              fill
              className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${fading ? 'opacity-0 scale-105' : 'opacity-90 scale-100'}`}
              sizes="(max-width: 768px) 280px, 360px"
              priority />

            {/* Gradient overlay for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right: Stats */}
        <div className="lg:col-span-3 flex flex-col relative z-20 lg:pt-10 lg:pl-6 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <div className="beam-border-v hidden lg:block" />

          <div className="flex flex-row lg:flex-col justify-between lg:justify-start gap-4 lg:gap-0 lg:h-full lg:pb-10">
            {stats.map((stat, i) =>
            <div
              key={stat.label}
              className={`stat-item lg:flex-1 flex flex-col justify-center lg:py-8 ${i > 0 ? 'lg:border-t lg:border-border/30 lg:border-dashed' : ''} ${activeStatIndex === i ? 'active' : ''}`}
              onClick={() => handleStatClick(i)}>

                <span className="stat-value text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-muted-foreground block transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1 block lg:pl-2">
                  {stat.label}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>);

}