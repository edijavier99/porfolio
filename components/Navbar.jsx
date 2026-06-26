'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Home',           href: '/',              favicon: '⌂' },
  { label: 'About Us',       href: '/about',          favicon: '◎' },
  { label: 'Sustainability', href: '/sustainability', favicon: '🌿' },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href.includes('#')) return pathname === '/';
    return pathname === href;
  };

  return (
    <nav className="bg-chrome sticky top-0 z-50" style={{ borderBottom: '2px solid #0d0d0d' }}>
      {/* Browser toolbar */}
      <div className="flex items-center gap-3 px-4 py-2 bg-toolbar" style={{ borderBottom: '1px solid #1a1a1a' }}>
        {/* Window dots */}
        <div className="flex gap-1.5 items-center flex-shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] animate-pulse-dot" style={{ animationDelay: '0s' }} />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] animate-pulse-dot" style={{ animationDelay: '0.3s' }} />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] animate-pulse-dot" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Nav arrows */}
        <div className="flex gap-0.5">
          <button className="text-dim text-lg leading-none px-1.5 py-0.5 rounded cursor-default select-none">‹</button>
          <button className="text-dim text-lg leading-none px-1.5 py-0.5 rounded cursor-default select-none">›</button>
        </div>

        {/* URL bar */}
        <div className="flex-1 max-w-[480px] mx-auto bg-[#2c2c2c] rounded-full px-4 py-1.5 flex items-center gap-2 font-mono text-xs text-muted" style={{ border: '1px solid #3a3a3a' }}>
          <span className="opacity-60 text-[10px]">🔒</span>
          <span>kova.co.uk</span>
        </div>

        {/* Logo */}
        <div className="ml-auto flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Kova"
            width={88}
            height={30}
            className="object-contain brightness-0 invert opacity-70"
            priority
          />
        </div>
      </div>

      {/* Chrome tabs row */}
      <div className="flex items-end px-2 h-[38px] gap-px overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={[
                'flex items-center gap-2 px-[18px] h-9 rounded-t-lg',
                'text-[13px] font-medium no-underline',
                'border border-b-0 transition-colors duration-200',
                'whitespace-nowrap flex-shrink-0',
                active
                  ? 'bg-bg text-white border-sep chrome-tab-active'
                  : 'bg-tab-off text-muted border-transparent hover:text-[#bbb] hover:bg-[#333]',
              ].join(' ')}
            >
              <span className="text-xs">{tab.favicon}</span>
              {tab.label}
              {active && <span className="ml-1 text-dim text-sm leading-none">×</span>}
            </Link>
          );
        })}
        <button className="text-dim text-xl h-9 px-2 flex items-center flex-shrink-0 hover:text-muted transition-colors">
          +
        </button>
      </div>
    </nav>
  );
}
