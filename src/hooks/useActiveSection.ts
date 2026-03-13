// src/hooks/useActiveSection.ts
// Tracks which section anchor is currently in the viewport.
// Used by Nav.tsx to highlight the active nav link as the user scrolls.

import { useState, useEffect, useCallback } from 'react'

interface UseActiveSectionOptions {
  /** Distance from top of viewport to consider a section "entered". Default: 120 */
  offset?: number
  /** Throttle interval in ms. Default: 100 */
  throttleMs?: number
}

export function useActiveSection(
  sectionIds: string[],
  options: UseActiveSectionOptions = {}
): string {
  const { offset = 120, throttleMs = 100 } = options
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  const handleScroll = useCallback(() => {
    let current = sectionIds[0] ?? ''

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue
      if (window.scrollY >= el.offsetTop - offset) {
        current = id
      }
    }

    setActiveId(current)
  }, [sectionIds, offset])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null

    const throttled = () => {
      if (timeout) return
      timeout = setTimeout(() => {
        handleScroll()
        timeout = null
      }, throttleMs)
    }

    handleScroll()

    window.addEventListener('scroll', throttled, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttled)
      if (timeout) clearTimeout(timeout)
    }
  }, [handleScroll, throttleMs])

  return activeId
}
