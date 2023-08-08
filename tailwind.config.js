/** @type {import('tailwindcss').Config} */
// let plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#0C0B08'
      },
      fontFamily:{
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        nunito:["Poppins","Roboto"],
      },
      backgroundImage: {
        'map': "url('/map.png')",
        'whoBg':"url('/who-bg.svg')",
        'techBg':"url('/Group 25.svg')",
        'clientBg':"url('/client-bg.svg')",
        'contactBg':"url('/contact-bg.svg')",
        'footerBg':"url('/footer-bg.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
