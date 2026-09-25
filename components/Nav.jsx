'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useContactModal } from './ContactModalContext';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Blog',       href: '/blog' },
];

function ContactButton({ className, style, children, onClick }) {
  return (
    <button onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openModal } = useContactModal();

  const handleContact = () => {
    setOpen(false);
    openModal();
  };

  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-sep">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4 md:px-12 lg:px-[64px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 4a10 10 0 016.5 17.6c-1.2-2.4-3.9-4-6.5-4-1 0-1.8-.8-1.8-1.8V16c0-3.3-2.7-6-6-6-.8 0-1.5.2-2.2.4A10 10 0 0116 6z"
              fill="#0A0A0A"
            />
          </svg>
          <span className="font-head font-bold text-body text-xl">Edi Javier</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                href={link.href}
                className="font-head font-semibold text-gray-600 no-underline transition-colors hover:opacity-70"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="font-head font-semibold text-gray-600 no-underline transition-colors hover:opacity-70"
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={handleContact}
            className="font-head font-semibold text-gray-600 transition-colors hover:opacity-70"
          >
            Contact
          </button>
        </nav>

        {/* CTA */}
        <ContactButton
          onClick={handleContact}
          className="hidden lg:inline-flex items-center gap-4 rounded-full pl-6 pr-2 py-2 font-head font-medium no-underline flex-shrink-0"
          style={{ background: '#0A0A0A', color: '#FFFFFF' }}
        >
          Contact Now
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#0A0A0A] text-base"
            style={{ background: '#D4F26A' }}
          >
            →
          </span>
        </ContactButton>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 flex-shrink-0"
        >
          <span
            className="block w-6 h-0.5 bg-body transition-transform duration-300"
            style={{ transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-6 h-0.5 bg-body transition-opacity duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-body transition-transform duration-300"
            style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-sep"
        style={{
          maxHeight: open ? 480 : 0,
          borderTopWidth: open ? 1 : 0,
        }}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-head text-body text-lg no-underline"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-head text-body text-lg no-underline"
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={handleContact}
            className="font-head text-body text-lg text-left"
          >
            Contact
          </button>

          <ContactButton
            onClick={handleContact}
            className="inline-flex items-center justify-between gap-4 rounded-full pl-6 pr-2 py-2 font-head font-medium no-underline mt-2 w-fit"
            style={{ background: '#0A0A0A', color: '#FFFFFF' }}
          >
            Contact Now
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#0A0A0A] text-base"
              style={{ background: '#D4F26A' }}
            >
              →
            </span>
          </ContactButton>
        </nav>
      </div>
    </header>
  );
}
