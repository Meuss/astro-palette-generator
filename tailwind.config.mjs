/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    /* desktop-first */
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Monaco', 'Consolas', 'monospace'],
    },
    extend: {
      colors: {
        black: '#13151a',
        'purple-1': '#6b21a8',
        'purple-2': '#e9d5ff',
      },
    },
  },
  plugins: [],
}
