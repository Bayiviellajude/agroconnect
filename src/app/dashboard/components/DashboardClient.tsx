'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import HeroEditor from './HeroEditor';
import TeamEditor from './TeamEditor';
import ActivitiesEditor from './ActivitiesEditor';

type Tab = 'hero' | 'team' | 'activities';

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'hero', label: 'Homepage Content', icon: '🏠' },
  { id: 'team', label: 'Team Members', icon: '👥' },
  { id: 'activities', label: 'Activities', icon: '🏆' },
];

export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState<Tab>('hero');

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col fixed h-full z-40">
        <div className="p-6 border-b border-border">
          <Link href="/homepage" className="flex items-center gap-2">
            <AppLogo size={32} />
            <span className="text-sm font-bold text-foreground">AgroConnect</span>
          </Link>
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Dashboard</p>
        </div>

        <nav className="flex-1 p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-3 px-2">Manage Content</p>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-colors mb-1 ${
                activeTab === tab.id
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <Link
            href="/homepage"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 p-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground uppercase tracking-tight">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your AgroConnect website content
            </p>
          </div>

          {/* Tab content */}
          {activeTab === 'hero' && <HeroEditor />}
          {activeTab === 'team' && <TeamEditor />}
          {activeTab === 'activities' && <ActivitiesEditor />}
        </div>
      </main>
    </div>
  );
}