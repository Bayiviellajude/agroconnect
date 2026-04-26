'use client';
import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

// BENTO GRID AUDIT:
// Array has 6 cards: [AgriHack, FoodTech, ClimateCode, AgroData, SmartFarm, GreenTech]
// Grid: grid-cols-3 (lg), grid-cols-2 (sm), grid-cols-1 (mobile)
// Row 1: [AgriHack cs-1] [FoodTech cs-1] [ClimateCode cs-1]
// Row 2: [AgroData cs-1] [SmartFarm cs-1] [GreenTech cs-1]
// Placed 6/6 cards ✓

type Status = 'All' | 'Winner' | 'Finalist' | 'Participant';

const allActivities = [
{
  id: 1,
  title: 'AgriHack Global 2025',
  date: 'November 14–16, 2025',
  location: 'Nairobi, Kenya',
  status: 'Winner' as Status,
  tech: ['Computer Vision', 'IoT', 'React Native'],
  description: 'Built a real-time crop disease detection system using computer vision and IoT sensors. The platform achieved 94% accuracy on maize leaf blight detection and was tested with 40 farmers in Kiambu County.',
  image: "https://images.unsplash.com/photo-1727872560673-1dd664f2f2ef",
  imageAlt: 'Agricultural field with IoT sensor technology at dusk, dark moody atmosphere, shadowed crop rows with amber horizon',
  prize: 'First Place — $5,000'
},
{
  id: 2,
  title: 'FoodTech Innovate Summit',
  date: 'August 3–5, 2025',
  location: 'Lagos, Nigeria',
  status: 'Finalist' as Status,
  tech: ['Blockchain', 'Node.js', 'Mobile'],
  description: 'Developed a supply chain transparency platform connecting smallholder farmers directly to urban markets, eliminating 3 layers of intermediaries and increasing farmer revenue by an estimated 35%.',
  image: "https://images.unsplash.com/photo-1643316545136-df5423c44143",
  imageAlt: 'Wheat field under overcast sky, dim natural light, moody agricultural landscape with dark horizon',
  prize: 'Top 5 Finalist'
},
{
  id: 3,
  title: 'ClimateCode Sprint',
  date: 'May 22–24, 2025',
  location: 'Accra, Ghana',
  status: 'Participant' as Status,
  tech: ['Python', 'Weather API', 'Django'],
  description: 'Created a climate-adaptive irrigation scheduling tool that integrates 7-day weather forecasts with soil moisture data to optimize water usage for smallholder rice farmers.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_175256a57-1772139819611.png",
  imageAlt: 'Aerial farmland view at dusk, dark earth patterns, deep shadow irrigation channels, minimal ambient light',
  prize: null
},
{
  id: 4,
  title: 'AgroData Hackathon',
  date: 'February 8–10, 2025',
  location: 'Kampala, Uganda',
  status: 'Winner' as Status,
  tech: ['TensorFlow', 'Python', 'Tableau'],
  description: 'Designed a predictive yield analysis dashboard for maize and sorghum farmers using satellite imagery and historical weather patterns. Deployed to 120 farmer cooperatives.',
  image: "https://images.unsplash.com/photo-1649730240730-7ecae326d0c0",
  imageAlt: 'Close-up of soil and seedling in dim greenhouse light, dark background, minimal dramatic lighting',
  prize: 'Best Data Solution — $3,000'
},
{
  id: 5,
  title: 'SmartFarm Challenge',
  date: 'October 18–20, 2024',
  location: 'Dar es Salaam, Tanzania',
  status: 'Finalist' as Status,
  tech: ['Arduino', 'MQTT', 'Vue.js'],
  description: 'Built an affordable soil health monitoring system using low-cost sensors. The device costs $12 to manufacture and provides NPK readings, pH levels, and moisture data via SMS.',
  image: "https://images.unsplash.com/photo-1663948306219-eeab9bba8e66",
  imageAlt: 'Green crop field at twilight, soft moody light, dark soil visible between rows, atmospheric agricultural scene',
  prize: 'Hardware Innovation Award'
},
{
  id: 6,
  title: 'GreenTech Africa',
  date: 'June 12–14, 2024',
  location: 'Kigali, Rwanda',
  status: 'Participant' as Status,
  tech: ['React', 'Firebase', 'Maps API'],
  description: 'Our first hackathon as a team. Built a community crop calendar app that aggregates traditional farming knowledge with modern agronomic data for East African staple crops.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_141fc0891-1775558265417.png",
  imageAlt: 'Farmland with green crops under soft overcast sky, bright airy agricultural landscape, team collaboration setting',
  prize: null
}];


const filters: Status[] = ['All', 'Winner', 'Finalist', 'Participant'];

const statusStyles: Record<Status, string> = {
  All: '',
  Winner: 'bg-accent text-accent-foreground',
  Finalist: 'bg-secondary text-primary-foreground',
  Participant: 'bg-muted text-muted-foreground'
};

export default function ActivitiesGrid() {
  const [activeFilter, setActiveFilter] = useState<Status>('All');

  const filtered = activeFilter === 'All' ?
  allActivities :
  allActivities.filter((a) => a.status === activeFilter);

  useEffect(() => {
    const els = document.querySelectorAll('.act-card-reveal');
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
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) =>
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
            activeFilter === f ?
            'border-accent bg-accent text-accent-foreground' :
            'border-border text-muted-foreground hover:border-foreground hover:text-foreground'}`
            }>

              {f}
              {f !== 'All' &&
            <span className="ml-2 opacity-60">
                  {allActivities.filter((a) => a.status === f).length}
                </span>
            }
            </button>
          )}
        </div>

        {/* Cards grid */}
        {/* Grid audit: up to 6 cards in 3-col grid = 2 rows of 3 ✓ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((activity, i) =>
          <div
            key={activity.id}
            className="act-card-reveal animate-on-scroll group border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden flex flex-col"
            style={{ animationDelay: `${i * 0.08}s` }}>

              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <AppImage
                src={activity.image}
                alt={activity.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {/* Status badge */}
                <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 uppercase tracking-wider ${statusStyles[activity.status]}`}>
                  {activity.status}
                </span>
                {activity.prize &&
              <span className="absolute bottom-3 right-3 text-xs font-medium px-2 py-1 bg-background/80 text-foreground border border-border/50 backdrop-blur-sm">
                    🏆 {activity.prize}
                  </span>
              }
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 bg-card group-hover:bg-background transition-colors">
                <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                  <span>{activity.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border inline-block" />
                  <span>{activity.location}</span>
                </div>
                <h3 className="text-base font-bold text-foreground uppercase tracking-wide mb-3 group-hover:text-accent transition-colors">
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light flex-1">
                  {activity.description}
                </p>
                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {activity.tech.map((t) =>
                <span key={t} className="text-xs border border-border px-2 py-0.5 text-muted-foreground uppercase tracking-wider">
                      {t}
                    </span>
                )}
                </div>
              </div>
            </div>
          )}
        </div>

        {filtered.length === 0 &&
        <div className="text-center py-24">
            <p className="text-muted-foreground text-lg">No activities match this filter.</p>
          </div>
        }
      </div>
    </section>);

}