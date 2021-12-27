const colors = require('tailwindcss/colors');

module.exports = {
    purge:['./*.html'],
    darkMode: 'class',
    theme: {
      screens: {
        'extra-small': {'min': '275px', 'max':'474px'},
        'small': {'min': '475px', 'max': '639px'},
        'medium': {'min': '640px', 'max': '959px'},
        'large': {'min': '960px', 'max': '1269px'},
        'extra-large': {'min': '1270px', 'max': '1919px'},
        'xxl': {'min': '1920px'},
      },
      extend: {
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