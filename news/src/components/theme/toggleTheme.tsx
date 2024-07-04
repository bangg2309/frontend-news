import React from "react";
import {Button, useColorScheme} from "@mui/material";

const ModeToggle: React.FC = () => {
    const {mode, setMode} = useColorScheme();
    return (
        <Button
            onClick={()=>{
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? 'Dark' : 'Light'}
        </Button>
    )
}
export default ModeToggle;