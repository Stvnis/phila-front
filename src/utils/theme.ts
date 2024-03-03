'use client';
import { createTheme } from '@mui/material/styles';
import { EUkraine } from '@phila-front/assets/fonts';


export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFDC61',
      dark: '#ffedae',
      light: '#ffdb65',
    },
    secondary: {
      main: '#262626',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1288,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      EUkraine.style.fontFamily,
      'sans-serif',
    ].join(','),

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          // border: 0,
          // borderRadius: 3,
          // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          boxShadow: 'none',
          // color: 'white',
          // height: 48,
          // padding: '0 30px',
        },
      },
    },
  },
}); 