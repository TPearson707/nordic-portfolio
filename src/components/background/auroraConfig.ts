// src/components/background/auroraConfig.ts
// All tunable aurora band parameters. Edit here without touching shader code.

export interface AuroraBandConfig {
  id: string
  positionY: number
  positionZ: number
  scaleX: number
  scaleY: number
  colorA: string
  colorB: string
  colorC: string
  opacity: number
  timeOffset: number
  waveFreqX: number
  waveFreqX2: number
  waveAmpY: number
  waveAmpY2: number
  waveSpeedPrimary: number
  waveSpeedSecondary: number
  pulseSpeed: number
  pulseMin: number
  pulseMax: number
  segmentsX: number
  segmentsY: number
  edgeFadeX: number
  edgeFadeX2: number
}

// ── PRESET: Nordic Design (default) ──────────────────────────────────────────
export const nordicAurora: AuroraBandConfig[] = [
  {
    id: 'band-primary',
    positionY: 2.0,  positionZ: -4.0,
    scaleX: 16,      scaleY: 3.0,
    colorA: '#2dd4bf', colorB: '#38bdf8', colorC: '#818cf8',
    opacity: 0.18,
    timeOffset: 0,
    waveFreqX: 2.0,  waveFreqX2: 5.0,
    waveAmpY: 0.08,  waveAmpY2: 0.04,
    waveSpeedPrimary: 0.4, waveSpeedSecondary: 0.7,
    pulseSpeed: 0.5, pulseMin: 0.7, pulseMax: 1.0,
    segmentsX: 64,   segmentsY: 16,
    edgeFadeX: 0.15, edgeFadeX2: 0.15,
  },
  {
    id: 'band-secondary',
    positionY: 1.5,  positionZ: -5.0,
    scaleX: 14,      scaleY: 2.5,
    colorA: '#818cf8', colorB: '#38bdf8', colorC: '#2dd4bf',
    opacity: 0.12,
    timeOffset: 5.0,
    waveFreqX: 3.0,  waveFreqX2: 0,
    waveAmpY: 0.06,  waveAmpY2: 0,
    waveSpeedPrimary: 0.3, waveSpeedSecondary: 0,
    pulseSpeed: 0.35, pulseMin: 0.6, pulseMax: 1.0,
    segmentsX: 64,   segmentsY: 16,
    edgeFadeX: 0.20, edgeFadeX2: 0.20,
  },
  {
    id: 'band-tertiary',
    positionY: 2.3,  positionZ: -6.0,
    scaleX: 18,      scaleY: 2.0,
    colorA: '#2dd4bf', colorB: '#a8c8e8', colorC: '#38bdf8',
    opacity: 0.07,
    timeOffset: 9.0,
    waveFreqX: 1.5,  waveFreqX2: 0,
    waveAmpY: 0.05,  waveAmpY2: 0,
    waveSpeedPrimary: 0.25, waveSpeedSecondary: 0,
    pulseSpeed: 0.6, pulseMin: 0.5, pulseMax: 1.0,
    segmentsX: 48,   segmentsY: 12,
    edgeFadeX: 0.10, edgeFadeX2: 0.10,
  },
]

// ── PRESET: More Vivid ────────────────────────────────────────────────────────
export const vividAurora: AuroraBandConfig[] = [
  { ...nordicAurora[0]!, opacity: 0.28, waveAmpY: 0.12, pulseMin: 0.8 },
  { ...nordicAurora[1]!, opacity: 0.20, waveAmpY: 0.09 },
  { ...nordicAurora[2]!, opacity: 0.12 },
]

// ── PRESET: Subtle ────────────────────────────────────────────────────────────
export const subtleAurora: AuroraBandConfig[] = [
  { ...nordicAurora[0]!, opacity: 0.10, waveAmpY: 0.04, scaleY: 2.0 },
  { ...nordicAurora[1]!, opacity: 0.07, scaleY: 1.8 },
]
