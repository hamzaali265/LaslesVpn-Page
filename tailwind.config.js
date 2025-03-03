/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F53838",
          100: "#F53838FF",
          90: "#F53838E6",
          80: "#F53838CC",
          70: "#F53838B3",
          60: "#F5383899",
          50: "#F5383880",
          40: "#F5383866",
          35: "#F538385E",
          30: "#F538384D",
          20: "#F5383833",
          10: "#F538381A",
          0: "#F5383800",
        },
        secondary: "#0B132A",
        tertiary: "#4F5665",
        borderRed: '#F53855',
        divider: '#EEEFF2',
        desert  : "#F8F8F8",
        borderGray: "#DDDDDD",
        
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
    plugins: [],
  },
};
