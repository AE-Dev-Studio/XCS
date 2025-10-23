/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // 🚫 disables dark mode completely
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* For IE, Edge, and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    },],
};
