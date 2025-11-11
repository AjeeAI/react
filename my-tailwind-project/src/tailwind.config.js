/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project structure
  ],
  theme: {
    
    extend: {
      colors: {
        "milkish-brown": "#DFD9D9BD",
      },
    },
  },
  plugins: [],
};
