import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Pattern 3: Vercel Horizontal Flow */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/homepage" className="flex items-center gap-2">
            <AppLogo size={28} />
            <span className="text-sm font-semibold text-foreground">AgroConnect</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: 'Home', href: '/homepage' },
              { label: 'About', href: '/about' },
              { label: 'Activities', href: '/activities' },
            ]?.map((link, i, arr) => (
              <React.Fragment key={link?.href}>
                <Link
                  href={link?.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link?.label}
                </Link>
                {i < arr?.length - 1 && (
                  <span className="text-border hidden sm:inline">·</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2026 AgroConnect
          </p>
        </div>
      </div>
    </footer>
  );
}