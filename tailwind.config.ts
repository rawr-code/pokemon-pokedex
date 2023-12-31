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
          // body: '#d7391c',
          border: '#73121E',
          wrapper: '#032d28',
          // wrapper: '#363f3e',
          screen: '#f8f7f7',
        },
      },
    },
  },
  plugins: [],
}
export default config
