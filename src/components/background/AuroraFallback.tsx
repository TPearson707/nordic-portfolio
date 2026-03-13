// src/components/background/AuroraFallback.tsx
// Pure-CSS aurora used when WebGL/Three.js is unavailable.

export default function AuroraFallback() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Band 1 */}
      <div
        className="absolute"
        style={{
          top: '-10%',
          left: '-10%',
          right: '-10%',
          height: '45%',
          background:
            'linear-gradient(135deg, rgba(45,212,191,0.12) 0%, rgba(56,189,248,0.14) 50%, rgba(129,140,248,0.1) 100%)',
          filter: 'blur(60px)',
          animation: 'auroraFlow 14s ease-in-out infinite',
        }}
      />
      {/* Band 2 */}
      <div
        className="absolute"
        style={{
          top: '5%',
          left: '-20%',
          right: '-20%',
          height: '35%',
          background:
            'linear-gradient(135deg, rgba(129,140,248,0.09) 0%, rgba(56,189,248,0.11) 60%, rgba(45,212,191,0.08) 100%)',
          filter: 'blur(80px)',
          animation: 'auroraFlow 14s ease-in-out infinite',
          animationDelay: '4s',
        }}
      />
      {/* Band 3 */}
      <div
        className="absolute"
        style={{
          top: '-5%',
          left: '-15%',
          right: '-15%',
          height: '30%',
          background:
            'linear-gradient(135deg, rgba(45,212,191,0.06) 0%, rgba(168,200,232,0.08) 50%, rgba(56,189,248,0.07) 100%)',
          filter: 'blur(100px)',
          animation: 'auroraFlow 14s ease-in-out infinite',
          animationDelay: '8s',
        }}
      />
    </div>
  )
}
