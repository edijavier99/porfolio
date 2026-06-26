import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-footer" style={{ borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Kova"
              width={100}
              height={34}
              className="object-contain brightness-0 invert opacity-60 mb-4"
            />
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              We build scalable digital products that solve real business problems.
              Based in London, serving clients globally.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs font-mono text-dim uppercase tracking-widest mb-4">Pages</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Home',           href: '/' },
                { label: 'About Us',       href: '/about' },
                { label: 'Sustainability', href: '/sustainability' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted text-sm hover:text-green transition-colors no-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono text-dim uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#contact" className="text-muted text-sm hover:text-green transition-colors no-underline">
                  Start a Project
                </Link>
              </li>
              <li>
                <a href="https://kova.co.uk" className="text-muted text-sm hover:text-green transition-colors no-underline">
                  kova.co.uk
                </a>
              </li>
              <li>
                <span className="text-muted text-sm">London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid #1a1a1a' }}>
          <p className="text-dim text-xs font-mono">
            © {new Date().getFullYear()} Kova — All rights reserved
          </p>
          <div className="flex gap-6">
            {['LinkedIn', 'GitHub', 'Twitter'].map((s) => (
              <a key={s} href="#" className="text-dim text-xs hover:text-muted transition-colors no-underline">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
