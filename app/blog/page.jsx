'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/posts';

const sections = [
  {
    key: 'all',
    label: 'All',
    description: null,
  },
  {
    key: 'dev',
    label: 'Dev',
    description: 'Deep dives into software engineering — frameworks, architecture, and the tools I use to build.',
  },
  {
    key: 'founders',
    label: 'Business & Founders',
    description: "Lessons from working with founders, business owners, and early-stage teams — product decisions, growth, and what actually works.",
  },
];

const BlogPostCard = ({ post }) => (
  <Link href={`/blog/${post.id}`} className="block no-underline group">
    <div
      className="relative rounded-2xl overflow-hidden mb-5"
      style={{ aspectRatio: '4 / 3', background: post.bg }}
    >
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex items-center justify-between gap-4 mb-3">
      <span className="text-muted text-sm">{post.category}</span>
      <span className="text-muted text-sm whitespace-nowrap">{post.date}</span>
    </div>

    <h2 className="font-head font-bold text-body text-2xl leading-snug mb-2">
      {post.title}
    </h2>

    <p className="text-muted text-sm leading-6">{post.excerpt}</p>
  </Link>
);

export default function BlogPage() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? posts : posts.filter((p) => p.section === active);
  const activeSection = sections.find((s) => s.key === active);

  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="px-6 pt-10 pb-12 md:px-12 lg:px-[64px] lg:pt-14 lg:pb-16">
        <div className="max-w-[1400px] mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted mb-10">
            <Link href="/" className="no-underline hover:text-body">Home</Link>
            <span>›</span>
            <span className="text-body">Blog</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h1
              className="font-head tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1 }}
            >
              <span className="font-bold text-body">Thoughts on</span>{' '}
              <span className="font-medium" style={{ color: '#6B7280' }}>Code</span>
              <br />
              <span className="font-medium" style={{ color: '#6B7280' }}>&amp; Building.</span>
            </h1>

            <p className="text-muted text-lg leading-7 max-w-[420px]">
              Software engineering, AI, and lessons from working with founders and early-stage teams.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 md:px-12 lg:px-[64px] border-b border-sep">
        <div className="max-w-[1400px] mx-auto flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className="font-head font-medium text-sm px-5 py-4 transition-colors relative flex-shrink-0"
              style={{ color: active === s.key ? '#0A0A0A' : '#6B7280' }}
            >
              {s.label}
              {active === s.key && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: '#0A0A0A' }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Section description */}
      {activeSection?.description && (
        <section className="px-6 md:px-12 lg:px-[64px] pt-10 pb-2">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-muted text-base leading-7 max-w-[560px]">
              {activeSection.description}
            </p>
          </div>
        </section>
      )}

      {/* Post grid */}
      <section className="px-6 py-14 md:px-12 lg:px-[64px] lg:pb-28">
        <div className="max-w-[1400px] mx-auto">
          {filtered.length === 0 ? (
            <p className="text-muted text-base">No posts yet in this section. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {filtered.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
