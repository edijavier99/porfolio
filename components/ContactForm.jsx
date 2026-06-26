'use client';

import { useState } from 'react';
import { sendContactEmail } from '@/app/actions/contact';

const inputStyle = {
  width: '100%',
  background: '#0d0d0d',
  border: '1px solid #2a2a2a',
  borderRadius: 10,
  padding: '14px 18px',
  color: '#e5e5e5',
  fontSize: '0.95rem',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block',
  fontSize: 12,
  fontFamily: 'var(--font-jetbrains)',
  color: '#6b6b6b',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: 8,
};

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    const result = await sendContactEmail(formData);
    if (result.success) {
      setStatus('success');
    } else {
      setErrorMsg(result.error || 'Something went wrong.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div
          className="flex items-center justify-center mx-auto mb-6"
          style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', fontSize: 28 }}
        >
          ✓
        </div>
        <h3 className="font-head font-bold text-white mb-3" style={{ fontSize: '1.6rem' }}>
          Message received!
        </h3>
        <p style={{ color: '#6b6b6b', fontSize: '1rem', lineHeight: 1.75 }}>
          We&apos;ll review your project and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Your name *</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = '#4ade80')}
            onBlur={e  => (e.target.style.borderColor = '#2a2a2a')}
          />
        </div>
        <div>
          <label style={labelStyle}>Email address *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = '#4ade80')}
            onBlur={e  => (e.target.style.borderColor = '#2a2a2a')}
          />
        </div>
      </div>

      {/* Budget */}
      <div>
        <label style={labelStyle}>Budget range</label>
        <select
          name="budget"
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={e => (e.target.style.borderColor = '#4ade80')}
          onBlur={e  => (e.target.style.borderColor = '#2a2a2a')}
        >
          <option value="">Select a range...</option>
          <option value="Under £1,500">Under £1,500</option>
          <option value="£1,500 – £5,000">£1,500 – £5,000</option>
          <option value="£5,000 – £15,000">£5,000 – £15,000</option>
          <option value="£15,000+">£15,000+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Tell us about your project *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Describe what you want to build, what problem it solves, and any key features you need..."
          style={{ ...inputStyle, resize: 'vertical', minHeight: 140 }}
          onFocus={e => (e.target.style.borderColor = '#4ade80')}
          onBlur={e  => (e.target.style.borderColor = '#2a2a2a')}
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p style={{ color: '#f87171', fontSize: 13, fontFamily: 'var(--font-jetbrains)' }}>
          ⚠ {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary font-head justify-center"
        style={{ fontSize: 15, padding: '14px 32px', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
      >
        {status === 'loading' ? 'Sending...' : 'Send Enquiry →'}
      </button>

      <p style={{ fontSize: 12, color: '#3a3a3a', fontFamily: 'var(--font-jetbrains)' }}>
        We respond within 24 hours · No spam, ever
      </p>
    </form>
  );
}
