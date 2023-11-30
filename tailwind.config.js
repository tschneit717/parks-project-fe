/** @type {import("tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "light": "#faf6e5",
        "dark": "#051B30",
        "primary": "#f95738",
        "secondary": "#0d3b66",
        "tertiary": "#f4d35e",
        "quatenary": "#ee964b",
        "quinary": "#faf0ca",
      },
      fontFamily: {
        "sans": ["Roboto", "sans-serif"],
        "sans-special": ['Space Grotesk', "Roboto", "sans-serif"]
      },
    },
    plugins: [],
  },
};
