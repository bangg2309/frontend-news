import {motion} from 'framer-motion';
import React, {useContext} from 'react';
import TextLink from "../text/link";
import {Box, Typography} from "@mui/material";
// import theme from "../../theme/theme";
const TitlePage: React.FC<{ title: string, size?: string }> = (props) => {
    return (
        <h2 className="title-page__title">
            <Box>
                <Typography variant="h3" sx={{fontSize: props.size}}>
                    <motion.a
                        href="#"
                        whileHover={{color: '#2d67ad'}}
                    >
                       {props.title}
                    </motion.a>
                </Typography>
            </Box>
        </h2>
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