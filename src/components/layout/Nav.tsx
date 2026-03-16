// src/components/layout/Nav.tsx
// Fixed top navigation bar using Radix NavigationMenu.
// Active section highlighting via useActiveSection hook.

import { useMemo } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { navSections, navLogo, navCta } from '../../data/content'
import { useActiveSection } from '../../hooks/useActiveSection'

// Stable reference — navSections is a module-level constant so this never changes.
const SECTION_IDS = navSections.map((s) => s.href.replace('#', ''))

export default function Nav() {
  // useMemo is belt-and-suspenders; SECTION_IDS is already stable above.
  const sectionIds = useMemo(() => SECTION_IDS, [])
  const activeId = useActiveSection(sectionIds)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5"
      style={{
        background: 'linear-gradient(180deg, rgba(5,6,8,.9) 0%, transparent 100%)',
        backdropFilter: 'blur(2px)',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-cinzel-decorative text-[15px] tracking-[3px] text-frost-pale no-underline"
      >
        {navLogo}
      </a>

      {/* Nav links */}
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex gap-9 list-none m-0 p-0">
          {navSections.map((section) => {
            const id = section.href.replace('#', '')
            const isActive = activeId === id
            return (
              <NavigationMenu.Item key={section.href}>
                <NavigationMenu.Link
                  href={section.href}
                  className="
                    relative font-cinzel text-[11px] tracking-[3px] uppercase
                    no-underline transition-colors duration-200
                    group
                  "
                  style={{
                    color: isActive ? 'var(--frost-pale)' : 'var(--frost-dim)',
                  }}
                >
                  {section.label}
                  {/* Underline accent */}
                  <span
                    className="
                      absolute -bottom-1 left-0 right-0 h-px
                      transition-transform duration-300 origin-left
                    "
                    style={{
                      background: 'var(--aurora-teal)',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            )
          })}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      {/* CTA */}
      <a
        href="mailto:pearson.e.thomas@gmail.com"
        className="
          font-cinzel text-[11px] tracking-[2px] uppercase
          px-5 py-2.5
          text-aurora-teal border border-aurora-teal
          no-underline
          transition-all duration-200
          hover:bg-[rgba(45,212,191,.08)]
          hover:shadow-[0_0_16px_rgba(45,212,191,.2)]
        "
      >
        {navCta}
      </a>
    </header>
  )
}
