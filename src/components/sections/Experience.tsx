// src/components/sections/Experience.tsx
// Timeline of experience and education entries.

import { experience, sectionLabels } from '../../data/content'
import SectionLabel from '../ui/SectionLabel'
import TechPill from '../ui/TechPill'
import RevealWrapper from '../ui/RevealWrapper'

export default function Experience() {
  return (
    <section id="experience" className="max-w-page mx-auto px-12 pt-[120px] pb-20">
      {/* Header */}
      <RevealWrapper>
        <SectionLabel rune={sectionLabels.experience.rune}>
          {sectionLabels.experience.text}
        </SectionLabel>
        <h2
          className="font-cinzel-decorative text-frost-pale mb-14"
          style={{ fontSize: 'clamp(24px, 3.5vw, 42px)' }}
        >
          Background
        </h2>
      </RevealWrapper>

      {/* Timeline */}
      <div
        className="relative pl-9"
        style={{
          borderLeft: '1px solid',
          borderImage:
            'linear-gradient(180deg, var(--aurora-teal), rgba(56,189,248,.1), transparent) 1',
        }}
      >
        {experience.map((entry, i) => (
          <RevealWrapper key={entry.title + entry.period} delay={i * 0.15}>
            <div className="pb-12 relative last:pb-0">
              {/* Timeline dot */}
              <span
                className="absolute text-[9px] text-aurora-teal"
                style={{
                  left: '-41px',
                  top: '4px',
                  filter: 'drop-shadow(0 0 4px var(--aurora-teal))',
                }}
              >
                ◆
              </span>

              {/* Period */}
              <p className="font-cinzel text-[9px] tracking-[3px] uppercase text-aurora-teal mb-1.5">
                {entry.period}
              </p>

              {/* Title + optional badge */}
              <h3 className="font-cinzel text-[17px] font-semibold text-frost-pale mb-1">
                {entry.title}
                {entry.badge && (
                  <span
                    className="ml-2 inline-block font-cinzel text-[8px] tracking-[2px] uppercase px-2.5 py-0.5 align-middle"
                    style={{
                      color: '#e8a0a8',
                      border: '1px solid rgba(160,16,32,.5)',
                      background: 'rgba(160,16,32,.12)',
                    }}
                  >
                    {entry.badge}
                  </span>
                )}
              </h3>

              {/* Org */}
              <p className="font-cinzel text-[10px] tracking-[2px] uppercase text-frost-dim mb-3">
                {entry.org}
                {entry.location ? ` · ${entry.location}` : ''}
              </p>

              {/* Description */}
              <p className="font-cormorant text-[14px] font-light text-silver leading-loose mb-4">
                {entry.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <TechPill key={tag} label={tag} />
                ))}
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
