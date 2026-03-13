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
        primary: {
          DEFAULT: '#d41132',
          hover:   '#b50e2a',
          muted:   'rgba(212,17,50,0.1)',
        },
        'bg-dark':  '#0d0608',
        'bg-card':  '#160b0d',
        'border-dark': '#2e1a1d',
        'accent-blue': '#00d4ff',
        success: '#0bda92',
        'bg-light': '#f8f6f6',
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
          'radial-gradient(circle at 1px 1px, rgba(212,17,50,0.04) 1px, transparent 0)',
        'grid-line':
          'linear-gradient(rgba(212,17,50,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,17,50,0.03) 1px, transparent 1px)',
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
