'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from './ContactModalContext';

const socials = [
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/edisonca%C3%B1izares/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.989V9h3.101v1.561h.043c.432-.82 1.487-1.685 3.059-1.685 3.27 0 3.874 2.152 3.874 4.95v6.626zM5.337 7.433a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zm1.554 13.019H3.783V9h3.108v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Portrait = () => (
  <div
    className="flex flex-col items-center rounded-[36px] p-3 w-full lg:w-auto"
    style={{ background: 'rgba(255,255,255,0.6)', boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}
  >
    <div
      className="relative rounded-[26px] overflow-hidden w-full lg:w-[340px]"
      style={{ background: '#E9E9EA' }}
    >
      <Image
        src="/images/portrait02.png"
        alt="Edi Javier"
        width={340}
        height={480}
        className="w-full h-auto block"
        priority
      />
      <div className="absolute top-5 right-5 flex flex-col gap-3">
        {socials.map((s) => (
          <Link
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105"
            style={{ background: 'rgba(60,60,60,0.55)', backdropFilter: 'blur(4px)' }}
          >
            {s.icon}
          </Link>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-2 py-3">
      <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot flex-shrink-0" />
      <span className="font-head font-medium text-sm text-body">Available for new projects</span>
    </div>
  </div>
);

const stats = [
  { num: '10+', label: 'Projects shipped' },
  { num: '4+',  label: 'Years experience' },
];

export default function HeroSection() {
  const { openModal } = useContactModal();

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 py-16 md:px-12 md:py-20 lg:px-[64px] lg:py-24 bg-bg"
      style={{ minHeight: 'calc(100vh - 72px)' }}
    >
      <div
        className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-6"
        style={{ minHeight: 'calc(100vh - 72px - 128px)' }}
      >

        {/* ── LEFT — top-aligned on desktop, order-1 on mobile ── */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-start lg:max-w-[420px] order-1 lg:order-none">
          <p className="text-muted text-xl mb-2">Hello. Hola. I&apos;m</p>

          <h1
            className="font-head font-bold tracking-[-0.03em] mb-6"
            style={{ lineHeight: 0.95, fontSize: 'clamp(3rem, 6vw, 4.75rem)' }}
          >
            {/* lg:block → two lines on desktop, inline on mobile (one line) */}
            <span className="lg:block text-body">Edi</span>
            {' '}
            <span className="lg:block" style={{ color: '#6B7280' }}>Javier</span>
          </h1>

          <p className="text-muted text-base leading-7 mb-9">
            I help founders and small businesses build software and implement AI
            solutions that remove friction, save time, and accelerate growth.
          </p>

          {/* CTA — visible on desktop here, hidden on mobile (shown later via order) */}
          <button
            onClick={openModal}
            className="hidden lg:inline-flex items-center gap-3 rounded-full pl-5 pr-2 py-2 w-fit font-head font-medium text-body"
            style={{ background: '#D4F26A' }}
          >
            Let&apos;s Connect
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0A0A0A] text-white text-sm">
              →
            </span>
          </button>
        </div>

        {/* ── CENTER — portrait ── */}
        <div className="flex-none flex justify-center items-center order-2 lg:order-none">
          <Portrait />
        </div>

        {/* ── RIGHT — bottom-aligned on desktop, order-3 on mobile ── */}
        <div className="flex-1 flex flex-col items-center text-center lg:justify-end lg:items-end lg:max-w-[280px] lg:text-right order-3 lg:order-none gap-0">
          {/* Quote — desktop only (top of right col) */}
          <div className="hidden lg:flex items-start gap-3 mb-10">
            <span className="w-px self-stretch bg-sep flex-shrink-0" />
            <p className="text-muted text-sm leading-5">
              From MVPs to scalable products —<br />I&apos;ve been in the trenches with early-stage teams.
            </p>
          </div>

          {/* Software Engineer — one line on mobile, two on desktop */}
          <h2
            className="font-head font-bold text-body mb-4 lg:mb-8"
            style={{ fontSize: '2.5rem', lineHeight: 1.05 }}
          >
            <span className="lg:block">Software</span>
            {' '}
            <span className="lg:block">Engineer</span>
          </h2>

          {/* Quote — mobile only */}
          <p className="lg:hidden text-muted text-sm leading-6 mb-6">
            From MVPs to scalable products —
            I&apos;ve been in the trenches with early-stage teams.
          </p>

          {/* Stats */}
          <div className="flex flex-row lg:flex-col gap-6 lg:gap-3 lg:items-end">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-head font-bold text-body text-2xl leading-none">{s.num}</span>
                <span className="font-mono text-[11px] text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA mobile only — order-4 ── */}
        <div className="lg:hidden order-4 flex justify-center">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 rounded-full pl-5 pr-2 py-2 w-fit font-head font-medium text-body"
            style={{ background: '#D4F26A' }}
          >
            Let&apos;s Connect
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0A0A0A] text-white text-sm">
              →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
