'use client';

import { useState } from 'react';
import { useContactModal } from './ContactModalContext';
import Link from 'next/link';

/* ── Software Engineering: stack architecture diagram ── */
const MiniSWE = () => (
  <div
    className="w-full rounded-3xl overflow-hidden border border-sep flex flex-col"
    style={{ height: 320, background: '#FAFAF8' }}
  >
    <div className="flex items-center gap-2 px-4 py-3 border-b border-sep flex-shrink-0" style={{ background: '#F0EFEC' }}>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full" style={{ background: '#E5E5E5' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: '#E5E5E5' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: '#D4F26A' }} />
      </div>
      <span className="font-mono text-[9px] tracking-widest text-muted uppercase ml-2">Stack Architecture</span>
    </div>

    <div className="flex-1 flex flex-col justify-center px-6 py-5 gap-0">
      {[
        { label: 'Frontend',       detail: 'React / Next.js',    bg: '#D4F26A', fg: '#0A0A0A' },
        { label: 'API Layer',      detail: 'REST / GraphQL',      bg: '#0A0A0A', fg: '#FFFFFF' },
        { label: 'Business Logic', detail: 'Services & Workers',  bg: '#EBEBEA', fg: '#3A3A3A' },
        { label: 'Database',       detail: 'PostgreSQL / Redis',  bg: '#6B7280', fg: '#FFFFFF' },
      ].map((layer, i, arr) => (
        <div key={i}>
          <div
            className="rounded-xl px-4 py-3.5 flex items-center justify-between"
            style={{ background: layer.bg }}
          >
            <span className="font-head font-semibold text-sm" style={{ color: layer.fg }}>{layer.label}</span>
            <span className="font-mono text-[10px]" style={{ color: layer.fg, opacity: 0.55 }}>{layer.detail}</span>
          </div>
          {i < arr.length - 1 && (
            <div className="flex justify-center" style={{ height: 14 }}>
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                <line x1="5" y1="0" x2="5" y2="10" stroke="#D1D0CC" strokeWidth="1.5" />
                <polyline points="2,7 5,11 8,7" fill="none" stroke="#D1D0CC" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

/* ── AI Solutions: live metrics dashboard ── */
const MiniAI = () => {
  const bars = [55, 72, 48, 88, 65, 91, 70];
  return (
    <div
      className="w-full rounded-3xl overflow-hidden border border-sep flex flex-col"
      style={{ height: 320, background: '#FAFAF8' }}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-sep flex-shrink-0" style={{ background: '#F0EFEC' }}>
        <span className="font-mono text-[9px] tracking-widest text-muted uppercase">AI Dashboard</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#16a34a' }} />
          <span className="font-mono text-[9px]" style={{ color: '#16a34a' }}>Active</span>
        </div>
      </div>

      {/* KPI row */}
      <div className="flex border-b border-sep flex-shrink-0">
        {[
          { label: 'Accuracy', val: '94.2%' },
          { label: 'Latency',  val: '142ms'  },
          { label: 'Uptime',   val: '99.9%'  },
        ].map((m, i) => (
          <div key={i} className="flex-1 py-3 text-center border-r border-sep last:border-r-0">
            <div className="font-head font-bold text-sm text-body">{m.val}</div>
            <div className="font-mono text-[9px] text-muted mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="flex-1 px-5 pt-4 pb-5 flex flex-col justify-end">
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase mb-3">Model output / week</span>
        <div className="flex items-end gap-1.5" style={{ height: 100 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all"
              style={{
                height: `${h}%`,
                background: i === 5 ? '#D4F26A' : '#E5E4E0',
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: '#D4F26A' }} />
            <span className="font-mono text-[9px] text-muted">Peak</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: '#E5E4E0' }} />
            <span className="font-mono text-[9px] text-muted">Avg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── LLM Integration: RAG pipeline ── */
const MiniLLM = () => (
  <div
    className="w-full rounded-3xl overflow-hidden border border-sep flex flex-col"
    style={{ height: 380, background: '#FAFAF8' }}
  >
    <div className="flex items-center gap-2 px-4 py-3 border-b border-sep flex-shrink-0" style={{ background: '#F0EFEC' }}>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full" style={{ background: '#E5E5E5' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: '#E5E5E5' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: '#D4F26A' }} />
      </div>
      <span className="font-mono text-[9px] tracking-widest text-muted uppercase ml-2">RAG Pipeline</span>
    </div>

    {/* Query input */}
    <div className="px-5 pt-4 pb-3 border-b border-sep flex-shrink-0">
      <div className="rounded-xl px-3 py-2.5 flex items-center gap-2.5 border border-sep" style={{ background: '#F0EFEC' }}>
        <span className="font-mono text-[10px] text-muted flex-1 truncate">How does our refund policy work?</span>
        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#D4F26A' }}>
          <span style={{ fontSize: 9, color: '#0A0A0A' }}>→</span>
        </div>
      </div>
    </div>

    {/* Pipeline steps */}
    <div className="flex-1 flex flex-col justify-center px-5 py-3 gap-0">
      {[
        { label: 'Your Documents',  sub: 'PDFs, Notion, DB',  bg: '#EBEBEA', fg: '#3A3A3A' },
        { label: 'Vector Search',   sub: 'Semantic retrieval', bg: '#0A0A0A', fg: '#FFFFFF' },
        { label: 'LLM Processing',  sub: 'GPT-4 / Claude',    bg: '#D4F26A', fg: '#0A0A0A' },
      ].map((step, i, arr) => (
        <div key={i}>
          <div className="rounded-xl px-4 py-3 flex items-center justify-between" style={{ background: step.bg }}>
            <span className="font-head font-semibold text-sm" style={{ color: step.fg }}>{step.label}</span>
            <span className="font-mono text-[10px]" style={{ color: step.fg, opacity: 0.55 }}>{step.sub}</span>
          </div>
          {i < arr.length - 1 && (
            <div className="flex justify-center" style={{ height: 14 }}>
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                <line x1="5" y1="0" x2="5" y2="10" stroke="#D1D0CC" strokeWidth="1.5" />
                <polyline points="2,7 5,11 8,7" fill="none" stroke="#D1D0CC" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}

      {/* Output bubble */}
      <div className="mt-3 rounded-xl px-4 py-2.5 border border-sep" style={{ background: '#FAFAF8' }}>
        <span className="font-mono text-[9px] text-muted uppercase tracking-widest block mb-1">Response</span>
        <span className="font-mono text-[10px] text-body">&ldquo;Our 30-day refund policy covers...&rdquo;</span>
      </div>
    </div>
  </div>
);

/* ── AI Agents for SMBs: automation workflow ── */
const MiniAgents = () => (
  <div
    className="w-full rounded-3xl overflow-hidden border border-sep flex flex-col"
    style={{ height: 380, background: '#FAFAF8' }}
  >
    <div className="flex items-center justify-between px-4 py-3 border-b border-sep flex-shrink-0" style={{ background: '#F0EFEC' }}>
      <span className="font-mono text-[9px] tracking-widest text-muted uppercase">Automation Agent</span>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#16a34a' }} />
        <span className="font-mono text-[9px]" style={{ color: '#16a34a' }}>Running</span>
      </div>
    </div>

    {/* Trigger */}
    <div className="px-5 pt-4 pb-3 border-b border-sep flex-shrink-0">
      <div className="rounded-xl px-3 py-2.5 border border-sep flex items-center gap-3" style={{ background: '#F0EFEC' }}>
        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#D4F26A' }}>
          <span style={{ fontSize: 9, color: '#0A0A0A', fontWeight: 700 }}>!</span>
        </div>
        <div>
          <span className="font-mono text-[9px] text-muted uppercase tracking-wider block">Trigger</span>
          <span className="font-head font-semibold text-xs text-body">New lead received</span>
        </div>
      </div>
    </div>

    {/* Steps */}
    <div className="flex-1 px-5 py-4 flex flex-col gap-2">
      {[
        { label: 'Qualify lead with AI',     done: true,  color: '#2563eb' },
        { label: 'Draft personalised reply',  done: true,  color: '#7c3aed' },
        { label: 'Update CRM record',         done: true,  color: '#16a34a' },
        { label: 'Book intro call',           done: false, color: '#d97706' },
      ].map((step, i) => (
        <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2.5 border border-sep" style={{ background: '#FAFAF8' }}>
          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: step.done ? step.color : '#E5E5E5' }}>
            <span style={{ color: step.done ? '#fff' : '#9CA3AF', fontSize: 8, fontWeight: 700 }}>
              {step.done ? '✓' : '·'}
            </span>
          </div>
          <span className="font-mono text-[10px] flex-1" style={{ color: step.done ? '#0A0A0A' : '#9CA3AF' }}>
            {step.label}
          </span>
          {step.done && (
            <span className="font-mono text-[9px]" style={{ color: '#16a34a' }}>done</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const services = [
  {
    key: 'swe',
    title: 'SOFTWARE ENGINEERING',
    description: 'I build robust, scalable web applications and backend systems tailored to your business needs, from architecture to deployment.',
    bullets: ['Full-stack web development', 'API design & system architecture'],
    visual: <MiniSWE />,
  },
  {
    key: 'ai',
    title: 'AI SOLUTIONS',
    description: 'I design and integrate AI-powered features that automate workflows and unlock new capabilities inside your product.',
    bullets: ['Custom AI feature integration', 'Data pipelines & model deployment'],
    visual: <MiniAI />,
  },
  {
    key: 'llms',
    title: 'LLM INTEGRATION',
    description: 'I connect large language models to your systems to power chat, search, and content tools that actually understand your data.',
    bullets: ['RAG & knowledge-base integration', 'Prompt engineering & fine-tuning'],
    visual: <MiniLLM />,
  },
  {
    key: 'agents',
    title: 'AI AGENTS FOR SMBs',
    description: 'I build practical AI agents that handle repetitive tasks for small and medium businesses, so your team can focus on what matters.',
    bullets: ['Task automation agents', 'Customer support & ops assistants'],
    visual: <MiniAgents />,
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(-1);
  const { openModal } = useContactModal();

  return (
    <section id="services" className="px-6 py-20 md:px-12 lg:px-[64px] lg:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-body border border-sep rounded-full px-4 py-2 mb-6 w-fit">
              <span className="w-1.5 h-1.5 bg-body" />
              Service
            </span>

            <h2
              className="font-head tracking-[-0.02em] mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
            >
              <span className="font-bold text-body">My</span>{' '}
              <span className="font-medium" style={{ color: '#6B7280' }}>Services</span>
            </h2>

            <p className="text-muted text-lg max-w-[480px]">
              What Problems We Solve
            </p>
          </div>

          <button
            onClick={openModal}
            className="inline-flex items-center gap-4 rounded-full pl-6 pr-2 py-2 w-fit font-head font-medium flex-shrink-0"
            style={{ background: '#0A0A0A', color: '#FFFFFF' }}
          >
            View My Service
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#0A0A0A] text-base">
              →
            </span>
          </button>
        </div>

        {/* Accordion */}
        <div className="border-t border-sep" style={{ overflowAnchor: 'none' }}>
          {services.map((service, i) => {
            const isActive = active === i;
            return (
              <div key={service.key} className="border-b border-sep">
                <button
                  onClick={() => setActive(isActive ? -1 : i)}
                  className="w-full flex items-center justify-between py-8 text-left"
                >
                  <h3
                    className="font-head font-bold tracking-[-0.01em] transition-colors"
                    style={{
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                      color: isActive ? '#0A0A0A' : '#0A0A0A',
                      opacity: isActive ? 1 : 0.85,
                    }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-sep transition-transform duration-300"
                    style={{ transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid transition-all duration-500 ease-in-out"
                  style={{
                    gridTemplateRows: isActive ? '1fr' : '0fr',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-10">
                      <div className="max-w-[480px]">
                        <p className="text-muted text-base leading-7 mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-body text-base">
                              <span className="w-1.5 h-1.5 rounded-full bg-body mt-2.5 flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex-shrink-0 w-full lg:w-[380px]">
                        {service.visual}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}