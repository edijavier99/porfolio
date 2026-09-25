'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 'innergrow',
    name: 'Jesús Santana',
    company: 'Innergrow',
    role: 'Owner',
    logo: '/images/InnergrowLogo2.png',
    quote: "Edi understood what we needed from day one. He built exactly what we asked for, communicated clearly throughout, and delivered on time. Working with him felt easy.",
  },
  {
    id: 'heldandco',
    name: 'Alice Gormer',
    company: 'Held & Co',
    role: 'Owner',
    logo: '/images/heldandco.png',
    quote: "We'd been burned by agencies before — overpromised, underdelivered. Edi was the opposite. Straightforward, reliable, and the work was solid. We'll be back.",
  },
  {
    id: 'hannahelsy',
    name: 'Hannah Elsy',
    company: 'Hannahelsy',
    role: 'Owner',
    logo: '/images/hannahelsyLogo.webp',
    quote: "He took our rough ideas and turned them into something real. No jargon, no drama — just good work done fast. Exactly what a small business needs.",
  },
  {
    id: 'tokunize',
    name: 'Nana',
    company: 'Tokunize',
    role: 'CTO',
    logo: '/images/Tokunize.svg',
    quote: "Edi brought both technical depth and clear communication — rare combination. He got up to speed fast and delivered quality work that held up in production.",
  },
];

const DotMap = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ opacity: 0.5 }}
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="dot-map" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.4" fill="#D4D4D0" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dot-map)" />
  </svg>
);

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  const prevIndex = (active - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (active + 1) % testimonials.length;

  const prev = testimonials[prevIndex];
  const current = testimonials[active];
  const next = testimonials[nextIndex];

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 lg:px-[64px] lg:py-24 bg-bg">
      <DotMap />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-body border border-sep rounded-full px-4 py-2 mb-6 w-fit bg-bg">
            <span className="w-1.5 h-1.5 bg-body" />
            Testimonials
          </span>

          <h2
            className="font-head tracking-[-0.02em] mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
          >
            <span className="font-bold text-body">Client</span>{' '}
            <span className="font-medium" style={{ color: '#6B7280' }}>Testimonial</span>
          </h2>

          <p className="text-muted text-lg max-w-[480px]">
            A few words from people I&apos;ve actually worked with.
          </p>
        </div>

        {/* Cards row */}
        <div className="relative flex items-center justify-center" style={{ minHeight: 320 }}>
          {/* Prev peeking left */}
          <div
            className="hidden lg:flex absolute flex-col justify-between rounded-3xl p-8"
            style={{ width: 480, minHeight: 300, left: -60, opacity: 0.3, filter: 'blur(0.3px)' }}
          >
            <span className="font-head font-bold flex-shrink-0" style={{ fontSize: 56, lineHeight: 1, color: '#D4D4D0' }}>&rdquo;</span>
            <p className="text-body text-lg leading-7 my-6">{prev.quote}</p>
            <div className="font-head font-semibold text-body">{prev.name}</div>
          </div>

          {/* Active card */}
          <div
            className="relative z-10 flex flex-col rounded-3xl p-8 md:p-10 w-full"
            style={{
              maxWidth: 620,
              background: '#FFFFFF',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              border: '1px solid #ECECE9',
            }}
          >
            {/* Quote mark */}
            <div className="flex justify-end mb-4">
              <span className="font-head font-bold" style={{ fontSize: 56, lineHeight: 1, color: '#D4D4D0' }}>&rdquo;</span>
            </div>

            <p className="text-body text-lg md:text-xl leading-8 mb-10 flex-1">
              {current.quote}
            </p>

            {/* Name + logo */}
            <div className="flex items-center justify-between border-t border-sep pt-6">
              <div>
                <div className="font-head font-semibold text-body">{current.name}</div>
                <div className="text-muted text-sm mt-0.5">{current.role}, {current.company}</div>
              </div>
              <div className="relative h-8 w-28 flex-shrink-0">
                <Image
                  src={current.logo}
                  alt={current.company}
                  fill
                  className="object-contain object-right"
                />
              </div>
            </div>
          </div>

          {/* Next peeking right */}
          <div
            className="hidden lg:flex absolute flex-col justify-between rounded-3xl p-8"
            style={{ width: 480, minHeight: 300, right: -60, opacity: 0.3 }}
          >
            <div className="flex justify-end">
              <span className="font-head font-bold" style={{ fontSize: 56, lineHeight: 1, color: '#D4D4D0' }}>&rdquo;</span>
            </div>
            <p className="text-body text-lg leading-7 my-6">{next.quote}</p>
            <div className="font-head font-semibold text-body">{next.name}</div>
          </div>
        </div>

        {/* Logo selector */}
        <div className="flex items-center justify-center gap-3 mt-14 flex-wrap">
          {testimonials.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="relative transition-all duration-300 rounded-full overflow-hidden flex-shrink-0"
                style={{
                  width: 52,
                  height: 52,
                  border: isActive ? '2px solid #0A0A0A' : '2px solid #E5E4E0',
                  filter: isActive ? 'none' : 'grayscale(1)',
                  opacity: isActive ? 1 : 0.45,
                  background: '#F5F5F3',
                }}
              >
                <Image
                  src={t.logo}
                  alt={t.company}
                  fill
                  className="object-contain"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
