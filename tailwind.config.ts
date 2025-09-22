
import type { Config } from 'tailwindcss'
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#0d0f12', soft: '#14171b' },
        ink: { DEFAULT: '#e5e7eb', mute: '#9ba3af' },
        brand: { 700:'#2e3844', 800:'#21272f' }
      }
    }
  },
  plugins: []
} satisfies Config
