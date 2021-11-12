const colors = require('tailwindcss/colors');

module.exports = {
    purge:['./*.html'],
    theme: {
      extend: {
        screens: {
          'xs': '366px',
          // => @media (min-width: 366px) {...}

          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
        colors: {
          transparent: 'transparent',
          black: colors.black,
          white: colors.white,
          gray: colors.trueGray,
          indigo: colors.indigo,
          red: colors.rose,
          yellow: colors.amber
        },
        spacing: {
          sm : '0.5rem',
          md : '0.7rem',
          lg : '1rem',
          xl : '2rem',
        },
        minWidth: {
          '0': '0',
          '1/4': '25%',
          '1/2': '50%',
          '3/4': '75%',
          'full': '100%',
         },
        opacity: {
          '0': '0',
          '20': '0.2',
          '40': '0.4',
          '60': '0.6',
          '80': '0.8',
          '100': '1',
        },
         backgroundImage: {
         'header': "url('../Ressources/banner-img.jpg')",
        },
        fontFamily: {

          'sans': ['ui-sans-serif', 'system-ui'],
   
          'serif': ['ui-serif', 'Georgia'],
   
          'mono': ['ui-monospace', 'SFMono-Regular'],
   
          'display': ['Oswald'],
   
          'body': ['"Open Sans"'],
         },
      }
    }
  }