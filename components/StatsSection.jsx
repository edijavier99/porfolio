'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

function useCountUp(target, duration = 1200, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ num, suffix, label, started, delay }) {
  const [go, setGo] = useState(false);
  const count = useCountUp(num, 1000, go);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  return (
    <div className="flex items-center gap-6 sm:gap-8">
      <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
        <span
          className="font-head font-bold text-body"
          style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1 }}
        >
          {count}{suffix}
        </span>
        <p className="text-muted text-sm whitespace-nowrap md:whitespace-normal">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { num: 10, suffix: '+', label: 'Projects shipped' },
    { num: 7,  suffix: '+', label: 'Happy clients' },
    { num: 4,  suffix: '+', label: 'Years experience' },
  ];

  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-20 md:px-12 lg:px-[64px] lg:py-24 bg-bg-alt">
      <div className="max-w-[1400px] mx-auto">
        <h2
          className="font-head font-bold tracking-[-0.02em] max-w-[1000px] mx-auto text-center mb-16"
          style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', lineHeight: 1.25, color: '#0A0A0A' }}
        >
          Most businesses don&apos;t need more tools.{' '}
          <span style={{ color: '#6B7280' }}>They need the right ones, built well, fast, and tailored to their specific problems.</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div
            className="relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ width: 280, height: 180 }}
          >
            <Image
              src="/images/portrait05.png"
              alt="Edi Javier"
              fill
              className="object-cover"
            />
          </div>

          {/* Stats */}
          <div ref={ref} className="flex flex-col sm:flex-row flex-1 items-start justify-center lg:justify-end gap-8 sm:gap-16">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-6 sm:gap-8">
                <StatItem {...s} started={started} delay={i * 120} />
                {i < stats.length - 1 && (
                  <span className="hidden sm:block w-px self-stretch bg-sep" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
