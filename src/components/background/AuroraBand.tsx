// src/components/background/AuroraBand.tsx
// Single configurable aurora band with GLSL vertex displacement + fragment blending.

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { AuroraBandConfig } from './auroraConfig'

const vertexShader = `
  uniform float uTime;
  uniform float uWaveFreqX;
  uniform float uWaveFreqX2;
  uniform float uWaveAmpY;
  uniform float uWaveAmpY2;
  uniform float uWaveSpeedPrimary;
  uniform float uWaveSpeedSecondary;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;

    pos.y += sin(pos.x * uWaveFreqX + uTime * uWaveSpeedPrimary) * uWaveAmpY;

    if (uWaveFreqX2 > 0.0) {
      pos.y += sin(pos.x * uWaveFreqX2 + uTime * uWaveSpeedSecondary) * uWaveAmpY2;
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec3  uColorA;
  uniform vec3  uColorB;
  uniform vec3  uColorC;
  uniform float uOpacity;
  uniform float uPulseSpeed;
  uniform float uPulseMin;
  uniform float uPulseMax;
  uniform float uEdgeFadeX;
  uniform float uEdgeFadeX2;
  varying vec2 vUv;

  void main() {
    vec3 color = mix(uColorA, uColorB, vUv.x);
    color = mix(color, uColorC, sin(vUv.x * 3.14159) * 0.4);

    float alphaY = sin(vUv.y * 3.14159);
    float alphaX = smoothstep(0.0, uEdgeFadeX, vUv.x)
                 * smoothstep(1.0, 1.0 - uEdgeFadeX2, vUv.x);
    float alpha = alphaY * alphaX;

    float pulse = uPulseMin + (uPulseMax - uPulseMin)
                  * (0.5 + 0.5 * sin(uTime * uPulseSpeed));

    gl_FragColor = vec4(color, alpha * uOpacity * pulse);
  }
`

interface AuroraBandProps {
  config: AuroraBandConfig
}

export default function AuroraBand({ config }: AuroraBandProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(() => ({
    uTime:               { value: config.timeOffset },
    uColorA:             { value: new THREE.Color(config.colorA) },
    uColorB:             { value: new THREE.Color(config.colorB) },
    uColorC:             { value: new THREE.Color(config.colorC) },
    uOpacity:            { value: config.opacity },
    uWaveFreqX:          { value: config.waveFreqX },
    uWaveFreqX2:         { value: config.waveFreqX2 },
    uWaveAmpY:           { value: config.waveAmpY },
    uWaveAmpY2:          { value: config.waveAmpY2 },
    uWaveSpeedPrimary:   { value: config.waveSpeedPrimary },
    uWaveSpeedSecondary: { value: config.waveSpeedSecondary },
    uPulseSpeed:         { value: config.pulseSpeed },
    uPulseMin:           { value: config.pulseMin },
    uPulseMax:           { value: config.pulseMax },
    uEdgeFadeX:          { value: config.edgeFadeX },
    uEdgeFadeX2:         { value: config.edgeFadeX2 },
  }), [config])

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime() + config.timeOffset
  })

  return (
    <mesh
      ref={meshRef}
      position={[0, config.positionY, config.positionZ]}
      scale={[config.scaleX, config.scaleY, 1]}
    >
      <planeGeometry args={[1, 1, config.segmentsX, config.segmentsY]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
}
