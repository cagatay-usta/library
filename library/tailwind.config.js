/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#d44b50",
        },

        support: {
          DEFAULT: "#f2d9ae",
        },

        neutral: {
          DEFAULT: "#313031",
        },
      },
    },
  },
  plugins: [],
};
