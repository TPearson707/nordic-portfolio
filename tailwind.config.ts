// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],

  theme: {
    extend: {

      colors: {
        void:  'var(--void)',

        stone: {
          DEFAULT: 'var(--stone)',
          dark:    'var(--stone-dark)',
          mid:     'var(--stone-mid)',
          light:   'var(--stone-light)',
        },

        frost: {
          DEFAULT: 'var(--frost)',
          dim:     'var(--frost-dim)',
          pale:    'var(--frost-pale)',
        },

        ice:   'var(--ice)',

        aurora: {
          teal:   'var(--aurora-teal)',
          blue:   'var(--aurora-blue)',
          purple: 'var(--aurora-purple)',
        },

        silver: {
          DEFAULT: 'var(--silver)',
          bright:  'var(--silver-bright)',
        },

        blood: 'var(--blood)',

        parchment: {
          DEFAULT: 'var(--parchment)',
          dark:    'var(--parchment-dark)',
          deep:    'var(--parchment-deep)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          faded:   'var(--ink-faded)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          bright:  'var(--gold-bright)',
          pale:    'var(--gold-pale)',
        },
      },

      fontFamily: {
        cinzel:             ['"Cinzel"', 'serif'],
        'cinzel-decorative': ['"Cinzel Decorative"', 'serif'],
        cormorant:          ['"Cormorant Garamond"', 'Georgia', 'serif'],
        imfell:             ['"IM Fell English"', 'serif'],
        fraktur:            ['"UnifrakturMaguntia"', 'cursive'],
      },

      animation: {
        'aurora-flow':  'auroraFlow 14s ease-in-out infinite',
        'twinkle':      'twinkle 7s ease-in-out infinite alternate',
        'sparkle':      'sparkle 8s ease-in-out infinite alternate',
        'ring-pulse':   'ringPulse 4s ease-in-out infinite',
        'icon-glow':    'iconGlow 4s ease-in-out infinite alternate',
        'rise-in':      'riseIn 0.8s ease both',
        'scroll-drop':  'scrollDrop 2s ease-in-out infinite',
        'bar-fill':     'barFill 1.8s cubic-bezier(0.4, 0, 0.2, 1) both',
        'dot-pulse':    'dotPulse 2s ease-in-out infinite',
        'visual-pulse': 'visualPulse 6s ease-in-out infinite alternate',
        'seal-glow':    'sealGlow 3s ease-in-out infinite alternate',
        'fade-in':      'fadeIn 1s ease both',
      },

      keyframes: {
        auroraFlow: {
          '0%':   { opacity: '0',    transform: 'translateX(-6%) scaleY(0.8)' },
          '20%':  { opacity: '1'                                               },
          '50%':  { opacity: '0.65', transform: 'translateX(6%) scaleY(1.3)'  },
          '80%':  { opacity: '1'                                               },
          '100%': { opacity: '0',    transform: 'translateX(-6%) scaleY(0.8)' },
        },
        twinkle: {
          'from': { opacity: '0.5' },
          'to':   { opacity: '1'   },
        },
        sparkle: {
          '0%':   { opacity: '0.4' },
          '100%': { opacity: '1'   },
        },
        ringPulse: {
          '0%, 100%': {
            boxShadow: '0 0 16px rgba(56,189,248,0.2), 0 0 40px rgba(56,189,248,0.08)',
          },
          '50%': {
            boxShadow: '0 0 28px rgba(56,189,248,0.45), 0 0 70px rgba(56,189,248,0.18)',
          },
        },
        iconGlow: {
          'from': { filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.3))' },
          'to':   { filter: 'drop-shadow(0 0 22px rgba(56,189,248,0.75)) drop-shadow(0 0 44px rgba(45,212,191,0.3))' },
        },
        riseIn: {
          'from': { opacity: '0', transform: 'translateY(18px)' },
          'to':   { opacity: '1', transform: 'translateY(0)'    },
        },
        scrollDrop: {
          '0%, 100%': { transform: 'scaleY(1)',   opacity: '1'   },
          '50%':      { transform: 'scaleY(0.6)', opacity: '0.4' },
        },
        barFill: {
          'from': { width: '0' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1'   },
          '50%':      { opacity: '0.3' },
        },
        visualPulse: {
          'from': { opacity: '0.5', transform: 'scale(1)'    },
          'to':   { opacity: '1',   transform: 'scale(1.05)' },
        },
        sealGlow: {
          'from': {
            boxShadow: '0 0 20px rgba(184,134,11,0.4), 0 0 40px rgba(184,134,11,0.15), inset 0 2px 6px rgba(255,220,100,0.4)',
          },
          'to': {
            boxShadow: '0 0 40px rgba(184,134,11,0.7), 0 0 80px rgba(184,134,11,0.3), inset 0 2px 6px rgba(255,220,100,0.4)',
          },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(12px)' },
          'to':   { opacity: '1', transform: 'translateY(0)'    },
        },
      },

      maxWidth: {
        'page':    '1100px',
        'scroll':  '960px',
        'prose':   '560px',
        'sidebar': '280px',
      },

      boxShadow: {
        'frost-glow':   '0 0 20px rgba(56,189,248,0.15), 0 0 60px rgba(56,189,248,0.07)',
        'frost-strong': '0 0 32px rgba(56,189,248,0.4),  0 0 80px rgba(56,189,248,0.18)',
        'card-hover':   '0 12px 40px rgba(0,0,0,0.5), 0 0 24px rgba(56,189,248,0.07)',
        'scroll-body':  '0 0 80px rgba(184,134,11,0.25), 0 0 160px rgba(184,134,11,0.1), inset 0 0 40px rgba(139,108,46,0.15), 0 20px 60px rgba(0,0,0,0.8)',
        'gold-glow':    '0 0 30px rgba(184,134,11,0.4), 0 0 60px rgba(184,134,11,0.15)',
      },

    },
  },

  plugins: [],
} satisfies Config
