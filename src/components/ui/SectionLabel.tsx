// src/components/ui/SectionLabel.tsx
// Small uppercase eyebrow label: [rune] TEXT ─────────────────────

interface SectionLabelProps {
  rune?: string
  children: string
  showLine?: boolean
}

export default function SectionLabel({ rune, children, showLine = true }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-3">
      {rune && (
        <span className="font-cinzel text-aurora-teal text-xs">{rune}</span>
      )}
      <span
        className="font-cinzel text-[11px] tracking-[5px] uppercase text-aurora-teal"
      >
        {children}
      </span>
      {showLine && (
        <span
          className="flex-1 h-px"
          style={{
            background:
              'linear-gradient(90deg, var(--aurora-teal), transparent)',
            opacity: 0.4,
          }}
        />
      )}
    </div>
  )
}
