import Link from 'next/link';
import BlogList from './BlogList';

export const metadata = {
  title: 'Blog — Software Engineering & Startup Insights',
  description:
    'Articles on software engineering, AI, and lessons from working with founders and early-stage teams. By Edi Javier, London-based Software Engineer.',
  alternates: { canonical: 'https://edijavier.com/blog' },
  openGraph: {
    title: 'Blog — Edi Javier',
    description: 'Software engineering, AI, and lessons from working with founders.',
    url: 'https://edijavier.com/blog',
  },
};

export default function BlogPage() {
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

      <BlogList />
    </main>
  );
}
