// src/hooks/useScrollReveal.ts
// Fallback scroll reveal hook — use this ONLY if not using Framer Motion.
// If RevealWrapper.tsx (Framer Motion) is in use, this hook is not needed.

import { useRef, useEffect, type RefObject } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  margin?: string
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
): RefObject<T | null> {
  const { threshold = 0.1, margin = '0px', once = true } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.classList.remove('is-visible')
        }
      },
      { threshold, rootMargin: margin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, margin, once])

  return ref
}
