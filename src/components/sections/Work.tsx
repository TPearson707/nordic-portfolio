// src/components/sections/Work.tsx
// Featured project panels (2-up) + 3-card grid.

import { featuredProjects, cardProjects, sectionLabels } from '../../data/content'
import type { Project } from '../../data/content'
import SectionLabel from '../ui/SectionLabel'
import StatusBadge from '../ui/StatusBadge'
import TechPill from '../ui/TechPill'
import RevealWrapper from '../ui/RevealWrapper'

function FeaturedPanel({ project }: { project: Project }) {
  return (
    <RevealWrapper>
      <div
        className="
          grid border border-[var(--border-frost)]
          transition-all duration-300
          hover:border-aurora-blue/30
          hover:shadow-[0_0_40px_rgba(56,189,248,0.07)]
          max-[900px]:grid-cols-1
        "
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Visual pane */}
        <div
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            minHeight: '340px',
            background: project.visualBg
              ?? 'linear-gradient(135deg, var(--stone-mid) 0%, var(--stone-dark) 100%)',
          }}
        >
          {/* Aurora glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(56,189,248,0.08), transparent)',
              animation: 'visualPulse 6s ease-in-out infinite alternate',
            }}
          />
          {/* Icon */}
          <span
            className="relative z-10 text-[80px] leading-none"
            style={{ filter: 'drop-shadow(0 0 20px rgba(56,189,248,0.3))' }}
          >
            {project.icon}
          </span>
          {/* Watermark runes */}
          <span
            className="absolute bottom-4 right-4 font-cinzel text-[11px] tracking-[4px] pointer-events-none select-none"
            style={{ color: 'rgba(168,200,232,.08)' }}
            aria-hidden="true"
          >
            ᚠᚢᚦᚨᚱᚲᚷᚹ
          </span>
        </div>

        {/* Info pane */}
        <div
          className="flex flex-col justify-center p-12"
          style={{
            background:
              'linear-gradient(135deg, var(--stone-dark) 0%, var(--stone-mid) 100%)',
          }}
        >
          <div className="mb-3">
            <StatusBadge status={project.status} />
          </div>
          <p className="font-cinzel text-[9px] tracking-[4px] uppercase text-aurora-teal mb-2">
            {project.number}
          </p>
          <h3 className="font-cinzel text-[22px] font-semibold text-frost-pale mb-3 leading-snug">
            {project.title}
          </h3>
          <p className="font-cormorant italic text-[14px] text-silver leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              className="
                inline-flex items-center gap-2
                font-cinzel text-[9px] tracking-[2px] uppercase
                text-aurora-teal no-underline
                transition-all duration-200
                hover:gap-3
              "
            >
              {project.linkLabel ?? 'View Project'}
              <span>→</span>
            </a>
          )}
        </div>
      </div>
    </RevealWrapper>
  )
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <RevealWrapper delay={delay}>
      <div
        className="
          relative overflow-hidden group
          border border-[var(--border-frost)]
          p-7 h-full
          transition-all duration-300
          hover:-translate-y-0.5
          hover:border-aurora-blue/30
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_24px_rgba(56,189,248,0.07)]
        "
        style={{
          background:
            'linear-gradient(135deg, rgba(30,34,48,0.7) 0%, rgba(13,14,18,0.9) 100%)',
        }}
      >
        {/* Top edge accent on hover */}
        <div
          className="
            absolute top-0 left-0 right-0 h-0.5
            bg-gradient-to-r from-transparent via-aurora-blue to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
          "
        />

        <span className="text-[28px] mb-3.5 block leading-none">{project.icon}</span>
        <p className="font-cinzel text-[8px] tracking-[3px] uppercase text-aurora-teal mb-2">
          {project.number}
        </p>
        <h3 className="font-cinzel text-[13px] font-semibold uppercase tracking-wide text-frost mb-2">
          {project.title}
        </h3>
        <p className="font-cormorant italic font-light text-[12px] text-frost-dim leading-[1.75] mb-4">
          {project.description}
        </p>
        <div className="mb-3">
          <StatusBadge status={project.status} />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>
      </div>
    </RevealWrapper>
  )
}

export default function Work() {
  return (
    <section id="work" className="max-w-page mx-auto px-12 pt-[120px] pb-20">
      {/* Header */}
      <RevealWrapper className="mb-16">
        <SectionLabel rune={sectionLabels.work.rune}>{sectionLabels.work.text}</SectionLabel>
        <h2
          className="font-cinzel-decorative text-frost-pale mb-3"
          style={{ fontSize: 'clamp(24px, 3.5vw, 42px)' }}
        >
          Selected Work
        </h2>
        <p className="font-cormorant italic text-[15px] text-frost-dim max-w-prose leading-relaxed">
          A collection of projects spanning full-stack web development and game development.
        </p>
      </RevealWrapper>

      {/* Featured panels */}
      <div className="flex flex-col gap-5 mb-5">
        {featuredProjects.map((project) => (
          <FeaturedPanel key={project.id} project={project} />
        ))}
      </div>

      {/* 3-card grid */}
      <div
        className="grid gap-4 max-[600px]:grid-cols-1 max-[900px]:grid-cols-2"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {cardProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={(i + 1) * 0.1} />
        ))}
      </div>
    </section>
  )
}
