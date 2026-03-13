// src/components/layout/Footer.tsx

import { footer } from '../../data/content'

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-12 py-7"
      style={{ borderTop: '1px solid rgba(168,200,232,.08)' }}
    >
      <span className="font-cinzel text-[8px] tracking-[2px] text-[rgba(168,200,232,.3)]">
        {footer.left}
      </span>
      <span
        className="font-cinzel text-[13px] tracking-[6px] text-[rgba(168,200,232,.15)]"
        aria-hidden="true"
      >
        {footer.runes}
      </span>
      <span className="font-cinzel text-[8px] tracking-[2px] text-[rgba(168,200,232,.3)]">
        {footer.right}
      </span>
    </footer>
  )
}
