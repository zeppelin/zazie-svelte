/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        zazie: {
          pink: '#FC6A94',
          green: '#009263',
        },
      },
    }
  },
  plugins: []
};
