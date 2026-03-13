// src/components/ui/SkillBar.tsx
// 2px aurora-blue→teal skill bar using Radix Progress for accessibility.

import * as Progress from '@radix-ui/react-progress'
import { useRef, useEffect, useState } from 'react'

interface SkillBarProps {
  label: string
  value: number // 0–100
  animationDelay?: number
}

export default function SkillBar({ label, value, animationDelay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setWidth(value), animationDelay * 1000)
          observer.unobserve(el)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, animationDelay])

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="font-cinzel text-[9px] tracking-[1.5px] uppercase text-frost-dim">
          {label}
        </span>
        <span className="font-cinzel text-[8px] text-aurora-teal">{value}</span>
      </div>
      <Progress.Root
        value={width}
        max={100}
        className="skill-track h-[2px] w-full overflow-hidden"
        style={{ background: 'rgba(168, 200, 232, 0.08)' }}
      >
        <Progress.Indicator
          style={{
            width: `${width}%`,
            transition: `width 1.8s cubic-bezier(0.4, 0, 0.2, 1)`,
            background: 'linear-gradient(to right, var(--aurora-blue), var(--aurora-teal))',
            boxShadow: '0 0 8px var(--rune-glow)',
            height: '100%',
          }}
        />
      </Progress.Root>
    </div>
  )
}
