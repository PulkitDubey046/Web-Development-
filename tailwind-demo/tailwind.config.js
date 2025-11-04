/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*/{js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      blue:"#1FB6FF",
      mypink:"#FF49DB",
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

