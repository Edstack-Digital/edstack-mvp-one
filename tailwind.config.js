import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fonts: {
        custom: ["Satoshi", "Vastago", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 600,
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

