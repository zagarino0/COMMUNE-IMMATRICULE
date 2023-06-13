/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': 'url("./src/assets/bord.png")',
        'logo': 'url("./src/assets/logo.png")',
        'hoteldeville': 'url("./src/assets/hoteldeville.jpg")',
        'majunga01': 'url("./src/assets/majunga01.jpg")',
        'majunga02': 'url("./src/assets/majunga02.jpg")',
      },
    },
  },
  plugins: [],
}