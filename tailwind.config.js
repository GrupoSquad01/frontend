/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'background': '#06163A',
        'roxo': '#502694',
        'cinza-1': '#EFF4FB',
        'cinza-2': '#E2E8F0',
        'cinza-3': '#B8C2CC',
        'white': '#ffffff',
        'azul': '#3C50E0',
      }
    }
  },
  plugins: [],
}