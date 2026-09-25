'use client';

import { useState } from 'react';

export default function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-[10px] overflow-hidden mb-2 border transition-colors duration-200 ${open ? 'border-sep-h' : 'border-sep'}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 font-body text-[0.93rem] font-medium cursor-pointer text-left transition-colors duration-200 border-none ${open ? 'bg-card-h text-body' : 'bg-card text-body'}`}
      >
        {q}
        <span
          className={`font-mono flex-shrink-0 leading-none text-green text-xl transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}
        >
          +
        </span>
      </button>

      <div className={`faq-answer${open ? ' open' : ''}`}>
        {a}
      </div>
    </div>
  );
}
