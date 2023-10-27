const defaultTheme = require('tailwindcss/defaultTheme')
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
        sans: [
          'var(--font-sairaSemiCondensed)',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        pokedex: {
          body: '#cd1030',
          border: '#73121E',
          screen: '#032d28',
        },
      },
    },
  },
  plugins: [],
}
export default config
