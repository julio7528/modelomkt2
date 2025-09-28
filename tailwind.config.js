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
        // MMT Brand Colors - Nova Paleta Harmonizada
        primary: {
          DEFAULT: "#5D2F77", // Roxo principal
          50: "#faf7fc",
          100: "#f3ecf8",
          200: "#e8d5f0",
          300: "#d7b3e3",
          400: "#c088d1",
          500: "#5D2F77",
          600: "#9333ea",
          700: "#7c2d92",
          800: "#6b2c91",
          900: "#5a2c64",
        },
        secondary: {
          DEFAULT: "#3E1E68", // Roxo escuro
          50: "#f8f6fc",
          100: "#f0ebf8",
          200: "#e3daf2",
          300: "#d0bfe8",
          400: "#b899da",
          500: "#3E1E68",
          600: "#8b5cf6",
          700: "#7c3aed",
          800: "#6d28d9",
          900: "#5b21b6",
        },
        accent: {
          DEFAULT: "#E45A92", // Rosa vibrante
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#E45A92",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        support: {
          DEFAULT: "#FFACAC", // Rosa claro
          50: "#fef7f7",
          100: "#feecec",
          200: "#fdd8d8",
          300: "#fcb5b5",
          400: "#f98585",
          500: "#FFACAC",
          600: "#ef4444",
          700: "#dc2626",
          800: "#b91c1c",
          900: "#991b1b",
        },
        // Cores específicas da marca para uso direto
        "brand-purple-dark": "#3E1E68",
        "brand-purple": "#5D2F77", 
        "brand-pink": "#E45A92",
        "brand-pink-light": "#FFACAC",
        
        // Legacy colors for compatibility (mantendo para não quebrar componentes existentes)
        "tiffany-blue": "#A0E7E5",
        "mint": "#B4F8C8",
        "hot-pink": "#FFAEBC",
        "yellow": "#FBE7C6",
        // New brand colors (atualizando com as novas cores)
        "primary-teal": "#5D2F77", // Agora roxo principal
        "secondary-mint": "#3E1E68", // Agora roxo escuro
        "accent-pink": "#E45A92", // Rosa vibrante
        "support-cream": "#FFACAC", // Rosa claro
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
