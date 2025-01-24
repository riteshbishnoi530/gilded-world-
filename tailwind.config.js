/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "16px",
                screens: {
                  "2xl": "1315px",
                },
              },
          backgroundImage:{
            "hero": "url('src/assets/images/hero-bg-img.webp')",
            "utility": "url('src/assets/images/utility-bg.webp')",
            "environment": "url('src/assets/images/gildedworld-environment.webp')",
          },
          fontSize: {
            'custom-xl': '22px',
            'custom-5xl': '40px',
          },
          colors: {
            'off-white': '#FFFFFF91',
          }
        },
      }, 
     plugins: [], 
   };
   
  