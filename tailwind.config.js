/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        roboto:["Noto Sans","sans-sarif"],
        intra:["Inter","sans-sarif"]
      },
      backgroundImage : {
        'custom-gradiet':'linear-gradient(228.26deg, #FEF2EB 0%, #F1F1F1 46.25%, #E4E0EA 99.86%);',
        'hover-gradient' : 'linear-gradient(228.34deg, #FEF2EB 0%, #F1F1F1 46.31%, #E4E0EA 100%);'
        
      },
      colors:{
        'untitled-ui--primary600': '#7f56d9',
    'untitled-ui--gray900': '#101828',
    'untitled-ui--primary500': '#9e77ed',
    'color': 'white',
    'untitled-ui--gray800': '#1d2939',
    'main-gray': '#7c7c7c',
    
    'untitled-ui--primary700': '#6941c6',
    'main-white': '#fcfaf9',
    'untitled-ui--primary800': '#53389e',
    'main-black': '#040403',

    'untitled-ui--gray50-2': '#f9fafb',
    'tertiary-color': '#fac742',
    'main-min': '#1dcda3',
    'untitled-ui--gray200': '#eaecf0',
    'untitled-ui--gray500': '#667085',
    'untitled-ui--white': 'white',
    'untitled-ui--gray600': '#475467',
    'untitled-ui--gray100': '#f2f4f7',
    'untitled-ui--primary100': '#f4ebff',
    'untitled-ui--gray300': '#d0d5dd',
    'untitled-ui--gray700': '#344054',
    'untitled-ui--primary50': '#f9f5ff',
    'untitled-ui--gray400': '#98a2b3',
    'untitled-ui--success50': '#ecfdf3',
    'untitled-ui--success700': '#027a48',
    'untitled-ui--primary300': '#d6bbfb',
    'untitled-ui--warning300': '#fec84b',
      }
    },
  },
  plugins: [],
  prefix: '',
}

