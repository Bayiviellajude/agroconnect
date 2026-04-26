'use client';
import React, { useEffect, useRef, useState } from 'react';

const metrics = [
  { value: 12, suffix: '+', label: 'Hackathons Entered' },
  { value: 4, suffix: '', label: 'Awards Won' },
  { value: 8, suffix: '', label: 'Team Members' },
  { value: 3, suffix: '', label: 'Countries Reached' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1200;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBanner() {
  return (
    <section className="relative border-y border-border bg-card py-12 overflow-hidden">
      <div className="beam-border-h" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center lg:text-left">
              <p className="text-4xl lg:text-5xl font-light tracking-tighter text-accent">
                <CountUp target={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-xs text-muted-foreground uppercase tracking-wider font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}