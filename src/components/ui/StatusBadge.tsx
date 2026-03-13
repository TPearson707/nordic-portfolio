// src/components/ui/StatusBadge.tsx
// Colored dot + label indicating project status.

import type { StatusType } from '../../data/content'

interface StatusBadgeProps {
  status: StatusType
  label?: string
}

const statusConfig: Record<StatusType, { color: string; defaultLabel: string; pulse: boolean }> = {
  active:   { color: 'var(--aurora-teal)',   defaultLabel: 'Active',         pulse: true  },
  progress: { color: 'var(--aurora-blue)',   defaultLabel: 'In Development', pulse: false },
  complete: { color: 'var(--silver)',        defaultLabel: 'Complete',       pulse: false },
  pending:  { color: 'var(--silver)',        defaultLabel: 'Pending',        pulse: false },
  archived: { color: 'var(--silver)',        defaultLabel: 'Archived',       pulse: false },
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  const { color, defaultLabel, pulse } = statusConfig[status]
  const displayLabel = label ?? defaultLabel

  return (
    <div className="flex items-center gap-1.5">
      <span
        className="block w-[5px] h-[5px] rounded-full flex-shrink-0"
        style={{
          background: color,
          boxShadow: `0 0 6px ${color}`,
          animation: pulse ? 'dotPulse 2s ease-in-out infinite' : undefined,
        }}
      />
      <span
        className="font-cinzel text-[8px] tracking-[2px] uppercase"
        style={{ color }}
      >
        {displayLabel}
      </span>
    </div>
  )
}
