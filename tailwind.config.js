/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'auto-seguro': {
          negro: '#0a0a0a',
          rojo: '#DC2626',
          'rojo-claro': '#EF4444',
          amarillo: '#FCD34D',
          verde: '#25D366',
        }
      }
    },
  },
  plugins: [],
}