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
        // Primary brand — deep red
        primary: {
          DEFAULT: '#d41132',
          hover:   '#b50e2a',
          muted:   'rgba(212,17,50,0.1)',
        },
        // Page backgrounds
        'bg-dark':  '#12080a',
        'bg-card':  '#1d0e11',
        // Borders
        'border-dark': '#3d2226',
        // Accent blue (AI/ML highlight)
        'accent-blue': '#00d4ff',
        // Positive metric delta
        success: '#0bda92',
        // Surface light (for light-mode bg, not actively used)
        'bg-light': '#f8f6f6',
      },
      fontFamily: {
        display: ['var(--font-lexend)', 'sans-serif'],
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
        // Radial dot grid used on hero section (matches Stitch screen 1)
        'grid-pattern':
          'radial-gradient(circle at 1px 1px, rgba(212,17,50,0.05) 1px, transparent 0)',
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      },
    },
  },
  plugins: [],
}

export default config
