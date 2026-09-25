'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from './ContactModalContext';

const slides = [
  '/images/portrait01.png',
  '/images/portrait04.jpg',
  '/images/evento03.png',
];

const CARD_WIDTH = 320;
const GAP = 16;
const PEEK = 70; // cuánto asoma la siguiente foto

const Carousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  // Duplicamos el primer slide al final para el loop suave
  const loopSlides = [...slides, slides[0]];

  const offset = active * (CARD_WIDTH + GAP);

  return (
    <div
      className="flex-none overflow-hidden"
      style={{ width: CARD_WIDTH + PEEK }}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          gap: GAP,
          transform: `translateX(-${offset}px)`,
        }}
      >
        {loopSlides.map((src, i) => (
          <div
            key={i}
            className="relative rounded-[28px] overflow-hidden flex-shrink-0"
            style={{ width: CARD_WIDTH, height: 480 }}
          >
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover object-top"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-5">
        {slides.map((_, i) => (
          <span
            key={i}
            className="rounded-full transition-all"
            style={{
              width: i === active ? 22 : 8,
              height: 8,
              background: i === active ? '#D4F26A' : '#5A5A5A',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function AboutSection() {
  const { openModal } = useContactModal();

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-20 md:px-12 lg:px-[64px] lg:py-28"
      style={{ background: '#2B2B2B' }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-10">

        {/* Left — text */}
        <div className="flex-1 max-w-[620px]">
          <h2
            className="font-head font-bold tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1.15, color: '#FFFFFF' }}
          >
            I help founders turn rough ideas into{' '}
            <span style={{ color: '#9CA3A3' }}>real, working products.</span>
          </h2>

          <p className="text-base leading-7 mb-10" style={{ color: '#B0B0B0' }}>
            I&apos;ve spent 4+ years working with early-stage startups and small businesses —
            building features, setting technical foundations, and shipping products that solve
            real problems. Lately I&apos;ve been focused on helping businesses implement AI
            and automation to remove friction and grow faster.
          </p>

          <div className="flex items-center gap-6 flex-wrap mt-10">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-4 rounded-full pl-7 pr-2 py-2 w-fit font-head font-medium"
              style={{ background: '#FFFFFF', color: '#0A0A0A' }}
            >
              Let&apos;s Talk
              <span className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0A0A0A] text-white text-base">
                →
              </span>
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="2.5" y="5" width="19" height="14" rx="2" stroke="#D4F26A" strokeWidth="1.8" />
                  <path d="M3 6.5l9 6.5 9-6.5" stroke="#D4F26A" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-mono text-sm" style={{ color: '#B0B0B0' }}>edijavier10@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right — carousel */}
        <Carousel />

      </div>
    </section>
  );
}