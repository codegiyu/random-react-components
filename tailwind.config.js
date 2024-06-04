/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBg: '#15161B',
        dark: '#1E1F23',
        darkOpaque: '#00000099',
        rouge: '#C81313',
        ash: '#666874',
        darkAsh: '#66687442',
      },
      boxShadow: {
        profile: '0 4px 20px rgba(255, 252, 252, 0.25)',
      },
      fontFamily: {
        montserrat: ["'Montserrat'", 'sans-serif'],
        poppins: ["'Poppins'", 'sans-serif'],
        lobster: ["'Lobster'", 'cursive'],
      },
    },
  },
  plugins: [],
};
