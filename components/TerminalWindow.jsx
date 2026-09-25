'use client';

import { useState, useEffect } from 'react';

const lines = [
  { type: 'header',  text: 'Kova — Software Studio' },
  { type: 'divider' },
  { type: 'label',   text: 'What we build' },
  { type: 'item',    text: 'Websites & landing pages' },
  { type: 'item',    text: 'Web & mobile applications' },
  { type: 'item',    text: 'Custom business software' },
  { type: 'divider' },
  { type: 'label',   text: 'Our track record' },
  { type: 'item',    text: '50+ projects delivered' },
  { type: 'item',    text: '20+ happy clients worldwide' },
  { type: 'item',    text: 'London-based, serving globally' },
  { type: 'divider' },
  { type: 'cta',     text: 'Delivery in 1–3 months · Support included ↓' },
];

export default function TerminalWindow() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 600 : 560);
    return () => clearTimeout(t);
  }, [shown]);

  const renderLine = (line, i) => {
    if (line.type === 'header') return (
      <div key={i} className="animate-line-in text-body font-semibold text-[15px]">
        {line.text}
      </div>
    );
    if (line.type === 'divider') return (
      <div key={i} className="h-px bg-sep my-3.5" />
    );
    if (line.type === 'label') return (
      <div key={i} className="animate-line-in font-mono uppercase text-[11px] text-muted tracking-[0.1em] my-1 mb-2">
        {line.text}
      </div>
    );
    if (line.type === 'item') return (
      <div key={i} className="animate-line-in flex items-baseline gap-2.5 text-[13.5px] text-body mb-[5px]">
        <span className="text-green flex-shrink-0 text-xs">→</span>
        {line.text}
      </div>
    );
    if (line.type === 'cta') return (
      <div key={i} className="animate-line-in font-mono text-green text-[13px] font-medium mt-1">
        {line.text}
      </div>
    );
    return null;
  };

  return (
    <div className="font-mono overflow-hidden w-full max-w-[510px] bg-card rounded-xl border border-sep" style={{ boxShadow: '0 0 0 1px #E5E3DE, 0 8px 32px rgba(0,0,0,0.07), 0 2px 8px rgba(22,163,74,0.04)' }}>
      <div className="p-6" style={{ minHeight: 300 }}>
        {lines.slice(0, shown).map((line, i) => renderLine(line, i))}
        {shown > 0 && shown <= lines.length && (
          <span className="animate-blink inline-block align-middle w-[9px] h-[15px] bg-green rounded-[1px] ml-0.5" />
        )}
      </div>
    </div>
  );
}
