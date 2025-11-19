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
    },
  },
  plugins: [],
}

export default config
