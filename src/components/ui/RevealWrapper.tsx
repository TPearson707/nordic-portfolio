// src/components/ui/RevealWrapper.tsx
// Framer Motion scroll-reveal wrapper. Replaces IntersectionObserver + CSS .reveal pattern.

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function RevealWrapper({ children, delay = 0, className }: RevealWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
