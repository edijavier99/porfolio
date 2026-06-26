'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 px-6 md:px-12 lg:px-[88px] py-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Kova"
            width={88}
            height={30}
            className="object-contain brightness-0 invert opacity-80"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="font-head text-sm text-muted hover:text-white transition-colors no-underline">About Us</Link>
          <Link href="/sustainability" className="font-head text-sm text-muted hover:text-white transition-colors no-underline">Sustainability</Link>
          <Link href="/#contact" className="btn-primary font-head text-sm no-underline">Start a Project →</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-5 pt-6 pb-2 mt-4" style={{ borderTop: '1px solid #2a2a2a' }}>
          <Link href="/about" className="font-head text-sm text-muted hover:text-white transition-colors no-underline" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/sustainability" className="font-head text-sm text-muted hover:text-white transition-colors no-underline" onClick={() => setOpen(false)}>Sustainability</Link>
          <Link href="/#contact" className="btn-primary font-head text-sm no-underline w-fit" onClick={() => setOpen(false)}>Start a Project →</Link>
        </div>
      )}
    </nav>
  );
}
