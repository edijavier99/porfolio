/* ── Mini visual: WhatsApp → AI Agent → DB pipeline ── */
const FlowDiagram = () => (
  <div
    className="w-full rounded-3xl overflow-hidden border border-sep flex flex-col flex-1"
    style={{ background: '#1A1A1A' }}
  >
    {/* Header */}
    <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
        Automation Flow
      </span>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4F26A' }} />
        <span className="font-mono text-[9px]" style={{ color: '#D4F26A' }}>Live</span>
      </div>
    </div>

    <div className="flex-1 flex flex-col justify-center px-6 py-6 gap-0">
      {/* WhatsApp message bubble */}
      <div className="rounded-2xl rounded-tl-sm px-4 py-3 w-fit max-w-[85%]" style={{ background: '#25D366', marginBottom: 6 }}>
        <p className="font-mono text-[10px] leading-5" style={{ color: '#fff' }}>
          Worker report: Maria García<br />
          Shift: 09:00–17:00 ✓<br />
          Location: Zone 4 — completed
        </p>
        <p className="font-mono text-[9px] mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>WhatsApp · 09:03</p>
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-start pl-5 my-1" style={{ gap: 2 }}>
        <div className="w-px h-4" style={{ background: 'rgba(255,255,255,0.15)' }} />
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <polyline points="1,1 5,5 9,1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* LLM Agent step */}
      <div className="rounded-2xl px-4 py-3 border" style={{ background: 'rgba(212,242,106,0.08)', borderColor: 'rgba(212,242,106,0.25)', marginBottom: 6 }}>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: '#D4F26A' }}>
            <span style={{ fontSize: 8, color: '#0A0A0A', fontWeight: 700 }}>AI</span>
          </div>
          <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: '#D4F26A' }}>LLM Agent</span>
        </div>
        <p className="font-mono text-[10px] leading-5" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Extracting: worker id, shift hours,<br />location, status → validating...
        </p>
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-start pl-5 my-1" style={{ gap: 2 }}>
        <div className="w-px h-4" style={{ background: 'rgba(255,255,255,0.15)' }} />
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <polyline points="1,1 5,5 9,1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* DB update + report */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl px-3 py-2.5 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
          <span className="font-mono text-[9px] uppercase tracking-widest block mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>PostgreSQL</span>
          <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.7)' }}>Record updated ✓</span>
        </div>
        <div className="rounded-xl px-3 py-2.5 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
          <span className="font-mono text-[9px] uppercase tracking-widest block mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Report</span>
          <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.7)' }}>Auto-filled &lt;10s ✓</span>
        </div>
      </div>
    </div>
  </div>
);

export default function CaseStudySection() {
  return (
    <section id="case-study" className="px-6 py-20 md:px-12 lg:px-[64px] lg:py-24 bg-bg-alt">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-body border border-sep rounded-full px-4 py-2 mb-6 w-fit">
              <span className="w-1.5 h-1.5 bg-body" />
              Case Study
            </span>
            <h2
              className="font-head tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
            >
              <span className="font-bold text-body">Real</span>{' '}
              <span className="font-medium" style={{ color: '#6B7280' }}>problem, real results</span>
            </h2>
          </div>
          <p className="text-muted text-base max-w-[400px] lg:text-right leading-7">
            A cleaning company managing 800+ workers — everything done manually, on spreadsheets.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-sep overflow-hidden" style={{ background: '#FFFFFF' }}>
          <div className="flex flex-col lg:flex-row">

            {/* Left — diagram */}
            <div className="flex-shrink-0 lg:w-[420px] p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-sep flex flex-col" style={{ background: '#F5F5F3' }}>
              <FlowDiagram />
            </div>

            {/* Right — content */}
            <div className="flex-1 p-6 lg:p-10 flex flex-col justify-between gap-8">

              {/* Title + badge */}
              <div>
     
                <h3
                  className="font-head font-bold text-body tracking-[-0.01em] mb-3"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', lineHeight: 1.2 }}
                >
                  Cleaning Operations Platform
                </h3>
                <p className="text-muted text-base leading-7">
                  Reports, absences, shift hours, and worker contracts — all coming in through WhatsApp messages, all processed manually. With a team of 800+, the overhead was becoming the job.
                </p>
              </div>

              {/* 4 phases */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    label: 'Problem',
                    text: 'Every report, absence and shift — entered by hand, every day.',
                  },
                  {
                    label: 'Process',
                    text: 'Understand their real workflow and find where time was being lost.',
                  },
                  {
                    label: 'Solution',
                    text: 'Employees keep using WhatsApp. An AI understands each message and updates the records automatically.',
                  },
                  {
                    label: 'Results',
                    text: '40% less time on admin. The team now focuses on people, not paperwork.',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="w-px self-stretch bg-sep flex-shrink-0" />
                    <div>
                      <h4 className="font-head font-semibold text-body text-sm mb-1.5">{item.label}</h4>
                      <p className="text-muted text-sm leading-6">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Result stat */}
              <div className="flex justify-end pt-2 border-t border-sep">
                <div className="text-right">
                  <div
                    className="font-head font-bold text-body"
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1 }}
                  >
                    40<span style={{ color: '#D4F26A' }}>%</span>
                  </div>
                  <p className="font-mono text-[11px] text-muted mt-1">reduction in manual<br />operational tasks</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
