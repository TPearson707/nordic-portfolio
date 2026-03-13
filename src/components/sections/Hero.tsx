// src/components/sections/Hero.tsx
// Full-screen hero section with staggered Framer Motion entrance.

import { motion, type Variants } from 'framer-motion'
import { meta } from '../../data/content'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i as number) * 0.2, duration: 0.8, ease: EASE },
  }),
}

export default function Hero() {
  const reduced = useReducedMotion()

  const motionProps = (i: number) =>
    reduced
      ? {}
      : { variants, initial: 'hidden' as const, animate: 'show' as const, custom: i }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-20 relative"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,200,232,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,200,232,.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Rune ring emblem */}
      <motion.div
        {...motionProps(0)}
        className="relative w-[120px] h-[120px] flex items-center justify-center mb-8"
      >
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full border border-[rgba(168,200,232,0.2)]"
          style={{ animation: 'ringPulse 4s ease-in-out infinite' }}
        />
        {/* Inner ring */}
        <div
          className="absolute rounded-full border border-[rgba(168,200,232,0.12)]"
          style={{ inset: '10px' }}
        />
        {/* Icon */}
        <span
          className="text-[60px] leading-none"
          style={{ animation: 'iconGlow 4s ease-in-out infinite alternate' }}
        >
          {meta.heroIcon}
        </span>
      </motion.div>

      {/* Eyebrow */}
      <motion.p
        {...motionProps(1)}
        className="font-cinzel text-[12px] tracking-[8px] uppercase text-aurora-teal mb-4"
      >
        {meta.eyebrow}
      </motion.p>

      {/* Name */}
      <motion.h1
        {...motionProps(2)}
        className="font-cinzel-decorative text-frost-pale mb-4"
        style={{ fontSize: 'clamp(42px, 8vw, 88px)', lineHeight: 1.1 }}
      >
        {meta.name}
      </motion.h1>

      {/* Tagline */}
      <motion.p
        {...motionProps(3)}
        className="font-cinzel text-[13px] tracking-[5px] uppercase text-silver mb-6"
      >
        {meta.tagline}
      </motion.p>

      {/* Bio */}
      <motion.p
        {...motionProps(4)}
        className="font-cormorant italic text-[16px] text-frost-dim max-w-prose mx-auto mb-10 leading-relaxed"
      >
        {meta.bio}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        {...motionProps(5)}
        className="flex gap-4 flex-wrap justify-center"
      >
        <a
          href={meta.ctaPrimaryHref}
          className="
            font-cinzel text-[12px] tracking-[2px] uppercase
            px-8 py-3.5 no-underline
            text-void
            transition-all duration-200
            hover:-translate-y-0.5
          "
          style={{
            background: 'linear-gradient(135deg, var(--aurora-teal), var(--aurora-blue))',
            boxShadow: '0 4px 24px rgba(45,212,191,.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(45,212,191,.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(45,212,191,.3)'
          }}
        >
          {meta.ctaPrimary}
        </a>
        <a
          href={meta.ctaSecondaryHref}
          className="
            font-cinzel text-[12px] tracking-[2px] uppercase
            px-8 py-3.5 no-underline
            text-frost
            border border-[var(--border-ice)]
            transition-all duration-200
            hover:-translate-y-0.5 hover:bg-[rgba(200,223,240,0.04)]
          "
        >
          {meta.ctaSecondary}
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="font-cinzel text-[10px] tracking-[3px] uppercase text-[rgba(168,200,232,.4)]">
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(180deg, rgba(168,200,232,.4), transparent)',
            animation: 'scrollDrop 2s ease-in-out infinite',
          }}
        />
      </motion.div>
    </section>
  )
}
