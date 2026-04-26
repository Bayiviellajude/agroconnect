'use client';
import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

// BENTO GRID AUDIT:
// Array has 5 cards: [Amara (lead), Kwame, Fatima, Tendai, Nadia]
// Grid: grid-cols-3 (lg)
// Row 1: [col-1-2: Amara cs-2] [col-3: Kwame cs-1]
// Row 2: [col-1: Fatima cs-1] [col-2: Tendai cs-1] [col-3: Nadia cs-1]
// Placed 5/5 cards ✓

const teamMembers = [
{
  id: 1,
  name: 'Amara Diallo',
  role: 'Team Lead & Full Stack Engineer',
  bio: 'Agricultural engineer turned developer with 4 years of experience building IoT systems for crop monitoring. Led AgroConnect from concept to 3 hackathon wins. Passionate about bridging the digital divide in West African farming communities.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d89f49b-1763301927007.png",
  imageAlt: 'Professional portrait of a confident young woman with natural hair, neutral studio background, warm lighting',
  featured: true,
  skills: ['React', 'Node.js', 'IoT', 'Python']
},
{
  id: 2,
  name: 'Kwame Asante',
  role: 'Backend Engineer',
  bio: 'Systems architect specializing in real-time data pipelines and IoT infrastructure.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae0f3431-1763296290027.png",
  imageAlt: 'Professional portrait of a young man in smart casual attire, neutral background',
  featured: false,
  skills: ['Go', 'PostgreSQL', 'MQTT', 'AWS']
},
{
  id: 3,
  name: 'Fatima Ouedraogo',
  role: 'UI/UX Designer',
  bio: 'Designing interfaces that rural farmers can actually use — accessible, multilingual, offline-first.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_103b528db-1763293982935.png",
  imageAlt: 'Portrait of a young woman smiling, professional setting with soft lighting',
  featured: false,
  skills: ['Figma', 'React', 'Accessibility', 'Research']
},
{
  id: 4,
  name: 'Tendai Moyo',
  role: 'Data Scientist',
  bio: 'Building predictive models for crop yield forecasting and climate adaptation strategies.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae0f3431-1763296290027.png",
  imageAlt: 'Portrait of a young man in professional attire, confident expression, neutral background',
  featured: false,
  skills: ['Python', 'TensorFlow', 'R', 'GIS']
},
{
  id: 5,
  name: 'Nadia Kamara',
  role: 'DevOps & Cloud Engineer',
  bio: 'Ensuring our solutions scale from hackathon prototype to production-ready deployment.',
  image: "https://images.unsplash.com/photo-1637463854732-c2d2f4f62bfc",
  imageAlt: 'Portrait of a young woman with braided hair, professional setting, warm lighting',
  featured: false,
  skills: ['Kubernetes', 'Terraform', 'GCP', 'CI/CD']
}];


export default function TeamSection() {
  useEffect(() => {
    const els = document.querySelectorAll('.team-full-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 team-full-reveal animate-on-scroll">
          <span className="text-xs text-accent uppercase tracking-widest font-semibold">The People Behind It</span>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mt-2 uppercase leading-none">
            Meet the<br />
            <span className="text-muted-foreground font-light">Team</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Amara — featured, col-span-2 */}
          <div className="sm:col-span-2 lg:col-span-2 group team-full-reveal animate-on-scroll border border-border hover:border-accent/40 transition-colors overflow-hidden">
            <div className="flex flex-col sm:flex-row h-full min-h-[320px]">
              <div className="relative sm:w-5/12 aspect-[4/3] sm:aspect-auto overflow-hidden">
                <AppImage
                  src={teamMembers?.[0]?.image}
                  alt={teamMembers?.[0]?.imageAlt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, 40vw"
                  priority />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50" />
              </div>
              <div className="sm:w-7/12 flex flex-col justify-between p-6 lg:p-8 bg-card">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-accent uppercase tracking-widest font-bold border border-accent/30 px-2 py-0.5">Lead</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">{teamMembers?.[0]?.name}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">{teamMembers?.[0]?.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{teamMembers?.[0]?.bio}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {teamMembers?.[0]?.skills?.map((skill) =>
                  <span key={skill} className="text-xs border border-border px-2 py-1 text-muted-foreground uppercase tracking-wider">
                      {skill}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Kwame */}
          <div className="group team-full-reveal animate-on-scroll border border-border hover:border-accent/40 transition-colors overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <AppImage
                src={teamMembers?.[1]?.image}
                alt={teamMembers?.[1]?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, 33vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-base font-bold text-foreground">{teamMembers?.[1]?.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{teamMembers?.[1]?.role}</p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">{teamMembers?.[1]?.bio}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {teamMembers?.[1]?.skills?.map((skill) =>
                  <span key={skill} className="text-xs border border-border/50 px-1.5 py-0.5 text-muted-foreground uppercase tracking-wider">{skill}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Fatima */}
          <div className="group team-full-reveal animate-on-scroll border border-border hover:border-accent/40 transition-colors overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <AppImage
                src={teamMembers?.[2]?.image}
                alt={teamMembers?.[2]?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, 33vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-base font-bold text-foreground">{teamMembers?.[2]?.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{teamMembers?.[2]?.role}</p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">{teamMembers?.[2]?.bio}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {teamMembers?.[2]?.skills?.map((skill) =>
                  <span key={skill} className="text-xs border border-border/50 px-1.5 py-0.5 text-muted-foreground uppercase tracking-wider">{skill}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tendai */}
          <div className="group team-full-reveal animate-on-scroll border border-border hover:border-accent/40 transition-colors overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <AppImage
                src={teamMembers?.[3]?.image}
                alt={teamMembers?.[3]?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, 33vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-base font-bold text-foreground">{teamMembers?.[3]?.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{teamMembers?.[3]?.role}</p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">{teamMembers?.[3]?.bio}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {teamMembers?.[3]?.skills?.map((skill) =>
                  <span key={skill} className="text-xs border border-border/50 px-1.5 py-0.5 text-muted-foreground uppercase tracking-wider">{skill}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Nadia */}
          <div className="group team-full-reveal animate-on-scroll border border-border hover:border-accent/40 transition-colors overflow-hidden" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <AppImage
                src={teamMembers?.[4]?.image}
                alt={teamMembers?.[4]?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, 33vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-base font-bold text-foreground">{teamMembers?.[4]?.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{teamMembers?.[4]?.role}</p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">{teamMembers?.[4]?.bio}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {teamMembers?.[4]?.skills?.map((skill) =>
                  <span key={skill} className="text-xs border border-border/50 px-1.5 py-0.5 text-muted-foreground uppercase tracking-wider">{skill}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}