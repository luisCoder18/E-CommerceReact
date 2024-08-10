/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f0f0f0', // Color de fondo más claro
        'primary': '#333333', // Color primario
        'secondary': '#555555', // Color secundario
        'accent': '#007BFF', // Color de acento
      },
    },
  },
  plugins: [],
}
