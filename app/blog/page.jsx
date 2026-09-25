import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/posts';

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
  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="blog-hero-section px-6 pt-10 pb-16 md:px-12 lg:px-[64px] lg:pt-14 lg:pb-20">
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
              <span className="font-medium" style={{ color: '#6B7280' }}>& Engineering.</span>
            </h1>

            <div className="flex flex-col gap-7 max-w-[420px]">
              <p className="text-muted text-lg leading-7">
                Welcome to my blog, where I share perspectives on software
                engineering, AI, and the ideas that shape how I build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section id="explore-blog" className="blog-collection-seation px-6 pb-20 md:px-12 lg:px-[64px] lg:pb-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}