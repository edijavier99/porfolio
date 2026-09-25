import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { aboutValues } from '@/lib/data';

export const metadata = {
  title: 'About Us',
  description:
    "Kova is a software studio based in London. We partner with businesses to design, build, and grow their digital products. No jargon, no overcomplication. Just good work, delivered on time.",
  openGraph: {
    title: 'About Kova — Software Studio London',
    description: 'Meet the team behind Kova — a London-based software studio.',
    url: 'https://kova.co.uk/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <section className="px-6 pt-14 pb-12 md:px-12 md:pt-20 md:pb-16 lg:px-[88px] lg:pt-[80px] lg:pb-[72px] bg-bg border-b border-sep">
        <span className="font-mono block text-xs text-green tracking-[0.12em] mb-4">
          // about_us
        </span>
        <h1 className="page-h1 font-head font-bold text-body tracking-[-0.02em] mb-5">
          A team that builds software
          <br />
          <span className="bg-[linear-gradient(125deg,#4ade80_0%,#60a5fa_100%)] bg-clip-text text-transparent">
            you can actually rely on.
          </span>
        </h1>
        <p className="text-base text-muted leading-7 max-w-[560px]">
          We&apos;re Kova — a software studio based in London. We partner with
          businesses to design, build, and grow their digital products. No jargon,
          no overcomplication. Just good work, delivered on time.
        </p>
      </section>

      {/* ── Mission ────────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-[88px] lg:py-[100px] bg-bg border-t border-sep">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1564410267845-ae5acf1ce8d9?q=80&w=1200&auto=format&fit=crop"
              alt="Kova team working"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="font-mono block text-xs text-green tracking-[0.12em] mb-4">
              // our story
            </span>
            <h2 className="font-head font-bold text-body text-[1.8rem] leading-[1.2] mb-4">
              We started with a simple belief: businesses deserve better technology.
            </h2>
            <p className="text-muted text-base leading-[1.8]">
              Kova was born out of a clear observation — most businesses were struggling
              to adapt to a digital world that was moving faster than they could keep up.
              They needed a partner who could translate their goals into technology that
              actually worked for them, not against them.
            </p>
            <p className="text-muted text-base leading-[1.8] mt-4">
              So we built Kova: a software studio dedicated to creating digital
              products that are beautiful, reliable, and built to last. We&apos;ve worked
              with startups, established businesses, and everything in between —
              always with the same commitment to quality and transparency.
            </p>

          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-[88px] lg:py-[100px] bg-bg-alt border-t border-sep border-b border-sep">
        <div className="text-center mb-12">
          <span className="font-mono block text-xs text-green tracking-[0.12em] mb-3.5">
            // our_values
          </span>
          <h2 className="section-h2 font-head font-bold text-body tracking-[-0.02em] mb-3.5">
            What We Stand For
          </h2>
          <p className="text-muted text-base leading-7 max-w-[560px] mx-auto">
            These aren&apos;t just words on a wall. They&apos;re the principles that
            guide every decision we make — for our team and for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutValues.map((v) => (
            <div key={v.title} className="value-card rounded-[14px] text-center bg-card border border-sep px-6 py-8">
              <div className="flex items-center justify-center mx-auto w-16 h-16 bg-green/[0.07] rounded-full text-[28px] mb-5">
                {v.icon}
              </div>
              <div className="font-head font-bold text-body text-base mb-2.5">{v.title}</div>
              <p className="text-[0.88rem] text-muted leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── History ─────────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-[88px] lg:py-[100px] bg-bg border-t border-sep">
        <div className="text-center mb-12">
          <span className="font-mono block text-xs text-green tracking-[0.12em] mb-3.5">
            // our_history
          </span>
          <h2 className="section-h2 font-head font-bold text-body tracking-[-0.02em]">
            How It All Started
          </h2>
        </div>

        <p className="text-muted text-base leading-[1.85] max-w-[720px] mx-auto text-center">
          Our journey began with a simple observation: most businesses knew they needed
          to be better online, but didn&apos;t know where to start — or who to trust. We
          built Kova to change that. Starting with small local businesses and growing
          to serve clients across multiple countries, we&apos;ve stayed true to one principle:
          build things that actually work, and always be honest about what it takes to
          get there. Today, with 50+ projects shipped and a growing team of engineers
          and designers, we&apos;re more committed than ever to helping businesses thrive
          in the digital world.
        </p>

        <div className="flex justify-center flex-wrap gap-10 md:gap-16 mt-12">
          {[
            { num: '50+', label: 'Projects delivered' },
            { num: '5+',  label: 'Years of experience' },
            { num: '20+', label: 'Happy clients' },
            { num: '5+',  label: 'Countries served' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-head font-bold text-green text-[2rem]">{s.num}</div>
              <div className="text-muted text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="text-center px-6 py-16 md:px-12 md:py-20 lg:px-[88px] lg:py-[100px] bg-bg-alt border-t border-sep border-b border-sep">
        <span className="font-mono block text-xs text-green tracking-[0.12em] mb-3.5">
          // work_with_us
        </span>
        <h2 className="section-h2 font-head font-bold text-body tracking-[-0.02em] mb-3.5">
          Ready to build something?
        </h2>
        <p className="text-muted text-base leading-7 max-w-[560px] mx-auto mb-8">
          Let&apos;s talk about your project. A quick call is all it takes to
          figure out what you need and how we can help.
        </p>
        <Link href="/#faq" className="btn-primary font-head no-underline">
          Start a Conversation →
        </Link>
      </section>

      <Footer />
    </>
  );
}
