// src/components/sections/Contact.tsx

import { contact, sectionLabels } from '../../data/content'
import SectionLabel from '../ui/SectionLabel'
import RevealWrapper from '../ui/RevealWrapper'

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-page mx-auto px-12 pb-[120px] text-center"
    >
      <RevealWrapper>
        <div
          className="relative border border-[var(--border-frost)] px-12 py-16"
          style={{
            background:
              'linear-gradient(135deg, rgba(30,34,48,0.7) 0%, rgba(13,14,18,0.9) 100%)',
          }}
        >
          {/* Top edge gradient line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background:
                'linear-gradient(90deg, transparent, var(--aurora-teal), var(--aurora-blue), var(--aurora-purple), transparent)',
            }}
          />

          <div className="mb-3 flex justify-center">
            <SectionLabel rune={sectionLabels.contact.rune} showLine={false}>
              {sectionLabels.contact.text}
            </SectionLabel>
          </div>

          <h2
            className="font-cinzel-decorative text-frost-pale mb-4"
            style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}
          >
            {contact.heading}
          </h2>

          <p className="font-cormorant italic text-[15px] text-frost-dim max-w-prose mx-auto mb-10 leading-relaxed">
            {contact.sub}
          </p>

          {/* Contact links */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-[600px]:flex-col max-[600px]:items-center">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.download ? { download: link.download } : {})}
                className="
                  inline-flex items-center gap-2
                  font-cinzel text-[9px] tracking-[2px] uppercase
                  px-6 py-3 no-underline
                  text-frost-dim border border-[var(--border-frost)]
                  transition-all duration-200
                  hover:text-frost-pale hover:border-[var(--border-ice)]
                  hover:-translate-y-0.5
                "
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Decorative runes */}
          <p
            className="font-cinzel text-[16px] tracking-[10px]"
            style={{ color: 'rgba(168,200,232,.15)' }}
            aria-hidden="true"
          >
            {contact.runes}
          </p>
        </div>
      </RevealWrapper>
    </section>
  )
}
