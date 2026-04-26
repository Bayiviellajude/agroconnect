'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'About', href: '/about' },
  { label: 'Activities', href: '/activities' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="beam-border-h" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2">
            <AppLogo size={36} />
            <span className="font-sans text-lg font-700 tracking-tight text-foreground hidden sm:block" style={{ fontWeight: 700 }}>
              AgroConnect
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks?.map((link) => (
              <li key={link?.href}>
                <Link
                  href={link?.href}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    pathname === link?.href
                      ? 'text-accent' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link?.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/activities"
              className="hidden lg:inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-sm hover:bg-accent/90 transition-colors uppercase tracking-wider"
            >
              View Projects
            </Link>
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-foreground"
            >
              <span
                className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
              />
              <span
                className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8">
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold uppercase tracking-widest transition-colors ${
                pathname === link?.href ? 'text-accent' : 'text-foreground'
              }`}
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/activities"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-accent text-accent-foreground text-sm font-semibold px-8 py-3 rounded-sm uppercase tracking-wider"
          >
            View Projects
          </Link>
        </div>
      )}
    </nav>
  );
}