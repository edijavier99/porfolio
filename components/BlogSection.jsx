'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


const posts = [
  {
    id: 'nextjs-vs-remix-2025',
    category: 'Software Engineering',
    date: 'August 28, 2025',
    title: 'Next.js vs Remix in 2025: Which One Should You Actually Pick',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80',
    bg: '#1A1A2E',
  },
  {
    id: 'ai-agents-for-smb',
    category: 'AI & Automation',
    date: 'August 20, 2025',
    title: 'Boost Your Business with AI Agents Built for Small Teams',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    bg: '#0D1117',
  },
]



const CARD_WIDTH = 400;
const GAP = 24;

const BlogCard = ({ post }) => (
  <Link
    href={`/blog/${post.id}`}
    className="flex-shrink-0 no-underline block"
    style={{ width: CARD_WIDTH }}
  >
    <div
      className="relative rounded-2xl overflow-hidden mb-5"
      style={{ aspectRatio: '4 / 3', background: post.bg }}
    >
      <Image src={post.image} alt={post.title} fill className="object-cover" />
    </div>

    <div className="flex items-center justify-between gap-4 mb-3">
      <span className="text-muted text-sm">{post.category}</span>
      <span className="text-muted text-sm whitespace-nowrap">{post.date}</span>
    </div>

    <h3 className="font-head font-bold text-body text-2xl leading-snug">
      {post.title}
    </h3>
  </Link>
);

export default function BlogSection() {
  const [index, setIndex] = useState(0);
  const maxIndex = posts.length - 1;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const offset = index * (CARD_WIDTH + GAP);

  return (
    <section className="px-6 py-20 md:px-12 lg:px-[64px] lg:py-24 bg-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-body border border-sep rounded-full px-4 py-2 mb-6 w-fit">
              <span className="w-1.5 h-1.5 bg-body" />
              Blog & Article
            </span>

            <h2
              className="font-head tracking-[-0.02em] mb-5"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
            >
              <span className="font-bold text-body">Resources &</span>{' '}
              <span className="font-medium" style={{ color: '#6B7280' }}>Guides</span>
            </h2>

            <p className="text-muted text-lg max-w-[560px]">
              Discover expert tips and step-by-step guides to help you learn,
              grow, and build with confidence.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border border-sep flex items-center justify-center transition-colors hover:bg-bg-alt disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              aria-label="Next"
              className="w-12 h-12 rounded-full border border-sep flex items-center justify-center transition-colors hover:bg-bg-alt disabled:opacity-30 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel viewport: shows ~2 full cards + peek of the 3rd */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: GAP,
              transform: `translateX(-${offset}px)`,
            }}
          >
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="flex lg:hidden items-center gap-3 mt-8">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            className="w-12 h-12 rounded-full border border-sep flex items-center justify-center disabled:opacity-30"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={index === maxIndex}
            aria-label="Next"
            className="w-12 h-12 rounded-full border border-sep flex items-center justify-center disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}