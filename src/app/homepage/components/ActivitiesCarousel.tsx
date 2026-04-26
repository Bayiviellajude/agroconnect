'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';


const activities = [
{
  id: 1,
  title: 'AgriHack Global 2025',
  date: 'Nov 2025',
  location: 'Nairobi, Kenya',
  status: 'Winner',
  statusColor: 'bg-accent text-accent-foreground',
  description: 'Built a real-time crop disease detection system using computer vision and IoT sensors.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f96ac458-1776191020215.png",
  imageAlt: 'Agricultural field with technology sensors at sunset, dark moody lighting, shadowed crop rows'
},
{
  id: 2,
  title: 'FoodTech Innovate',
  date: 'Aug 2025',
  location: 'Lagos, Nigeria',
  status: 'Finalist',
  statusColor: 'bg-secondary text-primary-foreground',
  description: 'Developed a supply chain transparency platform connecting smallholder farmers to markets.',
  image: "https://images.unsplash.com/photo-1643316545136-df5423c44143",
  imageAlt: 'Wheat field under overcast sky, dim natural light, moody agricultural landscape'
},
{
  id: 3,
  title: 'ClimateCode Sprint',
  date: 'May 2025',
  location: 'Accra, Ghana',
  status: 'Participant',
  statusColor: 'bg-muted text-muted-foreground',
  description: 'Created a climate-adaptive irrigation scheduling tool using weather API integration.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_175256a57-1772139819611.png",
  imageAlt: 'Aerial farmland view at dusk, dark earth patterns, deep shadow irrigation channels'
},
{
  id: 4,
  title: 'AgroData Hackathon',
  date: 'Feb 2025',
  location: 'Kampala, Uganda',
  status: 'Winner',
  statusColor: 'bg-accent text-accent-foreground',
  description: 'Designed a predictive yield analysis dashboard for maize and sorghum farmers.',
  image: "https://images.unsplash.com/photo-1649730240730-7ecae326d0c0",
  imageAlt: 'Close-up of soil and seedling in dim greenhouse light, dark background, minimal lighting'
}];


export default function ActivitiesCarousel() {
  useEffect(() => {
    const els = document.querySelectorAll('.carousel-reveal');
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
    <section className="py-20 lg:py-28 bg-card border-t border-border overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 carousel-reveal animate-on-scroll">
          <div>
            <span className="text-xs text-accent uppercase tracking-widest font-semibold">What We&apos;ve Built</span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mt-2 uppercase leading-none">
              Hackathon<br />
              <span className="text-muted-foreground font-light">Activities</span>
            </h2>
          </div>
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-accent transition-colors uppercase tracking-widest border-b border-foreground/20 hover:border-accent pb-1">

            View All
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Horizontal scroll */}
        <div className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-6 px-6">
          {activities?.map((activity, i) =>
          <div
            key={activity?.id}
            className="snap-center shrink-0 w-72 sm:w-80 group cursor-default carousel-reveal animate-on-scroll"
            style={{ animationDelay: `${i * 0.1}s` }}>

              {/* Card image */}
              <div className="aspect-[16/9] overflow-hidden border border-border relative">
                <AppImage
                src={activity?.image}
                alt={activity?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="320px" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 uppercase tracking-wider ${activity?.statusColor}`}>
                  {activity?.status}
                </span>
              </div>

              {/* Card body */}
              <div className="border border-t-0 border-border p-4 bg-background group-hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-muted-foreground font-medium">{activity?.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border inline-block" />
                  <span className="text-xs text-muted-foreground">{activity?.location}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2 group-hover:text-accent transition-colors">
                  {activity?.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-light line-clamp-2">
                  {activity?.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}