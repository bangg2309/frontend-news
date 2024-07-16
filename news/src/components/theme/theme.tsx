import React from 'react';
import {createTheme, experimental_extendTheme as extendTheme} from "@mui/material/styles";
import {blue, red} from "@mui/material/colors";
import {hover} from "@testing-library/user-event/dist/hover";
import {InputBase} from "@mui/material";

export enum MAIN_CONCEPT {
    main = '#2d67ad',
    lightNav = 'rgba(255, 255, 255, 0.8)',
    darkNav = 'rgba(45,45,45,0.8)',

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
                    },
                    text: {
                        primary: "#000",
                        secondary: "#000"
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
                    },
                    text: {
                        primary: "#fff",
                        secondary: "#fff"
                    }
                },
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1120,
                lg: 1280,
                xl: 1920,

            }
        },
        components:
            {
                MuiIcon:{
                    // variants
                },
                MuiCardMedia: {
                    styleOverrides: {
                        root: {
                            borderRadius: '4px'
                        }
                    }
                }
                ,
                MuiAppBar: {
                    styleOverrides: {
                        root: {
                            height: 'fit-content',
                            padding: '0',
                            backdropFilter: 'blur(10px)',
                            boxShadow: 'unset',
                            background: 'inherit'
                        }
                    },
                },
                MuiToolbar: {
                    styleOverrides: {
                        root: {
                            minHeight: 'fit-content!important',
                            height: 'fit-content',
                            padding: '0'
                        }
                    }
                },
                MuiTextField: {
                    styleOverrides: {
                        root: {
                            '& label.Mui-focused': {
                                color: MAIN_CONCEPT.main,
                            },
                        },
                    },
                },
                MuiOutlinedInput:{
                    styleOverrides:{
                        root:{
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline':{
                                borderColor: MAIN_CONCEPT.main,
                            }
                        }
                    }
                },
                MuiFilledInput: {
                    styleOverrides: {
                        root: {
                            '&.Mui-focused:after': {
                                borderBottom: '2px solid ' + MAIN_CONCEPT.main,
                            },
                        },
                    },
                },
                MuiInputBase: {
                    styleOverrides: {
                        root: {
                            '& .MuiInputBase-input': {
                                '&:focus': {
                                    '&::placeholder': {
                                        color: MAIN_CONCEPT.main,
                                    },
                                },
                            },
                            '&.Mui-focused .MuiInputAdornment-root': {
                                color: MAIN_CONCEPT.main,
                            }
                        },
                    },
                },
            }
    })
;

export default theme;