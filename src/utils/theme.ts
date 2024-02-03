'use client'
import { createTheme } from "@mui/material/styles";
import { EUkraine } from '@phila-front/assets/fonts';


export const theme = createTheme({
    typography: {
            fontFamily: [
                EUkraine.style.fontFamily,
                'sans-serif',
            ].join(','),

    },
}); 