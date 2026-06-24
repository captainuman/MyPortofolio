/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#06070F',
        surface: '#0E1120',
        surface2: '#141833',
        accent: '#00F0FF',
        accent2: '#B14EFF',
        ink: '#E7EAF6',
        muted: '#8B90B3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 48px' },
        },
        scan: {
          '0%': { transform: 'translateY(-10%)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(110vh)', opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.15)' },
        },
        blink: {
          '0%, 50%': { opacity: 1 },
          '50.01%, 100%': { opacity: 0 },
        },
      },
      animation: {
        'grid-pan': 'grid-pan 3s linear infinite',
        scan: 'scan 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0,240,255,0.25)',
        'glow-violet': '0 0 40px rgba(177,78,255,0.3)',
      },
    },
  },
  plugins: [],
}