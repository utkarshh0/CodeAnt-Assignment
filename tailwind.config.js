/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#0049C6',
      },
    },
  },
  plugins: [],
}

