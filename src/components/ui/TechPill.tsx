// src/components/ui/TechPill.tsx
// Small bordered technology tag. Optionally wraps with Radix Tooltip.

import * as Tooltip from '@radix-ui/react-tooltip'

interface TechPillProps {
  label: string
  tooltip?: string
}

function Pill({ label }: { label: string }) {
  return (
    <span
      className="
        inline-block font-cinzel text-[8px] tracking-[1.5px] uppercase
        px-2.5 py-1
        text-frost-dim
        border border-[var(--border-frost)]
        bg-[rgba(168,200,232,0.03)]
        transition-colors duration-200
        hover:border-aurora-blue/40 hover:text-frost-pale
        cursor-default
      "
    >
      {label}
    </span>
  )
}

export default function TechPill({ label, tooltip }: TechPillProps) {
  if (!tooltip) return <Pill label={label} />

  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span>
            <Pill label={label} />
          </span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="
              font-cinzel text-[8px] tracking-[1px] uppercase
              px-3 py-1.5
              text-frost
              bg-stone-mid
              border border-[var(--border-frost)]
              z-50
            "
            sideOffset={4}
          >
            {tooltip}
            <Tooltip.Arrow style={{ fill: 'var(--stone-mid)' }} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
