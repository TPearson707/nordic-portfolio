// src/components/ui/FrostRule.tsx
// Horizontal frost divider with a rune glyph centered over a gradient line.

interface FrostRuleProps {
  rune?: string
}

export default function FrostRule({ rune = 'ᚠ' }: FrostRuleProps) {
  return (
    <div className="max-w-page mx-auto px-12 py-0">
      <div className="frost-rule" data-rune={rune} />
    </div>
  )
}
