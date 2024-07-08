import React from "react";
import {Box, Button, IconButton, useColorScheme, useTheme} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {NavLink} from "react-router-dom";

const ModeToggle: React.FC = () => {
    const theme = useTheme();
    const handleToggle = () => {
        setMode(
            mode === 'light' ? 'dark' : 'light'
        )
    }
    const {mode, setMode} = useColorScheme();
    return (
        <Box
            sx={{display:'flex',justifyContent:'center',
                alignItems:'center',
                padding: '6px 8px',
                fontWeight: 500,
                fontSize: '0.875rem',
                lineHeight: 1.75,
                color:theme.palette.text.primary,
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    borderRadius: '4px',
                }
            }}
            onClick={handleToggle}
        >

            {theme.palette.mode=='light'?'Light':'Dark'} mode {" "}
            {/*<IconButton sx={{ml: 1}} color="inherit">*/}
            <Box marginX={'5px'}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </Box>
            {/*</IconButton>*/}
        </Box>
    )
}

    export default ModeToggle;