# Thomas — Nordic Portfolio

Personal portfolio site with a dark Nordic/Skyrim aesthetic. Built with React 18, Vite, TypeScript, and Tailwind CSS. Features a live Three.js GLSL aurora background rendered via `@react-three/fiber`.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18.3.1 + Vite 6 |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS 3 |
| 3D / WebGL | Three.js + @react-three/fiber v8 + @react-three/drei |
| Animation | Framer Motion 11 |
| UI Primitives | Radix UI (NavigationMenu, Progress, Tooltip, Dialog) |

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # tsc -b && vite build
npm run preview   # preview production build
```

> **Note:** `.npmrc` sets `legacy-peer-deps=true` — required for `@react-three/fiber` v8 peer dependency resolution. Do not remove it.

## Version Constraints

These versions are pinned intentionally and **must not be upgraded**:

- **React 18.3.1** — React 19 removes `ReactSharedInternals.ReactCurrentOwner`, which breaks `@react-three/fiber` v8 at runtime.
- **framer-motion ^11** — v12 requires React 19.
- **@react-three/fiber ^8** — v9 is not yet stable with this setup.

## Project Structure

```
src/
├── data/content.ts          # All copy, projects, skills, experience — edit here
├── components/
│   ├── background/          # Three.js aurora (AuroraCanvas, AuroraBand, fallback, error boundary)
│   ├── ui/                  # RevealWrapper, SkillBar, TechPill, SectionLabel, FrostRule, StatusBadge
│   ├── layout/              # Nav, Footer
│   └── sections/            # Hero, Work, About, Experience, Contact
├── hooks/                   # useActiveSection, useReducedMotion, useScrollReveal
└── App.tsx                  # Root layout
```

## Content Updates

All copy lives in [src/data/content.ts](src/data/content.ts). Never hardcode text in JSX.

- **Projects** — add/edit entries in the `projects[]` array. Set `featured: true` for the large two-column panels; `false` for the three-card grid.
- **Experience/Education** — edit the `experience[]` array.
- **Skills** — edit the `skills[]` array (values are 0–100).

## Design

- **Palette:** void black background (`#050608`), aurora teal/blue/purple accents, frost silver text
- **Fonts:** Cinzel Decorative (headings), Cinzel (UI/nav), Cormorant Garamond (body) — loaded via Google Fonts in `index.html`
- **Aurora:** 3 layered GLSL shader planes with `nordicAurora` preset. Falls back to a pure-CSS version if WebGL is unavailable (`AuroraErrorBoundary` → `AuroraFallback`)
