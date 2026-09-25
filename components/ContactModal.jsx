'use client';

import { useState, useEffect } from 'react';
import { useContactModal } from './ContactModalContext';
import { sendContactEmail } from '@/app/actions/contact';

const inputCls = [
  'w-full rounded-xl px-4 py-3.5 text-body text-base font-head font-medium outline-none',
  'border border-sep bg-white placeholder:text-muted placeholder:font-normal',
  'focus:border-body transition-colors duration-200',
].join(' ');

export default function ContactModal() {
  const { open, closeModal } = useContactModal();
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  /* reset form state when modal opens */
  useEffect(() => {
    if (open) setStatus('idle');
  }, [open]);

  /* close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeModal]);

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const result = await sendContactEmail(new FormData(e.target));
    if (result.success) {
      setStatus('success');
    } else {
      setErrorMsg(result.error || 'Something went wrong.');
      setStatus('error');
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,10,10,0.55)', backdropFilter: 'blur(6px)' }}
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-[520px] rounded-3xl border border-sep bg-bg p-8 sm:p-10"
        style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-sep flex items-center justify-center text-muted hover:bg-bg-alt transition-colors"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="flex flex-col items-center text-center py-8 gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
              style={{ background: 'rgba(212,242,106,0.2)', border: '1px solid #D4F26A' }}
            >
              ✓
            </div>
            <h3 className="font-head font-bold text-body text-2xl">Message sent!</h3>
            <p className="text-muted text-sm">I'll get back to you within 24 hours.</p>
            <button
              onClick={closeModal}
              className="mt-2 font-head font-medium text-sm text-muted hover:text-body transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-body border border-sep rounded-full px-4 py-1.5 mb-4 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                Available for new projects
              </span>
              <h2 className="font-head font-bold text-body tracking-[-0.02em]" style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)' }}>
                Let&apos;s work together
              </h2>
              <p className="text-muted text-sm mt-1.5">
                Tell me what you&apos;re building and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-head font-semibold text-sm text-body">Name</label>
                  <input name="name" type="text" required placeholder="Jane Smith" className={inputCls} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-head font-semibold text-sm text-body">Email</label>
                  <input name="email" type="email" required placeholder="jane@company.com" className={inputCls} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-head font-semibold text-sm text-body">What are you building?</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your project, the problem you want to solve, or what you need help with..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              {status === 'error' && (
                <p className="font-mono text-xs text-red-500">⚠ {errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-between rounded-full pl-6 pr-2 py-2 font-head font-medium text-white mt-1"
                style={{
                  background: '#0A0A0A',
                  opacity: status === 'loading' ? 0.7 : 1,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'loading' ? 'Sending...' : "Send message"}
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-body text-base flex-shrink-0"
                  style={{ background: '#D4F26A' }}
                >
                  →
                </span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
