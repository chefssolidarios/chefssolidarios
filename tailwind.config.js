/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "support-hands": "url('/images/support-hands.webp')",
        "delivery-man": "url('/images/delivery-man.webp')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        chefs: {
          50: "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc4c4",
          300: "#ff9c9b",
          400: "#ff6261",
          500: "#ff3130",
          600: "#f11211",
          700: "#cb0b0a",
          800: "#a30d0c",
          900: "#8a1312",
          950: "#4c0303",
        },
        text: "#000",
      },
    },
  },
  plugins: [],
};
