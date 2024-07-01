import React from 'react';
import {createTheme, experimental_extendTheme} from "@mui/material/styles";
import {blue, red} from "@mui/material/colors";
import {hover} from "@testing-library/user-event/dist/hover";

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        link: true;
    }
}
const light = createTheme({
    // typography: {
    //     fontFamily: [
    //         'Roboto',
    //         'sans-serif',
    //     ].join(','),
    // },

    palette: {
        mode: 'light',
    },
    components: {
        MuiButton: {
            // variants: [
            //     {
            //         props: {variant: 'text'},
            //         style: {
            //             color: "black",
            //             '&:hover': {
            //                 color: '#2d67ad',
            //                 backgroundColor: 'transparent',
            //             },
            //
            //         },
            //     },
            // ],
            // styleOverrides: {
            //     root: {
            //         textTransform: 'none',
            //     },
            // },
        },
    }
    //     MuiTypography: {
    //         styleOverrides: {
    //             root: {
    //                 fontFamily: 'Roboto',
    //             },
    //         },
    //     },
    //     MuiCssBaseline: {
    //         styleOverrides: {
    //             '@global': {
    //                 body: {
    //                     fontFamily: 'Roboto',
    //                 },
    //             },
    //         },
    //     },
    //
    // },
})
const dark = createTheme({})

const theme = experimental_extendTheme({
    colorSchemes: {
        light: light,
        dark: dark,
    }
});
export default light;