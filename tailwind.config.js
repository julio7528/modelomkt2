/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "tiffany-blue": "#A0E7E5",
        "mint": "#B4F8C8",
        "hot-pink": "#FFAEBC",
        "yellow": "#FBE7C6",
        "background-light": "#f8fafc",
        "background-dark": "#111827",
        "text-light": "#1f2937",
        "text-dark": "#f3f4f6",
      },
      fontFamily: {
        "display": ["Montserrat", "Poppins", "sans-serif"],
        "body": ["Lato", "Raleway", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
};
