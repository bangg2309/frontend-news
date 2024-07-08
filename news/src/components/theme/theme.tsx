import React from 'react';
import {createTheme, experimental_extendTheme as extendTheme} from "@mui/material/styles";
import {blue, red} from "@mui/material/colors";
import {hover} from "@testing-library/user-event/dist/hover";

export enum MAIN_CONCEPT{
    main='#2d67ad',
    lightNav='rgba(255, 255, 255, 0.9)',
    darkNav='rgba(15, 18, 20, 0.9)',

}

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#000",
                    light: blue[300],
                    dark: blue[700],
                },
                divider: "#2d67ad",

                action: {
                    hover: "#2d67ad",
                }
            },
        },
        dark: {
            palette: {
                primary: {
                    main: "#fff",
                    light: blue[300],
                    dark: blue[700],
                },
                background: {
                    default: 'rgb(27,27,27)'
                },
                action: {
                    hover: '#fff',
                }
            },
        },
    },
    components: {
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    borderRadius: '4px'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: '2px 2px',
                    borderRadius: '8px'
                }
            }
        }
    }
});

export default theme;