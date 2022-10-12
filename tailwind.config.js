/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        facebook: '#3B5998',
        appBg: '#F4F5FA',
        customButton: '#2D9CDB',
      }
    },
  },
  plugins: [],
};
