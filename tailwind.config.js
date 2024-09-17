/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orangele: "#1f73cc",
      },
      fontFamily: {
        sans: ["Roboto"],
      },
    },
  },
  plugins: [],
};
