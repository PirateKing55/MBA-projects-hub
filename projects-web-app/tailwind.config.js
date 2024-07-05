/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'loop': 'loop 2s ease-in-out infinite',
        'upDown': 'upDown 2s ease-in-out infinite',
      },
      keyframes: {
        loop: {
          '0%, 100%': {
            transform: 'translateX(-80px)',
          },
          '50%': {
            transform: 'translateX(0)'
          }
        },
        upDown: {
          '0%, 100%': {
            transform: 'translateY(50px)',
          },
          '50%': {
            transform: 'translateY(0)'
          }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
