/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        karla: "Karla",
      },
      colors: {
        cyans: "hsl(179, 62%, 43%)",
        brightYellow: "hsl(71, 73%, 54%)",
        lightGray: "hsl(204, 43%, 93%)",
        grayishBlue: "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
