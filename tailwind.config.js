/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1a7a3c",
          "green-dark": "#145f2e",
          gold: "#f4a800",
          dark: "#111111",
          muted: "#666666",
          bg: "#f8f8f6",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-be-vietnam)", "sans-serif"],
      },
      borderRadius: {
        card: "8px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
