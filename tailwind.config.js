/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'custom-light-orange': '#e1b711',
      'custom-orange': '#ffa500',
      'custom-dark-brown': '#524d32',
      'custom-dark-gray': '#2c2e31',
      'white': '#dfe2d7',
      'black': '#000000',
      'custom-blue': '#0948d4',
      'off-white': '#d9e0e8',
    },
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
}
