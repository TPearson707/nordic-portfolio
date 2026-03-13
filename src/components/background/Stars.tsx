// src/components/background/Stars.tsx
// CSS-based star field. Two layers with offset twinkle phases.

export default function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Layer 1 */}
      <div
        className="absolute inset-0"
        style={{
          animation: 'twinkle 7s ease-in-out infinite alternate',
          backgroundImage: `
            radial-gradient(1px 1px at 7%  9%,  rgba(200,223,240,.9)  0%, transparent 100%),
            radial-gradient(1px 1px at 23% 6%,  rgba(200,223,240,.6)  0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 41% 4%, rgba(200,223,240,.95) 0%, transparent 100%),
            radial-gradient(1px 1px at 63% 10%, rgba(200,223,240,.5)  0%, transparent 100%),
            radial-gradient(1px 1px at 80% 7%,  rgba(200,223,240,.7)  0%, transparent 100%),
            radial-gradient(1px 1px at 93% 13%, rgba(200,223,240,.6)  0%, transparent 100%),
            radial-gradient(1px 1px at 14% 20%, rgba(200,223,240,.4)  0%, transparent 100%),
            radial-gradient(1px 1px at 53% 17%, rgba(200,223,240,.5)  0%, transparent 100%),
            radial-gradient(1px 1px at 87% 24%, rgba(200,223,240,.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 36% 28%, rgba(200,223,240,.3)  0%, transparent 100%),
            radial-gradient(1px 1px at 2%  45%, rgba(200,223,240,.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 61% 42%, rgba(200,223,240,.4)  0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 76% 38%, rgba(200,223,240,.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 44% 55%, rgba(200,223,240,.3)  0%, transparent 100%),
            radial-gradient(1px 1px at 92% 60%, rgba(200,223,240,.2)  0%, transparent 100%)
          `,
        }}
      />
      {/* Layer 2 — offset twinkle phase */}
      <div
        className="absolute inset-0"
        style={{
          animation: 'twinkle 7s ease-in-out infinite alternate',
          animationDelay: '3.5s',
          backgroundImage: `
            radial-gradient(1px 1px at 19% 32%, rgba(200,223,240,.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 72% 27%, rgba(200,223,240,.6) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 90% 31%, rgba(200,223,240,.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 48% 36%, rgba(200,223,240,.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 4%  38%, rgba(200,223,240,.3)  0%, transparent 100%),
            radial-gradient(1px 1px at 33% 48%, rgba(200,223,240,.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 58% 52%, rgba(200,223,240,.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 82% 49%, rgba(200,223,240,.35) 0%, transparent 100%)
          `,
        }}
      />
    </div>
  )
}
