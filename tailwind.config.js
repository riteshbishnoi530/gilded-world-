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
          
          fontSize: {
            'custom-xl': '22px',
            'custom-5xl': '40px',
          },
          colors: {
            'off-white': '#FFFFFF91',
            'off-sky': '#1BABFE',
            'off-blue': '#815CC8',
          }
        },
      }, 
     plugins: [], 
   };
   
  