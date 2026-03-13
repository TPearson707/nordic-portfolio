// src/components/background/AuroraCanvas.tsx
// Fixed full-screen Three.js canvas that renders layered aurora bands.

import { Canvas } from '@react-three/fiber'
import AuroraBand from './AuroraBand'
import { nordicAurora, type AuroraBandConfig } from './auroraConfig'

interface AuroraCanvasProps {
  bands?: AuroraBandConfig[]
  className?: string
}

export default function AuroraCanvas({
  bands = nordicAurora,
  className,
}: AuroraCanvasProps) {
  return (
    <div
      className={`fixed inset-0 z-0 pointer-events-none ${className ?? ''}`}
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        style={{ background: 'transparent' }}
        dpr={1}
        frameloop="always"
      >
        {bands.map((band) => (
          <AuroraBand key={band.id} config={band} />
        ))}
      </Canvas>
    </div>
  )
}
