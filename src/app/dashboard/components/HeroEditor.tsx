'use client';
import React, { useState } from 'react';

interface HeroContent {
  headline: string;
  tagline: string;
  description: string;
  ctaText: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
}

const defaultContent: HeroContent = {
  headline: 'AgroConnect Team',
  tagline: 'Agricultural Innovation',
  description: 'Building agricultural technology solutions that bridge the gap between modern innovation and sustainable farming practices.',
  ctaText: 'Explore Our Work',
  stat1Value: '12',
  stat1Label: 'Hackathons',
  stat2Value: '04',
  stat2Label: 'Awards Won',
  stat3Value: '08',
  stat3Label: 'Team Members',
};

export default function HeroEditor() {
  const [content, setContent] = useState<HeroContent>(defaultContent);
  const [saved, setSaved] = useState(false);

  const handleChange = (key: keyof HeroContent, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    // In production: persist to database/API
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setContent(defaultContent);
    setSaved(false);
  };

  return (
    <div className="space-y-8">
      {/* Hero Text */}
      <div className="border border-border bg-card p-6">
        <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 pb-3 border-b border-border">
          Hero Text Content
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Main Headline
            </label>
            <input
              type="text"
              value={content.headline}
              onChange={(e) => handleChange('headline', e.target.value)}
              className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="e.g. AgroConnect Team"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Tagline / Sub-headline
            </label>
            <input
              type="text"
              value={content.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="e.g. Agricultural Innovation"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Description Paragraph
            </label>
            <textarea
              value={content.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={3}
              className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Brief description of your team and mission"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              CTA Button Text
            </label>
            <input
              type="text"
              value={content.ctaText}
              onChange={(e) => handleChange('ctaText', e.target.value)}
              className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="e.g. Explore Our Work"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border border-border bg-card p-6">
        <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 pb-3 border-b border-border">
          Hero Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {([1, 2, 3] as const).map((num) => (
            <div key={num} className="space-y-3">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider">Stat {num}</p>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Value</label>
                <input
                  type="text"
                  value={content[`stat${num}Value` as keyof HeroContent]}
                  onChange={(e) => handleChange(`stat${num}Value` as keyof HeroContent, e.target.value)}
                  className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
                  placeholder="e.g. 12"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Label</label>
                <input
                  type="text"
                  value={content[`stat${num}Label` as keyof HeroContent]}
                  onChange={(e) => handleChange(`stat${num}Label` as keyof HeroContent, e.target.value)}
                  className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
                  placeholder="e.g. Hackathons"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="border border-border bg-muted/30 p-6">
        <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Preview</h2>
        <div className="bg-background border border-border p-6">
          <p className="text-xs text-accent uppercase tracking-widest mb-2">{content.tagline}</p>
          <h3 className="text-3xl font-extrabold text-foreground uppercase tracking-tight">{content.headline}</h3>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-md">{content.description}</p>
          <div className="flex gap-6 mt-4">
            {[
              { v: content.stat1Value, l: content.stat1Label },
              { v: content.stat2Value, l: content.stat2Label },
              { v: content.stat3Value, l: content.stat3Label },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-light text-accent tracking-tighter">{s.v}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 bg-accent text-accent-foreground text-xs font-bold px-4 py-2 uppercase tracking-wider">
            {content.ctaText}
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="bg-accent text-accent-foreground text-sm font-semibold px-8 py-3 hover:bg-accent/90 transition-colors uppercase tracking-wider"
        >
          {saved ? '✓ Saved!' : 'Save Changes'}
        </button>
        <button
          onClick={handleReset}
          className="text-sm font-medium text-muted-foreground border border-border px-6 py-3 hover:text-foreground hover:border-foreground transition-colors uppercase tracking-wider"
        >
          Reset Defaults
        </button>
      </div>
    </div>
  );
}