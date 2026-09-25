import Image from 'next/image';

const experience = [
  {
    id: 'singking',
    company: 'Sing King',
    role: 'Software Engineer',
    years: 'Aug 2026 — Present',
    logo: '/images/singkingLogo2.png',
    initials: 'SK',
  },
  {
    id: 'superfanbase',
    company: 'Superfanbase',
    role: 'Lead Software Engineer',
    years: 'May 2025 — Present',
    logo: '/images/superfanbaseLogo.png',
    initials: 'SF',
  },
  {
    id: 'tokunize',
    company: 'Tokunize',
    role: 'Full-stack Developer',
    years: 'Aug 2024 — May 2025',
    logo: '/images/Tokunize.svg',
    initials: 'TK',
  },
  {
    id: 'adisl',
    company: 'ADI SL',
    role: 'Full Stack Developer',
    years: '2022 — 2023',
    logo: null,
    initials: 'AD',
  },
];

const LogoBox = ({ item }) => (
  <div
    className="relative flex-shrink-0 rounded-2xl overflow-hidden flex items-center justify-center"
    style={{ width: 56, height: 56, background: '#F1F1EF' }}
  >
    {item.logo ? (
      <Image src={item.logo} alt={item.company} fill className="object-contain p-2" />
    ) : (
      <span className="font-head font-bold text-body text-sm">{item.initials}</span>
    )}
  </div>
);

const ExperienceRow = ({ item, isLast }) => (
  <div className={`flex items-center justify-between gap-6 py-7 ${!isLast ? 'border-b border-sep' : ''}`}>
    <div className="flex items-center gap-5 min-w-0">
      <LogoBox item={item} />
      <div className="min-w-0">
        <h3 className="font-head font-bold text-body text-xl leading-tight mb-1 truncate">
          {item.company}
        </h3>
        <p className="text-muted text-base">{item.role}</p>
      </div>
    </div>
    <div className="font-mono text-sm text-muted whitespace-nowrap flex-shrink-0">
      {item.years}
    </div>
  </div>
);

export default function ExperienceSection() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-[64px] lg:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-body border border-sep rounded-full px-4 py-2 mb-6 w-fit">
            <span className="w-1.5 h-1.5 bg-body" />
            Experience
          </span>

          <h2
            className="font-head tracking-[-0.02em] mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
          >
            <span className="font-bold text-body">Work</span>{' '}
            <span className="font-medium" style={{ color: '#6B7280' }}>Experience</span>
          </h2>

          <p className="text-muted text-lg max-w-[480px]">
            4+ years building real products across startups, platforms, and agencies.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Portrait */}
          <div
            className="relative flex-shrink-0 rounded-3xl overflow-hidden w-full lg:w-[400px]"
            style={{ aspectRatio: '4 / 5' }}
          >
            <Image
              src="/images/portrait01.png"
              alt="Edi Javier"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* List */}
          <div className="flex-1 flex flex-col border-t border-sep">
            {experience.map((item, i) => (
              <ExperienceRow key={item.id} item={item} isLast={i === experience.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
