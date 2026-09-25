'use client';

import { useState, useEffect } from 'react';

const URL_TEXT  = 'acservices.co.uk';
const HEADLINE  = 'Professional services,\ntrusted across London.';

export default function HeroBVisual() {
  const [urlChars,      setUrlChars]      = useState(0);
  const [phase,         setPhase]         = useState(0);
  const [headlineChars, setHeadlineChars] = useState(0);

  // Phase 0 → type the URL character by character
  useEffect(() => {
    if (phase !== 0) return;
    if (urlChars < URL_TEXT.length) {
      const t = setTimeout(() => setUrlChars((c) => c + 1), 65);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase(1), 420);
    return () => clearTimeout(t);
  }, [phase, urlChars]);

  // Phase 1 → page nav loads → advance
  useEffect(() => {
    if (phase !== 1) return;
    const t = setTimeout(() => setPhase(2), 500);
    return () => clearTimeout(t);
  }, [phase]);

  // Phase 2 → type the headline
  useEffect(() => {
    if (phase !== 2) return;
    if (headlineChars < HEADLINE.length) {
      const t = setTimeout(() => setHeadlineChars((c) => c + 1), 40);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase(3), 280);
    return () => clearTimeout(t);
  }, [phase, headlineChars]);

  // Phase 3 → CTA appears → Phase 4 → cards appear
  useEffect(() => {
    if (phase !== 3) return;
    const t = setTimeout(() => setPhase(4), 420);
    return () => clearTimeout(t);
  }, [phase]);

  const showNav   = phase >= 1;
  const showHero  = phase >= 2;
  const showCTA   = phase >= 3;
  const showCards = phase >= 4;

  return (
    <div className="relative w-full max-w-[500px] mx-auto" style={{ padding: '40px 48px' }}>

      {/* Soft green glow behind the browser */}
      <div className="absolute pointer-events-none" style={{
        inset: 0,
        background: 'radial-gradient(ellipse at 60% 48%, rgba(22,163,74,0.11) 0%, transparent 68%)',
        filter: 'blur(20px)',
      }} />

      {/* ── Floating badge — top right ── */}
      <div className="animate-float-b absolute bg-card rounded-2xl px-4 py-3 border border-sep flex items-center gap-3"
        style={{ top: 6, right: 0, boxShadow: '0 12px 32px rgba(0,0,0,0.09)', zIndex: 10 }}>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: 'rgba(217,119,6,0.1)' }}>⭐</div>
        <div>
          <div className="font-head font-bold text-body text-sm leading-none">4.9 / 5</div>
          <div className="text-muted text-[10px] mt-0.5">Client rating</div>
        </div>
      </div>

      {/* ── Floating badge — bottom left ── */}
      <div className="animate-float-c absolute bg-card rounded-2xl px-4 py-3 border border-sep"
        style={{ bottom: 6, left: 0, boxShadow: '0 12px 32px rgba(0,0,0,0.09)', zIndex: 10 }}>
        <div className="font-head font-bold text-body text-[1.75rem] leading-none">50+</div>
        <div className="text-muted text-[10px] mt-1">Projects delivered</div>
      </div>

      {/* ── Floating badge — bottom right (live) ── */}
      <div className="animate-float-a absolute bg-card rounded-2xl px-3.5 py-2.5 border border-sep flex items-center gap-2"
        style={{ bottom: 12, right: 2, boxShadow: '0 8px 20px rgba(0,0,0,0.08)', zIndex: 10, animationDelay: '1.5s' }}>
        <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot flex-shrink-0" />
        <span className="font-mono text-[10px] text-green font-medium">Live now</span>
      </div>

      {/* ── Browser mockup ── */}
      <div className="relative rounded-2xl border border-sep overflow-hidden" style={{
        boxShadow: '0 32px 80px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.05)',
        transform: 'perspective(1100px) rotateY(-5deg) rotateX(3deg)',
      }}>

        {/* Chrome bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-sep" style={{ background: '#F0EFEC' }}>
          <div className="flex gap-1.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* URL bar with typewriter */}
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-sep" style={{ minHeight: 26 }}>
            <span className="text-[10px] opacity-40">🔒</span>
            <span className="font-mono text-[10px] text-body">
              {URL_TEXT.slice(0, urlChars)}
            </span>
            {phase === 0 && (
              <span className="inline-block w-[2px] h-3 bg-green rounded-full align-middle animate-blink" />
            )}
          </div>
        </div>

        {/* Website body */}
        <div className="bg-white" style={{ minHeight: 280 }}>

          {/* Site nav */}
          {showNav && (
            <div className="animate-fade-slide flex items-center justify-between px-5 py-3 border-b border-[#f2f0ee]">
              <div className="w-14 h-2.5 rounded-full" style={{ background: 'rgba(26,26,26,0.75)' }} />
              <div className="flex gap-3 items-center">
                <div className="w-8 h-1.5 rounded-full bg-[#ddd]" />
                <div className="w-8 h-1.5 rounded-full bg-[#ddd]" />
                <div className="w-16 h-5 rounded-full" style={{ background: '#16a34a' }} />
              </div>
            </div>
          )}

          {/* Site hero with typewriter headline */}
          {showHero && (
            <div className="px-5 py-6" style={{ background: 'linear-gradient(140deg,#f8fffc 0%,#f0faf5 100%)', minHeight: 148 }}>
              <div className="w-20 h-1.5 rounded-full mb-3.5" style={{ background: 'rgba(22,163,74,0.4)' }} />

              {/* Typewriter headline */}
              <div className="font-head font-bold leading-snug mb-3"
                style={{ fontSize: 13, color: '#1a1a1a', whiteSpace: 'pre-line', minHeight: 34 }}>
                {HEADLINE.slice(0, headlineChars)}
                {phase === 2 && (
                  <span className="inline-block w-[2px] h-3 bg-green rounded-full align-middle ml-px animate-blink" />
                )}
              </div>

              {/* Subtitle placeholder */}
              {showCTA && (
                <div className="animate-fade-slide">
                  <div className="w-44 h-1.5 rounded-full bg-[#ddd] mb-1.5" />
                  <div className="w-36 h-1.5 rounded-full bg-[#e5e5e5] mb-4" />
                  <div className="flex gap-2.5">
                    <div className="w-20 h-7 rounded-lg" style={{ background: '#16a34a' }} />
                    <div className="w-16 h-7 rounded-lg border border-[#E5E3DE]" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Site cards */}
          {showCards && (
            <div className="animate-fade-slide px-5 pb-5 pt-4 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-xl border border-[#f0eeec] p-3">
                  <div className="w-6 h-6 rounded-lg mb-2.5" style={{ background: 'rgba(22,163,74,0.14)' }} />
                  <div className="w-full h-1.5 rounded-full bg-[#ebebeb] mb-1.5" />
                  <div className="h-1.5 rounded-full bg-[#f0f0f0]" style={{ width: '68%' }} />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
