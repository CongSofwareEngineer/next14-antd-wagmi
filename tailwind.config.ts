import type { Config } from "tailwindcss"
const {nextui} = require("@nextui-org/react");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
     
  },
  plugins: [
    nextui(),
  ],
} satisfies Config

export default config