'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PROJECT_VISUALS } from './ProjectVisuals';

export default function ProjectCarousel({ projects }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (idx) => {
    if (fading || idx === activeIdx) return;
    setFading(true);
    setTimeout(() => { setActiveIdx(idx); setFading(false); }, 220);
  };

  const prev = () => goTo((activeIdx - 1 + projects.length) % projects.length);
  const next = () => goTo((activeIdx + 1) % projects.length);

  const p = projects[activeIdx];
  const Visual = p.visualKey ? PROJECT_VISUALS[p.visualKey] : null;

  return (
    <div>
      {/* Main card */}
      <div
        className="grid rounded-2xl overflow-hidden mb-7 border border-sep transition-[opacity,transform] duration-[220ms] ease"
        style={{
          gridTemplateColumns: 'minmax(0,55%) minmax(0,45%)',
          opacity: fading ? 0 : 1,
          transform: fading ? 'translateY(6px)' : 'translateY(0)',
        }}
      >
        {/* Left — visual (hidden on mobile) */}
        <div className="relative overflow-hidden hidden md:block" style={{ minHeight: 420 }}>
          {Visual ? (
            <Visual />
          ) : (
            <>
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,13,13,0) 50%, #161616 100%)' }} />
            </>
          )}
        </div>

        {/* Right — info */}
        <div className="flex flex-col gap-[18px] overflow-y-auto col-span-2 md:col-span-1 bg-card px-6 py-7 md:px-9 md:py-10">
          {/* Header */}
          <div className="flex items-center gap-3.5">
            <div className="relative w-[52px] h-[52px] flex-shrink-0 rounded-[10px] overflow-hidden bg-bg border border-sep p-1.5">
              <Image
                src={p.logo}
                alt={p.name}
                fill
                className="object-contain"
                sizes="52px"
                unoptimized={p.logo.startsWith('http')}
              />
            </div>
            <div>
              <div className="font-head font-bold text-white leading-tight text-[1.1rem]">{p.name}</div>
              <div className="font-mono mt-0.5 text-[11px] text-muted">{p.location}</div>
            </div>
          </div>

          {/* Type badge */}
          <span
            className="font-mono w-fit inline-flex items-center px-3 py-1 rounded-[20px] text-[11px] font-medium tracking-[0.03em]"
            style={{
              background: p.typeColor + '18',
              color: p.typeColor,
              border: `1px solid ${p.typeColor}35`,
            }}
          >
            {p.type}
          </span>

          <p className="text-muted text-[0.9rem] leading-[1.78]">{p.description}</p>

          <div className="border-t border-sep pt-4">
            <p className="font-mono uppercase text-[11px] tracking-[0.1em] text-muted mb-2.5">
              What we delivered
            </p>
            <ul className="flex flex-col gap-[7px] list-none p-0 m-0">
              {p.delivered.map((d, i) => (
                <li key={i} className="flex items-baseline gap-2.5 text-[13px] text-body">
                  <span className="text-green flex-shrink-0 text-xs">→</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {p.quote && (
            <div className="bg-bg border-l-[3px] border-green rounded-r-lg px-5 py-4">
              <p className="text-[0.875rem] text-body leading-[1.72] italic mb-2">
                &ldquo;{p.quote}&rdquo;
              </p>
              <span className="font-mono block text-[11px] text-muted">— {p.client}</span>
            </div>
          )}

          {p.url ? (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 no-underline w-fit text-[13px] font-medium text-green border border-green/25 rounded-lg px-[18px] py-[9px] transition-all duration-200 hover:bg-green/[0.07] hover:border-green/50"
            >
              Visit Website →
            </a>
          ) : (
            <span className="font-mono text-[11px] text-muted py-0.5">
              🔒 Private system — not publicly accessible
            </span>
          )}
        </div>
      </div>

      {/* Navigation row */}
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous project"
          className="flex items-center justify-center flex-shrink-0 w-[42px] h-[42px] rounded-full bg-card border border-sep text-muted text-[22px] leading-none cursor-pointer transition-all duration-200 hover:border-green hover:text-green hover:bg-green/[0.07]"
        >
          ‹
        </button>

        <div className="flex gap-2 flex-1 overflow-x-auto scrollbar-hide justify-center py-1">
          {projects.map((proj, i) => (
            <button
              key={proj.id}
              onClick={() => goTo(i)}
              className={`flex flex-col items-center gap-1.5 cursor-pointer rounded-[10px] transition-all duration-200 flex-shrink-0 px-3.5 py-2.5 border ${
                i === activeIdx
                  ? 'border-green bg-green/[0.07]'
                  : 'border-transparent hover:border-sep-h hover:bg-card'
              }`}
            >
              <div className="relative w-[38px] h-[38px] rounded-[7px] overflow-hidden">
                <Image
                  src={proj.logo}
                  alt={proj.name}
                  fill
                  className="object-contain"
                  sizes="38px"
                  unoptimized={proj.logo.startsWith('http')}
                />
              </div>
              <span className="font-mono whitespace-nowrap text-[10px] text-muted">{proj.name}</span>
            </button>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next project"
          className="flex items-center justify-center flex-shrink-0 w-[42px] h-[42px] rounded-full bg-card border border-sep text-muted text-[22px] leading-none cursor-pointer transition-all duration-200 hover:border-green hover:text-green hover:bg-green/[0.07]"
        >
          ›
        </button>
      </div>
    </div>
  );
}
