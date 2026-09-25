'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const contacts = [
  {
    key: 'email',
    label: 'Email me',
    value: 'edijavier10@gmail.com',
    href: 'mailto:edijavier10@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="5" width="19" height="14" rx="2" stroke="#0A0A0A" strokeWidth="1.6" />
        <path d="M3 6.5l9 6.5 9-6.5" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'location',
    label: 'Based in',
    value: 'London, United Kingdom',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s7-6.2 7-11.5A7 7 0 105 9.5C5 14.8 12 21 12 21z"
          stroke="#0A0A0A"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="2.3" stroke="#0A0A0A" strokeWidth="1.6" />
      </svg>
    ),
  },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edisonca%C3%B1izares/' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up to your subscribe endpoint
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden bg-bg">
      <div
        className="relative flex flex-col items-center text-center px-6 pt-20 pb-16 md:px-12 lg:px-[64px] lg:pt-28 lg:pb-20"
        style={{ minHeight: 640 }}
      >
        {/* Mountain background image */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.9 }}>
          <Image
            src="/images/footer-mountain.jpg"
            alt=""
            fill
            className="object-cover object-bottom"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, var(--bg) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 60%, var(--bg) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
          <h2
            className="font-head tracking-[-0.02em] mb-10"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', lineHeight: 1 }}
          >
            <span className="font-bold text-body">Let&apos;s Work</span>{' '}
            <span className="font-medium" style={{ color: '#6B7280' }}>Together</span>
          </h2>

          <p className="font-head font-medium text-body text-lg mb-5">Subscribe for Updates</p>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 rounded-full p-1.5 w-full mb-24"
            style={{
              maxWidth: 560,
              background: '#FFFFFF',
              border: '1px solid #E5E3DE',
              boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-5 py-3 text-base text-body placeholder:text-muted outline-none min-w-0"
            />
            <button
              type="submit"
              className="rounded-full px-7 py-3 font-head font-medium flex-shrink-0"
              style={{ background: '#0A0A0A', color: '#FFFFFF' }}
            >
              Send
            </button>
          </form>

          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 mb-10">
            {contacts.map((c) => {
              const inner = (
                <>
                  <span className="w-12 h-12 rounded-full border border-sep flex items-center justify-center flex-shrink-0 bg-bg">
                    {c.icon}
                  </span>
                  <div className="text-left">
                    <div className="font-head font-semibold text-body text-lg leading-tight">{c.label}</div>
                    <div className="text-muted text-sm mt-0.5">{c.value}</div>
                  </div>
                </>
              );
              return c.href ? (
                <Link key={c.key} href={c.href} className="flex items-center gap-3 no-underline">
                  {inner}
                </Link>
              ) : (
                <div key={c.key} className="flex items-center gap-3">{inner}</div>
              );
            })}
          </div>

          {/* Social pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-sep px-5 py-2.5 text-body text-sm no-underline transition-colors hover:bg-bg-alt"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-sep px-6 py-6 md:px-12 lg:px-[64px]">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/" className="no-underline hover:text-body">Home</Link>
            <Link href="#about" className="no-underline hover:text-body">About</Link>
            <Link href="#services" className="no-underline hover:text-body">Services</Link>
            <Link href="#contact" className="no-underline hover:text-body">Contact</Link>
          </div>

          <span>© {new Date().getFullYear()} Edi Javier. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}