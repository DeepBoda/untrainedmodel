/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'text-glitch': 'text-glitch 1s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 188, 212, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(233, 30, 99, 0.7), 0 0 60px rgba(0, 188, 212, 0.3)',
          },
        },
        'text-glitch': {
          '0%': {
            textShadow: '0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff00ff, 0.025em 0.04em 0 #ffff00',
          },
          '15%': {
            textShadow: '0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff00ff, 0.025em 0.04em 0 #ffff00',
          },
          '16%': {
            textShadow: '-0.05em -0.025em 0 #00ffff, 0.025em 0.035em 0 #ff00ff, -0.05em -0.05em 0 #ffff00',
          },
          '49%': {
            textShadow: '-0.05em -0.025em 0 #00ffff, 0.025em 0.035em 0 #ff00ff, -0.05em -0.05em 0 #ffff00',
          },
          '50%': {
            textShadow: '0.05em 0.035em 0 #00ffff, 0.03em 0 0 #ff00ff, 0 -0.04em 0 #ffff00',
          },
          '99%': {
            textShadow: '0.05em 0.035em 0 #00ffff, 0.03em 0 0 #ff00ff, 0 -0.04em 0 #ffff00',
          },
          '100%': {
            textShadow: '-0.05em 0 0 #00ffff, -0.025em -0.04em 0 #ff00ff, -0.04em -0.025em 0 #ffff00',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};