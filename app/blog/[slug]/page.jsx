import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts } from '@/lib/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.id === slug);
  if (!post) return {};
  return { title: `${post.title} — Edi Javier`, description: post.excerpt };
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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.id === slug);
  if (!post) notFound();

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
            <div className="relative rounded-full overflow-hidden flex-shrink-0" style={{ width: 44, height: 44, background: '#F0EFEC' }}>
              <Image src="/images/portrait02.png" alt="Edi Javier" fill className="object-cover object-top" />
            </div>
            <div>
              <div className="font-head font-semibold text-body text-sm">Edi Javier</div>
              <div className="text-muted text-xs">Software Engineer</div>
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
          <Image src={post.image} alt={post.title} fill className="object-cover" />
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
