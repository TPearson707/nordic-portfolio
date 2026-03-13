// src/components/sections/About.tsx
// Two-column layout: about body (left) + skills/details sidebar (right).

import { about, skills, infoItems, sectionLabels } from '../../data/content'
import SectionLabel from '../ui/SectionLabel'
import SkillBar from '../ui/SkillBar'
import RevealWrapper from '../ui/RevealWrapper'

export default function About() {
  return (
    <section id="about" className="max-w-page mx-auto px-12 pt-[120px] pb-20">
      {/* Header */}
      <RevealWrapper>
        <SectionLabel rune={sectionLabels.about.rune}>{about.sectionEyebrow}</SectionLabel>
        <h2
          className="font-cinzel-decorative text-frost-pale mb-14"
          style={{ fontSize: 'clamp(24px, 3.5vw, 42px)' }}
        >
          {about.sectionTitle}
        </h2>
      </RevealWrapper>

      {/* Two-column grid */}
      <div
        className="grid gap-20 items-start max-[900px]:grid-cols-1"
        style={{ gridTemplateColumns: '1fr 360px' }}
      >
        {/* Left: body text */}
        <RevealWrapper className="space-y-5">
          {about.paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-cormorant text-[15px] font-light text-silver leading-[2.1]"
              // HTML entities for strong tags from content
              dangerouslySetInnerHTML={{ __html: para }}
              style={{}}
            />
          ))}
        </RevealWrapper>

        {/* Right: sidebar */}
        <div className="flex flex-col gap-6">
          {/* Skills block */}
          <RevealWrapper delay={0.1}>
            <div
              className="border border-[var(--border-frost)] p-5"
              style={{
                background:
                  'linear-gradient(135deg, rgba(30,34,48,0.6) 0%, rgba(13,14,18,0.8) 100%)',
              }}
            >
              <div
                className="pb-3 mb-4"
                style={{ borderBottom: '1px solid rgba(168,200,232,.1)' }}
              >
                <SectionLabel rune={sectionLabels.skills.rune} showLine={false}>
                  {sectionLabels.skills.text}
                </SectionLabel>
              </div>
              <div className="space-y-3">
                {skills.map((skill, i) => (
                  <SkillBar
                    key={skill.label}
                    label={skill.label}
                    value={skill.value}
                    animationDelay={i * 0.08}
                  />
                ))}
              </div>
              <p
                className="mt-4 font-cinzel text-[18px] tracking-[3px]"
                style={{ color: 'rgba(168,200,232,.12)' }}
                aria-hidden="true"
              >
                ᚠ ᚢ ᚦ ᚨ ᚱ
              </p>
            </div>
          </RevealWrapper>

          {/* Details block */}
          <RevealWrapper delay={0.2}>
            <div
              className="border border-[var(--border-frost)] p-5"
              style={{
                background:
                  'linear-gradient(135deg, rgba(30,34,48,0.6) 0%, rgba(13,14,18,0.8) 100%)',
              }}
            >
              <div
                className="pb-3 mb-4"
                style={{ borderBottom: '1px solid rgba(168,200,232,.1)' }}
              >
                <SectionLabel rune={sectionLabels.details.rune} showLine={false}>
                  {sectionLabels.details.text}
                </SectionLabel>
              </div>
              <ul className="space-y-3 list-none p-0 m-0">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-[14px] flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-cinzel text-[8px] tracking-[2px] uppercase text-aurora-teal mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-cormorant text-[13px] text-silver">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
