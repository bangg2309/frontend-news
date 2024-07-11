import React, {useEffect, useRef} from "react";
import {Card, CardActionArea, CardContent, CardMedia, styled} from "@mui/material";
import TitlePage from "../post/TitlePage";
import {NavLink} from "react-router-dom";
import {motion} from 'framer-motion';
import shadows from "@mui/material/styles/shadows";
import {MAIN_CONCEPT} from "../theme/theme";
import {RSSItem} from "../../interfaces/RSSItem";


const TopStorySmall: React.FC<{ item: RSSItem }> = (props) => {
    return (
        <Card sx={{boxShadow: 'unset', padding: 0, maxWidth: 250}} component={NavLink} to={props.item.link} className={'mb-2 p-2 '}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="100%"
                    image={props.item.thumb || '#'}
                    alt={props.item.title}

                />
                <CardContent color={'inherit'}>
                    <TitlePage title={props.item.title} size={'body1'} url={props.item.link}/>
                </CardContent>
            </CardActionArea>
            {/*</StyleCard>*/}
        </Card>
        // </motion.div>
    )
}
export const StyleCard = styled("div")(({theme}) => ({
    // '&:hover': {
    //     color: MAIN_CONCEPT.main
    // },
    // color: theme.palette.text.primary,
    // mb: 2,
}))
export default TopStorySmall;