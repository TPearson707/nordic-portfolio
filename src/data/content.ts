// src/data/content.ts
// Nordic Portfolio — Single source of truth for all copy and data.
// Components import from here. Never hardcode copy in JSX.

// ─── NAV ─────────────────────────────────────────────────────────────────────

export interface NavSection {
  label: string
  href: string
}

export const navSections: NavSection[] = [
  { label: 'Work',       href: '#work' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export const navLogo = 'T.'
export const navCta = 'Hire Me'

// ─── META / HERO ──────────────────────────────────────────────────────────────

export const meta = {
  name: 'Thomas',
  eyebrow: 'ᚠᚢᚦᚨᚱᚲ · Developer · Designer · Builder',
  tagline: 'Full-Stack Developer · Game Developer · Computer Science B.S.',
  heroIcon: '🛡',
  bio: `Senior Computer Science student at Salisbury University and full-stack developer at Delmarva Digital. Experienced in end-to-end web application development, database architecture, and UI/UX design, with a growing focus on game development in Unity.`,
  ctaPrimary: 'View My Work',
  ctaPrimaryHref: '#work',
  ctaSecondary: 'Get in Touch',
  ctaSecondaryHref: '#contact',
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────

export interface Skill {
  label: string
  value: number // 0–100
}

export const skills: Skill[] = [
  { label: 'Angular / TypeScript', value: 92 },
  { label: 'SQL / MariaDB',        value: 88 },
  { label: 'UI / UX Design',       value: 80 },
  { label: 'ColdFusion',           value: 78 },
  { label: 'Unity / C#',           value: 68 },
  { label: 'Blender',              value: 52 },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export type StatusType = 'active' | 'progress' | 'complete' | 'pending' | 'archived'

export interface Project {
  id: string
  number: string
  icon: string
  title: string
  description: string
  tech: string[]
  status: StatusType
  featured: boolean
  link?: string
  linkLabel?: string
  /** Optional override for the visual pane background gradient (featured only) */
  visualBg?: string
}

export const projects: Project[] = [
  {
    id: 'pm-system',
    number: 'Project 01 · Featured',
    icon: '🏰',
    title: 'Internal Project Management System',
    description:
      'Full-stack platform built from scratch as the sole developer at Delmarva Digital. Handles project tracking, time logs, invoicing via Stripe, and role-based access control with a responsive Angular UI.',
    tech: ['Angular', 'TypeScript', 'ColdFusion', 'MariaDB', 'JWT Auth', 'Stripe', 'PrimeNG'],
    status: 'active',
    featured: true,
    link: '#',
    linkLabel: 'View Case Study',
  },
  {
    id: 'new-corner-club',
    number: 'Project 02 · Featured',
    icon: '🍺',
    title: 'The New Corner Club',
    description:
      "An RPG tavern management game set in Elder Scrolls' Gray Quarter. Features a reputation system, branching narrative, turn-based combat, and a custom Unity dialogue engine.",
    tech: ['Unity', 'C#', 'Game Design', 'Dialogue Systems', '2D Art'],
    status: 'progress',
    featured: true,
    link: '#',
    linkLabel: 'View on GitHub',
    visualBg: 'linear-gradient(135deg, #0d1118 0%, #1a1f2e 100%)',
  },
  {
    id: 'steel-and-sorcery',
    number: 'Project 03',
    icon: '⚔',
    title: 'Steel & Sorcery',
    description:
      "A 2D medieval platformer built through Unity's Junior Programmer curriculum. Demonstrates physics, animation, and scene management.",
    tech: ['Unity', 'C#', '2D'],
    status: 'complete',
    featured: false,
  },
  {
    id: 'threejs-tavern',
    number: 'Project 04',
    icon: '🏠',
    title: 'THREE.js Tavern',
    description:
      'A browser-based isometric tavern scene rendered with THREE.js, built as a university lab project.',
    tech: ['THREE.js', 'JavaScript', '3D'],
    status: 'complete',
    featured: false,
  },
  {
    id: 'hikikomori',
    number: 'Project 05',
    icon: '💻',
    title: 'Hikikomori Finds Love',
    description:
      'A terminal-based dating simulation in C++ with OOP state machines and ASCII rendering.',
    tech: ['C++', 'OOP', 'CLI'],
    status: 'archived',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const cardProjects = projects.filter((p) => !p.featured)

// ─── ABOUT ────────────────────────────────────────────────────────────────────

export const about = {
  sectionEyebrow: 'About Me',
  sectionTitle: 'Who I Am',
  paragraphs: [
    `<strong>Senior Computer Science student at Salisbury University</strong> and the sole full-stack developer at <strong>Delmarva Digital</strong> since 2023. I build production web applications end-to-end — from database schema and REST APIs to polished, responsive front-end interfaces.`,
    `My professional stack is <strong>Angular, TypeScript, ColdFusion, and MariaDB</strong>, but I'm building toward a career in game development. I work in <strong>Unity and Blender</strong> in my own time, chasing the long-term goal of crafting deeply immersive RPGs.`,
    `I've applied to <strong>NASA internships at Wallops Island</strong> for Summer 2025 — targeting the HESTO and S3PO Database Development projects — and attended a regional STEM career fair to connect directly with the program coordinator.`,
  ],
}

// ─── ABOUT SIDEBAR — INFO LIST ────────────────────────────────────────────────

export interface InfoItem {
  icon: string
  label: string
  value: string
}

export const infoItems: InfoItem[] = [
  { icon: '🏛', label: 'University',      value: 'Salisbury University, Maryland' },
  { icon: '🎓', label: 'Graduating',      value: 'Spring 2025' },
  { icon: '📍', label: 'Location',        value: 'Eastern Shore, Maryland' },
  { icon: '🔭', label: 'Seeking',         value: 'NASA Internship 2025' },
  { icon: '🎮', label: 'Long-term Goal',  value: 'AAA / Indie Game Development' },
]

// ─── EXPERIENCE & EDUCATION ───────────────────────────────────────────────────

export interface ExperienceEntry {
  period: string
  title: string
  org: string
  location?: string
  description: string
  tags: string[]
  badge?: string
}

export const experience: ExperienceEntry[] = [
  {
    period: '2023 – Present',
    title: 'Full-Stack Developer',
    org: 'Delmarva Digital',
    location: 'Laurel, DE',
    description:
      'Sole developer on an internal project management platform. Responsible for the full stack — UI/UX design in Angular with PrimeNG, ColdFusion REST APIs, MariaDB schema design, JWT authentication, and Stripe payment integration. Took the project from requirements gathering to live production.',
    tags: ['Angular', 'TypeScript', 'ColdFusion', 'MariaDB', 'JWT', 'Stripe', 'PrimeNG'],
  },
  {
    period: 'Summer 2025',
    title: 'Software Engineering Intern',
    org: 'NASA Wallops Flight Facility',
    location: 'Virginia',
    description:
      'Applied to two internship projects — HESTO and S3PO Database Development. Prepared application materials highlighting database architecture experience, compiled a LaTeX résumé, and attended a regional STEM career fair to connect with the internship coordinator.',
    tags: ['Database Architecture', 'Space Systems', 'Research'],
    badge: 'Candidate',
  },
  {
    period: '2021 – 2025',
    title: 'B.S. Computer Science',
    org: 'Salisbury University',
    location: 'Salisbury, Maryland',
    description:
      'Coursework spanning full-stack development, statistics, systems design, database theory, and psychology. Applied classroom knowledge directly in production through simultaneous professional work at Delmarva Digital.',
    tags: ['Computer Science', 'Algorithms', 'Systems Design', 'Statistics'],
  },
  {
    period: '2024',
    title: 'Unity Junior Programmer Certification',
    org: 'Unity Learn Pathways',
    description:
      'Completed the Essentials and Junior Programmer learning paths, building several projects including a 2D platformer and interactive simulations. Established a solid foundation in C#, Unity physics, scene architecture, and the Unity Editor workflow.',
    tags: ['Unity', 'C#', '2D / 3D', 'Game Development'],
  },
]

// ─── CONTACT ──────────────────────────────────────────────────────────────────

export const contact = {
  heading: 'Open to Opportunities',
  sub: "Whether you're looking for a full-stack developer, a collaborator on a game project, or just want to connect — my inbox is open.",
  links: [
    { icon: '✉', label: 'Email Me',  href: 'mailto:your@email.com' },
    { icon: '⌥', label: 'GitHub',    href: 'https://github.com/username' },
    { icon: '🔗', label: 'LinkedIn',  href: 'https://linkedin.com/in/username' },
    { icon: '📄', label: 'Résumé',    href: '#' },
  ],
  runes: 'ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ',
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

export const footer = {
  left: '© 2025 Thomas · Eastern Shore, Maryland',
  runes: 'ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ',
  right: 'Built with frost and will',
}

// ─── SECTION LABELS ───────────────────────────────────────────────────────────

export const sectionLabels = {
  work:       { rune: 'ᚱ', text: 'Selected Work' },
  about:      { rune: 'ᛁ', text: 'About Me' },
  skills:     { rune: 'ᚦ', text: 'Technical Skills' },
  details:    { rune: 'ᚨ', text: 'Details' },
  experience: { rune: 'ᚨ', text: 'Experience & Education' },
  contact:    { rune: 'ᚲ', text: 'Get in Touch' },
}
