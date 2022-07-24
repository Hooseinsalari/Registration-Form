module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        step: {
          'from': { transform: 'scale(1, 0)', opacity: '0' },
          'to': { transform: 'scale(1, 1)', opacity: '1' },
        }
      },
      animation: {
        step: 'step 0.5s',
      }
    },
  },
  plugins: [],
}
