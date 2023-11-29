/** @type {import("tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "light": "#faf6e5",
        "dark": "#051B30",
        "primary": "#0d3b66ff",
        "secondary": "#f95738ff",
        "tertiary": "#f4d35eff",
        "quatenary": "#ee964bff",
        "quinary": "#faf0caff",
      },
      fontFamily: {
        "sans": ["Roboto", "sans-serif"]
      },
    },
    plugins: [],
  },
};
