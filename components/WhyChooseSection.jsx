'use client';

import { useState } from 'react';

const reasons = [
  {
    key: 'no-agency',
    title: "You don't need a whole agency for this",
    description:
      "Agencies have layers — account managers, project managers, junior devs doing the actual work. With me you get one experienced person who owns the whole thing, at a fraction of the cost.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="#0A0A0A" strokeWidth="1.6" />
        <path d="M8 7V5a4 4 0 018 0v2" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="13" r="1.5" stroke="#0A0A0A" strokeWidth="1.4" />
        <path d="M12 14.5v1.5" stroke="#0A0A0A" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'language',
    title: "I speak your language, not just code",
    description:
      "No tech jargon. I translate what's happening into plain terms so you always know where things stand, what decisions need to be made, and why.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#0A0A0A" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 10h8M8 13h5" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'ai',
    title: "AI can save your team hours every week",
    description:
      "Most businesses already have the data and the processes — they're just doing them manually. I find where automation makes real sense for your business and build it properly.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#0A0A0A" strokeWidth="1.6" />
        <circle cx="9" cy="10" r="1.5" stroke="#0A0A0A" strokeWidth="1.4" />
        <circle cx="15" cy="10" r="1.5" stroke="#0A0A0A" strokeWidth="1.4" />
        <path d="M8.5 15c1 1.5 5.5 1.5 7 0" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'ghosted',
    title: "You'll never be ghosted mid-project",
    description:
      "Slow replies, missed deadlines, radio silence — I've heard it all from clients who worked with other devs. I keep communication tight, timelines honest, and updates frequent.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12 19.79 19.79 0 011.42 3.18 2 2 0 013.42 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#0A0A0A" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-20 md:px-12 lg:px-[64px] lg:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-body border border-sep rounded-full px-4 py-2 mb-6 w-fit">
            <span className="w-1.5 h-1.5 bg-body" />
            Why Choose
          </span>

          <h2
            className="font-head tracking-[-0.02em] mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
          >
            <span className="font-bold text-body">Why</span>{' '}
            <span className="font-medium" style={{ color: '#6B7280' }}>work with me</span>
          </h2>

          <p className="text-muted text-lg max-w-[560px]">
            What you actually get when you hire me — no fluff.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-4" style={{ minHeight: 340 }}>
          {reasons.map((reason, i) => {
            const isActive = active === i;
            return (
              <button
                key={reason.key}
                onClick={() => setActive(i)}
                className="relative text-left rounded-3xl border border-sep p-8 flex flex-col justify-between transition-all duration-500 ease-in-out overflow-hidden"
                style={{
                  flex: isActive ? '2.4 1 0%' : '1 1 0%',
                  background: isActive ? '#F1F1EF' : '#FFFFFF',
                  minHeight: 340,
                }}
              >
                {isActive && (
                  <svg
                    className="absolute inset-0 w-full h-full opacity-[0.35] pointer-events-none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern id={`grid-${reason.key}`} width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M48 0L0 0 0 48" fill="none" stroke="#D8D8D4" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${reason.key})`} />
                  </svg>
                )}

                <div className="relative z-10">{reason.icon}</div>

                <div className="relative z-10">
                  <h3
                    className="font-head font-semibold text-body tracking-[-0.01em] mb-3"
                    style={{ fontSize: '1.5rem', lineHeight: 1.2 }}
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="text-muted text-sm leading-6 transition-all duration-500 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: isActive ? 120 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
