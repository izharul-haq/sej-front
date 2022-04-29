module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'mango': {
          '50': '#FEEFC1',
          '100': '#FEEAAD',
          '200': '#FDDF85',
          '300': '#FDD55D',
          '400': '#FCCA34',
          '500': '#FCC00C',
          '600': '#CD9B03',
          '700': '#967102',
          '800': '#5F4701',
          '900': '#271D00'
        },
        'space-cadet': {
          '50': '#AEBFEA',
          '100': '#92A8E3',
          '200': '#597BD4',
          '300': '#3055B6',
          '400': '#213A7E',
          '500': '#122045',
          '600': '#0F1A39',
          '700': '#0C152D',
          '800': '#090F21',
          '900': '#050914'
        },
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}