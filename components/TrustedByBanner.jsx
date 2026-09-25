import Image from 'next/image';
import Link from 'next/link';

const clients = [
  { name: 'AC Services',  src: '/images/acservicesLogo.png',   href: 'https://acservices-1.onrender.com/' },
  { name: 'Superfanbase', src: '/images/superfanbaseLogo.png', href: 'https://www.superfanbase.com/' },
  { name: 'Tokunize',     src: '/images/Tokunize.svg',         href: 'https://tokunize.vercel.app/' },
  { name: 'Innergrow',    src: '/images/InnergrowLogo2.png',   href: 'https://www.innergrow.co.uk/' },
  { name: 'Artist Pass',  src: '/images/artistpassLogo2.png',  href: 'https://www.artistpass.net/' },
  { name: 'Hannahelsy',   src: '/images/hannahelsyLogo.webp',  href: 'https://www.hannahelsy.com/' },
  { name: 'Held & Co',    src: '/images/heldandco.png',        href: 'https://www.heldandco.uk/' },
];

export default function TrustedByBanner() {
  return (
    <section className="pt-12 pb-24 bg-bg overflow-hidden">
      <div className="flex flex-col items-center gap-8">
        <p className="font-head font-semibold text-sm text-muted tracking-widest uppercase">
          Clients I've worked with
        </p>

        {/* Marquee track */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #FAFAF8, transparent)' }} />
          <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #FAFAF8, transparent)' }} />

          <div className="flex items-center" style={{ animation: 'marquee 18s linear infinite', willChange: 'transform' }}>
            {/* Duplicated for seamless loop */}
            {[...clients, ...clients].map((c, i) => (
              <Link
                key={`${c.name}-${i}`}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-5 md:mx-8 lg:mx-10 opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={c.src}
                  alt={c.name}
                  width={160}
                  height={60}
                  className="object-contain h-8 md:h-12 lg:h-16 w-auto"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
