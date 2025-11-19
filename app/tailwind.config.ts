import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-pure': '#000000',
        'purple-deep': '#6d28d9',
        'purple-royal': '#8b5cf6',
        'blue-primary': '#3b82f6',
        'gold-primary': '#fbbf24',
        'orange-primary': '#f97316',
        'green-emerald': '#10b981',
      },
      animation: {
        'twinkle': 'twinkle 3s infinite',
        'counter': 'counter 2s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.9' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
