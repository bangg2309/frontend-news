import React from 'react';
import {Typography, useTheme} from "@mui/material";
import {NavLink} from "react-router-dom";
import {Variant} from "@mui/material/styles/createTypography";
import {motion} from 'framer-motion';
import {MAIN_CONCEPT} from "../theme/theme";
// import theme from "../../theme/theme";
const TitlePage: React.FC<{ title: string, size: Variant, url: string }> = (props) => {
    const theme = useTheme();
    return (
        <motion.div
            color={theme.palette.primary.main}
            whileHover={{
                color: MAIN_CONCEPT.main
                // textDecoration: 'underline'
            }}
        >
            <Typography variant={props.size} fontWeight={600} color={'inherit'}
                        component={NavLink} to={props.url}>
                {props.title}
            </Typography>
        </motion.div>
    )
}
//active status for the link
// export const activeStyle = (size?: string) => {
//     let result = {
//         //set font size with size props}
//         fontSize: "16px",
//         lineHeight: "20px"
//     }
//     if (size === "lg") {
//         result = {
//             ...result,
//             fontSize: "20px"
//         }
//     } else if (size === "md") {
//         result = {
//             ...result,
//             fontSize: "`8px"
//         }
//     }
//     return result;
// }
export default TitlePage;