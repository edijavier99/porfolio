import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { susInitiatives } from '@/lib/data';

export const metadata = {
  title: 'Sustainability',
  description:
    "Kova is committed to sustainability — planting a tree for every client, running a paperless office, and supporting environmental causes.",
  openGraph: {
    title: 'Sustainability | Kova',
    description: 'How Kova is committed to protecting the planet — one project at a time.',
    url: 'https://kova.co.uk/sustainability',
  },
};

export default function SustainabilityPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <section className="px-6 pt-14 pb-12 md:px-12 md:pt-20 md:pb-16 lg:px-[88px] lg:pt-[80px] lg:pb-[72px] bg-bg border-b border-sep">
        <span className="font-mono block text-xs text-green tracking-[0.12em] mb-4">
          // sustainability
        </span>
        <h1 className="page-h1 font-head font-bold text-white tracking-[-0.02em] mb-5">
          Building software.
          <br />
          <span className="bg-[linear-gradient(125deg,#4ade80_0%,#60a5fa_100%)] bg-clip-text text-transparent">
            Protecting the planet.
          </span>
        </h1>
        <p className="text-base text-muted leading-7 max-w-[560px]">
          Every project we take on is an opportunity to do something good — not just
          for our clients, but for the world we all share. Here&apos;s how we make
          sustainability a real part of how we work.
        </p>
      </section>

      {/* ── Feature 1: Real Impact ──────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-[88px] lg:py-[100px] bg-bg border-t border-sep">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden h-[340px]">
            <Image
              src="/images/sus1.png"
              alt="Green forest"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="font-mono block uppercase text-[11px] text-[#16a34a] tracking-[0.12em] mb-3">
              // impact
            </span>
            <h2 className="font-head font-bold text-white text-[1.8rem] leading-[1.2] mb-4">
              Our work has a real impact on the environment.
            </h2>
            <p className="text-muted text-base leading-[1.8]">
              Sustainability isn&apos;t a side project for us — it&apos;s baked into how we operate.
              In a world where natural resources are finite, we believe every business
              has a responsibility to act. We&apos;ve committed to making our footprint as
              small as possible while actively contributing to a healthier planet.
            </p>
            <p className="text-muted text-base leading-[1.8] mt-4">
              From reforestation to reducing our own energy use, we look at every
              part of our business through an environmental lens — and we&apos;re always
              looking for ways to do more.
            </p>
          </div>
        </div>
      </section>

      {/* ── Feature 2: One Tree Per Client ─────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-[88px] lg:py-[100px] bg-bg-alt border-t border-sep border-b border-sep">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="font-mono block uppercase text-[11px] text-[#16a34a] tracking-[0.12em] mb-3">
              // our pledge
            </span>
            <h2 className="font-head font-bold text-white text-[1.8rem] leading-[1.2] mb-4">
              One client. One tree. Every time.
            </h2>
            <p className="text-muted text-base leading-[1.8]">
              For every client we work with, we plant a tree. It&apos;s a simple idea, but
              the impact adds up. Over time, these trees help restore ecosystems, absorb
              carbon, support biodiversity, and contribute to a greener planet for
              future generations.
            </p>
            <p className="text-muted text-base leading-[1.8] mt-4">
              This initiative reflects our belief that doing good business and doing
              good in the world aren&apos;t mutually exclusive — they go hand in hand.
              When you work with us, you&apos;re also planting a piece of the future.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[340px]">
            <Image
              src="https://images.unsplash.com/photo-1625758475456-1f26727c0f99?w=800&auto=format&fit=crop&q=60"
              alt="Tree planting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Impact Stats ────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-[88px] lg:py-[100px] bg-bg border-t border-sep">
        <div className="text-center mb-12">
          <span className="font-mono block text-xs text-green tracking-[0.12em] mb-3.5">
            // impact_by_numbers
          </span>
          <h2 className="section-h2 font-head font-bold text-white tracking-[-0.02em] mb-3.5">
            Small actions, big results.
          </h2>
          <p className="text-muted text-base leading-7 max-w-[560px] mx-auto">
            Every project is a step forward — for our clients and for the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { num: '20+',  label: 'Trees planted so far' },
            { num: '100%', label: 'Remote-first operations' },
            { num: '0',    label: 'Paper used in our office' },
          ].map((s) => (
            <div key={s.label} className="sus-stat-card rounded-[14px] text-center bg-card border border-sep px-6 py-8">
              <div className="font-head font-bold text-green text-[2.2rem] mb-2">{s.num}</div>
              <div className="text-muted text-[0.9rem]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Additional Initiatives ──────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-[88px] lg:py-[100px] bg-bg-alt border-t border-sep border-b border-sep">
        <div className="text-center mb-12">
          <span className="font-mono block text-xs text-green tracking-[0.12em] mb-3.5">
            // initiatives
          </span>
          <h2 className="section-h2 font-head font-bold text-white tracking-[-0.02em] mb-3.5">
            More Ways We Give Back
          </h2>
          <p className="text-muted text-base leading-7 max-w-[560px] mx-auto">
            Planting trees is just the beginning. Here&apos;s how we embed
            sustainability into every corner of how we work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {susInitiatives.map((item) => (
            <div key={item.title} className="sus-initiative flex gap-4 items-start rounded-xl bg-card border border-sep p-6">
              <div className="flex items-center justify-center flex-shrink-0 w-11 h-11 bg-green/[0.07] rounded-[10px] text-[22px]">
                {item.icon}
              </div>
              <div>
                <div className="font-head font-bold text-white text-[0.95rem] mb-1.5">{item.title}</div>
                <p className="text-[0.87rem] text-muted leading-[1.65]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pledge / CTA ────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-[88px] lg:py-[100px] bg-bg border-t border-sep">
        <div className="text-center mx-auto max-w-[680px]">
          <div className="relative mx-auto rounded-2xl overflow-hidden w-full max-w-[480px] h-[260px] mb-9">
            <Image
              src="/images/sus3.png"
              alt="Kova sustainability commitment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
          <span className="font-mono block text-xs text-green tracking-[0.12em] mb-3.5">
            // our commitment
          </span>
          <h2 className="section-h2 font-head font-bold text-white mb-4">
            Committed to continuous improvement.
          </h2>
          <p className="text-muted text-base leading-[1.8] mb-7">
            Sustainability is a journey, not a destination. We review our practices
            regularly, look for better alternatives, and hold ourselves accountable
            to the standards we&apos;ve set. We believe that the most sustainable software
            studio is one that never stops asking: how can we do better?
          </p>
          <Link href="/#faq" className="btn-primary font-head no-underline">
            Work With a Studio That Cares →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
