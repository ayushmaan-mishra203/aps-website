/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // adjust to match your folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
