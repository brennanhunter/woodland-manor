import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['var(--font-bebas-neue)', 'cursive'],
      },
      colors: {
        woodland: {
          primary: '#26625d',
          secondary: '#1e524e',
          accent: '#329790',
          forest: '#1a4843',
          dark: '#1a4843',  // Added woodland-dark
          light: '#b8d4d1',
          cream: '#ede5d1',
        },
        stone: {
          50: '#ede5d1',
          100: '#e6dcc6',
          200: '#d9cdb5',
          300: '#c7b8a0',
          500: '#64748b',
          700: '#334155',
          900: '#1e293b',
        }
      },
    },
  },
  plugins: [],
}
export default config
