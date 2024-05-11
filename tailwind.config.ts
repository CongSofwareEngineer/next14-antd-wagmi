import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  prefix: '',
  theme: {},
  darkMode: 'class',
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-title': {
          fontFamily: 'var(--font-title) !important',
          fontSize: '40px',
          fontWeight: '700'
        },
        '.text-medium': {},
        '.text-common': {}
      }

      addUtilities(newUtilities)
    })
  ]
} satisfies Config

export default config
