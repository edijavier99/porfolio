

import Link from 'next/link';
import Image from 'next/image';

const post = {
  "id": "nextjs-vs-remix-2025",
  "category": "Software Engineering",
  "date": "August 28, 2025",
  "readTime": "6 min read",
  "author": {
    "name": "Edi Javier",
    "role": "Software Engineer",
    "avatar": "/images/portrait.jpg"
  },
  "title": "Next.js vs Remix in 2025: Which One Should You Actually Pick",
  "excerpt": "A practical comparison based on real project experience, not just benchmarks.",
  "coverImage": "/images/blog/nextjs-remix.jpg",
  "bg": "#B8876B",
  "content": [
    {
      "type": "paragraph",
      "text": "Every few months a new post claims to have finally settled the Next.js vs Remix debate. Most of them compare benchmarks nobody's app will ever hit. After shipping production apps in both, here's what actually matters when you're picking one for a real project."
    },
    {
      "type": "heading",
      "text": "Where Next.js wins"
    },
    {
      "type": "paragraph",
      "text": "If your app leans heavily on static generation, image optimization, or you're deploying to Vercel, Next.js still has the deepest ecosystem. The App Router took a while to stabilize, but server components genuinely reduce client bundle size once you learn where the boundaries should live."
    },
    {
      "type": "list",
      "items": [
        "Best-in-class static generation and ISR",
        "Largest ecosystem of libraries and examples",
        "Tight integration with Vercel's edge network"
      ]
    },
    {
      "type": "heading",
      "text": "Where Remix wins"
    },
    {
      "type": "paragraph",
      "text": "Remix's data loading model is simpler to reason about once you stop fighting it. Nested routes with colocated loaders remove a lot of the waterfall problems I've hit in Next.js apps with deeply nested client fetching."
    },
    {
      "type": "list",
      "items": [
        "Simpler mental model for data loading",
        "Better default handling of forms and mutations",
        "Less client-side JavaScript by default"
      ]
    },
    {
      "type": "heading",
      "text": "My actual recommendation"
    },
    {
      "type": "paragraph",
      "text": "For content-heavy marketing sites and anything SEO-critical, I still reach for Next.js. For dashboards, internal tools, and anything mutation-heavy, Remix's loader/action model saves real development time. Pick based on your data patterns, not on hype."
    }
  ]
}

const ContentBlock = ({ block, i }) => {
  if (block.type === 'heading') {
    return (
      <h2
        key={i}
        className="font-head font-bold text-body tracking-[-0.01em] mt-12 mb-5"
        style={{ fontSize: '1.75rem', lineHeight: 1.3 }}
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === 'list') {
    return (
      <ul key={i} className="space-y-3 my-6">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-body text-base leading-7">
            <span className="w-1.5 h-1.5 rounded-full bg-body mt-2.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={i} className="text-muted text-base leading-8 mb-6">
      {block.text}
    </p>
  );
};

export default function BlogPostPage() {
  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="px-6 pt-10 pb-14 md:px-12 lg:px-[64px] lg:pt-14 lg:pb-16">
        <div className="max-w-[800px] mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted mb-10 flex-wrap">
            <Link href="/" className="no-underline hover:text-body">Home</Link>
            <span>›</span>
            <Link href="/blog" className="no-underline hover:text-body">Blog</Link>
            <span>›</span>
            <span className="text-body truncate">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-body border border-sep rounded-full px-3.5 py-1.5">
              {post.category}
            </span>
            <span className="text-muted text-sm">{post.date}</span>
            <span className="text-muted text-sm">·</span>
            <span className="text-muted text-sm">{post.readTime}</span>
          </div>

          <h1
            className="font-head font-bold text-body tracking-[-0.02em] mb-7"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.1 }}
          >
            {post.title}
          </h1>

          <p className="text-muted text-lg leading-8 mb-10">{post.excerpt}</p>

          <div className="flex items-center gap-3">
            <div className="relative rounded-full overflow-hidden flex-shrink-0" style={{ width: 44, height: 44 }}>
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
              <div className="font-head font-semibold text-body text-sm">{post.author.name}</div>
              <div className="text-muted text-xs">{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="px-6 md:px-12 lg:px-[64px] mb-14">
        <div
          className="relative max-w-[1100px] mx-auto rounded-3xl overflow-hidden"
          style={{ aspectRatio: '16 / 9', background: post.bg }}
        >
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24 md:px-12 lg:px-[64px]">
        <article className="max-w-[800px] mx-auto">
          {post.content.map((block, i) => (
            <ContentBlock key={i} block={block} i={i} />
          ))}

          <div className="flex items-center justify-between border-t border-sep mt-14 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 rounded-full pl-2 pr-5 py-2 w-fit font-head font-medium no-underline"
              style={{ background: '#0A0A0A', color: '#FFFFFF' }}
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#0A0A0A] text-base"
                style={{ background: '#D4F26A' }}
              >
                ←
              </span>
              Back to Blog
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}