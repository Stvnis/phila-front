'use client';
import { createTheme } from '@mui/material/styles';
import { montserrat } from '@phila-front/assets/fonts';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFD177',
      dark: '#FFEDAE',
      light: '#FFDB65',
    },
    secondary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#1D1D1C',
      secondary: '#1D1D1C',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FBFBFB',
    },
    divider: '#1D1D1C',
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
    fontFamily: [montserrat.style.fontFamily, 'sans-serif'].join(','),
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

        text: {
          color: '#f4a227',
          fontWeight: 500,
          letterSpacing: -0.9,
          textTransform: 'none',
          fontSize: 18,
          transition: '0.2s all ease',
        }
      },
    },
  },
});
