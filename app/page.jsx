import Link from 'next/link';
import Footer from '@/components/Footer';
import TerminalWindow from '@/components/TerminalWindow';
import ProjectCarousel from '@/components/ProjectCarousel';
import FAQItem from '@/components/FAQItem';
import ContactForm from '@/components/ContactForm';
import { services, whyUsItems, projects, faqItems } from '@/lib/data';

export const metadata = {
  title: 'Kova — Software Studio London',
  description:
    'We build websites, web apps and custom software that help businesses grow. London-based, delivering globally in 1–3 months.',
  openGraph: {
    title: 'Kova — Software Studio London',
    description: 'We build websites, web apps and custom software that help businesses grow.',
    url: 'https://kova.co.uk',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kova',
  url: 'https://kova.co.uk',
  description: 'Software studio based in London building websites, web apps and custom software.',
  address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
};

const S = ({ id, className = '', children }) => (
  <section
    id={id}
    className={`px-6 py-16 md:px-12 md:py-20 lg:px-[88px] lg:py-[100px] ${className}`}
  >
    {children}
  </section>
);

const SectionHeader = ({ tag, h2, desc, center }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <span className={`font-mono block text-xs text-green tracking-[0.12em] mb-3.5 ${center ? 'text-center' : ''}`}>
      {tag}
    </span>
    <h2 className={`section-h2 font-head font-bold text-white tracking-[-0.02em] mb-3.5 ${center ? 'text-center' : ''}`}>
      {h2}
    </h2>
    {desc && (
      <p className={`text-muted text-base leading-7 max-w-[560px] ${center ? 'mx-auto' : ''}`}>
        {desc}
      </p>
    )}
  </div>
);

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col lg:flex-row items-center px-6 py-14 md:px-12 md:py-20 lg:px-[88px] gap-12 lg:gap-16"
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #2e2e2e 1px, transparent 1px)', backgroundSize: '36px 36px', opacity: 0.45 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, #0d0d0d 90%)' }} />

        {/* Left */}
        <div className="flex-1 relative z-10 w-full">
          <div className="inline-flex items-center gap-2 font-mono mb-6 bg-green/[0.07] border border-green/[0.18] rounded-3xl px-3.5 py-1.5 text-xs text-green">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
            Now taking new projects
          </div>

          <h1 className="hero-h1 font-head font-bold text-white tracking-[-0.02em] mb-5">
            We build digital products
            <br />
            <span className="bg-[linear-gradient(125deg,#4ade80_0%,#60a5fa_100%)] bg-clip-text text-transparent">
              that grow your business.
            </span>
          </h1>

          <p className="text-muted text-base leading-7 max-w-[490px] mb-8">
            From a simple website to a full software platform — we design, build,
            and launch digital products that look great, work perfectly, and deliver
            real results for your business.
          </p>

          <div className="flex gap-3 flex-wrap mb-11">
            <Link href="#contact" className="btn-primary font-head">Start a Project →</Link>
            <Link href="#services" className="btn-ghost font-head">Our Services</Link>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { num: '50+', label: 'Projects delivered' },
              { num: '5+',  label: 'Years of experience' },
              { num: '20+', label: 'Happy clients' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-head font-bold text-white text-[1.8rem] leading-none mb-1">{s.num}</div>
                <div className="font-mono text-[11px] text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — terminal */}
        <div className="flex-1 flex justify-center relative z-10 w-full">
          <TerminalWindow />
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <S className="bg-bg border-t border-sep" id="services">
        <SectionHeader tag="// services" h2="What We Build For You" desc="From a professional website to complex business software — we handle everything, so you can focus on running your business." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {services.map((s) => (
            <div key={s.title} className="service-card rounded-[14px] bg-card border border-sep p-7">
              <div className="flex items-center gap-3 mb-[18px]">
                <div
                  className="flex items-center justify-center flex-shrink-0 w-11 h-11 rounded-[10px] text-xl"
                  style={{ background: s.iconBg }}
                >
                  {s.icon}
                </div>
                <span className="font-mono text-[11px] tracking-[0.04em]" style={{ color: s.tagColor }}>
                  {s.tag}
                </span>
              </div>
              <h3 className="font-head font-semibold text-white text-[1.1rem] mb-2.5">
                {s.title}
              </h3>
              <p className="text-muted text-[0.88rem] leading-[1.68] mb-5">
                {s.desc}
              </p>
              <ul className="flex flex-col gap-[9px] list-none p-0 m-0">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-[9px] text-[13px]" style={{ color: '#555' }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.dotColor }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </S>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <S className="bg-bg border-t border-sep">
        <SectionHeader tag="// how_it_works" h2="From Idea to Live Product" desc="A simple, transparent process — so you always know what's happening and what comes next." center />
        <div className="relative">
          <div className="absolute hidden lg:block top-9 left-[12.5%] right-[12.5%] h-px" style={{ background: 'linear-gradient(to right, transparent, #2a2a2a 15%, #2a2a2a 85%, transparent)' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Free Discovery Call', desc: 'Tell us about your project. We ask the right questions to understand your goals, timeline, and budget — no obligation.' },
              { num: '02', title: 'Plan & Design', desc: 'We map out the full scope, design the product, and share a clear timeline before a single line of code is written.' },
              { num: '03', title: 'Build & Test', desc: 'We build in sprints and share updates weekly. You see progress constantly — no black boxes, no surprises.' },
              { num: '04', title: 'Launch & Support', desc: 'You go live with everything handed over — code, accounts, docs. We stay available for support and what comes next.' },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center relative">
                <div className="flex items-center justify-center w-18 h-18 rounded-full bg-card border border-sep mb-6 relative z-10">
                  <span className="font-mono font-bold text-[1.1rem] text-green">{step.num}</span>
                </div>
                <h3 className="font-head font-bold text-white text-[1.05rem] mb-3">{step.title}</h3>
                <p className="text-muted text-[0.88rem] leading-[1.72]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </S>

      {/* ── Why Us ───────────────────────────────────────────────────────── */}
      <S className="bg-bg-alt border-t border-sep border-b border-sep">
        <SectionHeader tag="// why_us" h2="Why Businesses Choose Us" desc="We don't just build products — we become your technology partner. Here's what makes working with us different." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whyUsItems.map((item) => (
            <div key={item.num} className="why-card rounded-[14px] bg-card border border-sep p-7">
              <div className="font-mono font-bold text-[2.4rem] leading-none mb-3.5" style={{ color: item.color }}>
                {item.num}
              </div>
              <div className="font-head font-semibold text-white text-[1.05rem] mb-2.5">
                {item.title}
              </div>
              <p className="text-muted text-[0.88rem] leading-[1.7]">{item.desc}</p>
            </div>
          ))}
        </div>
      </S>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <S className="bg-bg-alt border-t border-sep">
        <SectionHeader tag="// our_work" h2="Projects We're Proud Of" desc="Websites, platforms, and software systems — built for real businesses with real results. Browse through our work below." />
        <ProjectCarousel projects={projects} />
      </S>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <S id="faq" className="bg-bg-alt border-t border-sep">
        <SectionHeader tag="// faq" h2="Common Questions" desc="Everything you need to know before getting started." center />
        <div className="max-w-[720px] mx-auto">
          {faqItems.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </S>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <S id="contact" className="bg-bg border-t border-sep">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="font-mono block text-xs text-green tracking-[0.12em] mb-3.5">
              // start_a_project
            </span>
            <h2 className="section-h2 font-head font-bold text-white tracking-[-0.02em] mb-3.5">
              Let&apos;s build something great together.
            </h2>
            <p className="text-muted text-base leading-7 mb-9">
              Tell us about your project and we&apos;ll get back to you within 24 hours
              with a clear plan and honest quote — no pressure, no obligation.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: '⚡', text: 'Response within 24 hours' },
                { icon: '💬', text: 'Free discovery call included' },
                { icon: '📋', text: 'Clear quote, no hidden fees' },
                { icon: '🔒', text: 'Your idea stays confidential' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-[18px]">{item.icon}</span>
                  <span className="text-muted text-[0.9rem]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6 md:p-8 bg-card border border-sep">
            <ContactForm />
          </div>
        </div>
      </S>

      <Footer />
    </>
  );
}
