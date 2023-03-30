/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    'exo': ['Exo 2','sans-serif'],
    
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#21d374",
        
"secondary": "#6047EC",
        
"accent": "#efbffc",
        
"neutral": "#111111",
        
"base-100": "#FAFAFA",
        
"info": "#95BFE4",
        
"success": "#1AA289",
        
"warning": "#F2BA4A",
        
"error": "#E02459",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

