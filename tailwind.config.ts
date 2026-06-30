import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Crimson — brand / identity accent
        primary: {
          DEFAULT: '#e11d3a',
          hover:   '#c41730',
          muted:   'rgba(225,29,58,0.1)',
        },
        // Electric cyan — data / tech / metrics accent
        'accent-blue': {
          DEFAULT: '#22d3ee',
          hover:   '#0891b2',
          muted:   'rgba(34,211,238,0.1)',
        },
        // Cool near-black surfaces
        'bg-dark':     '#070a0d',
        'bg-elevated': '#0b0f14',
        'bg-card':     '#0f1419',
        'bg-card-hover': '#131b23',
        'border-dark':   '#1b242e',
        'border-strong': '#283442',
        success: '#34d399',
        'bg-light': '#f8fafc',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        ibm:   ['var(--font-ibm)', 'sans-serif'],
        mono:  ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      backgroundImage: {
        'grid-pattern':
          'radial-gradient(circle at 1px 1px, rgba(34,211,238,0.05) 1px, transparent 0)',
        'grid-line':
          'linear-gradient(rgba(148,163,184,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-40': '40px 40px',
        'grid-60': '60px 60px',
      },
      animation: {
        'scan': 'scan 6s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
