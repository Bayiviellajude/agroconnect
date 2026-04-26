'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

// BENTO GRID AUDIT:
// Array has 5 cards: [Amara (lead), Kwame, Fatima, Tendai, Nadia]
// Grid: grid-cols-3
// Row 1: [col-1-2: Amara cs-2 rs-1] [col-3: Kwame cs-1]
// Row 2: [col-1: Fatima cs-1] [col-2: Tendai cs-1] [col-3: Nadia cs-1]
// Placed 5/5 cards ✓

const teamMembers = [
{
  id: 1,
  name: 'Amara Diallo',
  role: 'Team Lead & Full Stack',
  bio: 'Agricultural engineer turned developer. Passionate about using code to solve food security challenges across West Africa.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee2bcef3-1763301295581.png",
  imageAlt: 'Professional portrait of a confident young woman with natural hair, neutral studio background',
  featured: true
},
{
  id: 2,
  name: 'Kwame Asante',
  role: 'Backend Engineer',
  bio: 'Systems architect specializing in IoT and real-time data pipelines.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae0f3431-1763296290027.png",
  imageAlt: 'Professional portrait of a young man in smart casual attire, neutral background',
  featured: false
},
{
  id: 3,
  name: 'Fatima Ouedraogo',
  role: 'UI/UX Designer',
  bio: 'Designing interfaces that rural farmers can actually use.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_103b528db-1763293982935.png",
  imageAlt: 'Portrait of a young woman smiling, professional setting with soft lighting',
  featured: false
},
{
  id: 4,
  name: 'Tendai Moyo',
  role: 'Data Scientist',
  bio: 'Building predictive models for crop yield and climate adaptation.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae0f3431-1763296290027.png",
  imageAlt: 'Portrait of a young man in professional attire, confident expression, neutral background',
  featured: false
},
{
  id: 5,
  name: 'Nadia Kamara',
  role: 'DevOps & Cloud',
  bio: 'Ensuring our solutions scale from prototype to production.',
  image: "https://images.unsplash.com/photo-1637463854732-c2d2f4f62bfc",
  imageAlt: 'Portrait of a young woman with braided hair, professional setting, warm lighting',
  featured: false
}];


export default function TeamGrid() {
  useEffect(() => {
    const els = document.querySelectorAll('.team-reveal');
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
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 team-reveal animate-on-scroll">
          <div>
            <span className="text-xs text-accent uppercase tracking-widest font-semibold">The People</span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mt-2 uppercase leading-none">
              Our<br />
              <span className="text-muted-foreground font-light">Team</span>
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-accent transition-colors uppercase tracking-widest border-b border-foreground/20 hover:border-accent pb-1">

            Full Profiles
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Bento Grid */}
        {/* Row 1: [col-1-2: Amara cs-2] [col-3: Kwame cs-1] */}
        {/* Row 2: [col-1: Fatima] [col-2: Tendai] [col-3: Nadia] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card: Amara (featured - col-span-2) */}
          <div className="sm:col-span-2 lg:col-span-2 group team-reveal animate-on-scroll border border-border hover:border-accent/40 transition-colors overflow-hidden">
            <div className="flex flex-col sm:flex-row h-full">
              <div className="relative sm:w-1/2 aspect-[4/3] sm:aspect-auto overflow-hidden">
                <AppImage
                  src={teamMembers?.[0]?.image}
                  alt={teamMembers?.[0]?.imageAlt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, 50vw" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60" />
              </div>
              <div className="sm:w-1/2 flex flex-col justify-end p-6 bg-card">
                <span className="text-xs text-accent uppercase tracking-widest font-semibold mb-2">Team Lead</span>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{teamMembers?.[0]?.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{teamMembers?.[0]?.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{teamMembers?.[0]?.bio}</p>
              </div>
            </div>
          </div>

          {/* Card: Kwame */}
          <div className="group team-reveal animate-on-scroll border border-border hover:border-accent/40 transition-colors overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <AppImage
                src={teamMembers?.[1]?.image}
                alt={teamMembers?.[1]?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, 33vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-bold text-foreground">{teamMembers?.[1]?.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{teamMembers?.[1]?.role}</p>
              </div>
            </div>
          </div>

          {/* Card: Fatima */}
          <div className="group team-reveal animate-on-scroll border border-border hover:border-accent/40 transition-colors overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <AppImage
                src={teamMembers?.[2]?.image}
                alt={teamMembers?.[2]?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, 33vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-bold text-foreground">{teamMembers?.[2]?.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{teamMembers?.[2]?.role}</p>
              </div>
            </div>
          </div>

          {/* Card: Tendai */}
          <div className="group team-reveal animate-on-scroll border border-border hover:border-accent/40 transition-colors overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <AppImage
                src={teamMembers?.[3]?.image}
                alt={teamMembers?.[3]?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, 33vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-bold text-foreground">{teamMembers?.[3]?.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{teamMembers?.[3]?.role}</p>
              </div>
            </div>
          </div>

          {/* Card: Nadia */}
          <div className="group team-reveal animate-on-scroll border border-border hover:border-accent/40 transition-colors overflow-hidden" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <AppImage
                src={teamMembers?.[4]?.image}
                alt={teamMembers?.[4]?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, 33vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-bold text-foreground">{teamMembers?.[4]?.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{teamMembers?.[4]?.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}