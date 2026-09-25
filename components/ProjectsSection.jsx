import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    "id": "nova-pulse",
    "title": "Nova Pulse",
    "category": "Web Design",
    "client": "Lumovia Life - Fictional Industry Limited",
    "image": "/images/projects/nova-pulse.jpg",
    "bg": "#8A5A3B"
  },
  {
    "id": "pixel-drift",
    "title": "Pixel Drift",
    "category": "UI/UX Design",
    "client": "Ser Wellness - Fictional Industry Limited",
    "image": "/images/projects/pixel-drift.jpg",
    "bg": "#A9B99A"
  },
  {
    "id": "flux-forge",
    "title": "Flux Forge",
    "category": "SaaS Platform",
    "client": "Vantix Labs - Fictional Industry Limited",
    "image": "/images/projects/flux-forge.jpg",
    "bg": "#3B4A5A"
  },
  {
    "id": "echo-stack",
    "title": "Echo Stack",
    "category": "AI Integration",
    "client": "Northline AI - Fictional Industry Limited",
    "image": "/images/projects/echo-stack.jpg",
    "bg": "#C9A876"
  }
]

const ProjectCard = ({ project }) => (
  <div>
    <Link
      href={`/work/${project.id}`}
      className="relative block rounded-2xl overflow-hidden group"
      style={{ aspectRatio: '4 / 3', background: project.bg }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </Link>

    <div className="flex items-start justify-between gap-4 mt-5">
      <div>
        <h3 className="font-head font-bold text-body text-2xl leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-6">{project.client}</p>
      </div>
      <span className="font-head text-muted text-base flex-shrink-0 mt-1">
        {project.category}
      </span>
    </div>
  </div>
);

export default function ProjectsSection() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-[64px] lg:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <span className="inline-flex items-center gap-2 font-mono text-xs text-body border border-sep rounded-full px-4 py-2 mb-6 w-fit">
          <span className="w-1.5 h-1.5 bg-body" />
          Featured Project
        </span>

        <h2
          className="font-head tracking-[-0.02em] mb-5"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1 }}
        >
          <span className="font-bold text-body">My Recent</span>{' '}
          <span className="font-medium" style={{ color: '#6B7280' }}>Works</span>
        </h2>

        <p className="text-muted text-lg max-w-[560px] mb-14">
          Combining solid engineering, AI-driven tooling, and clear
          communication to ship software that actually works.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}