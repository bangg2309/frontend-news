import React, {useEffect, useRef} from "react";
import {Card, CardActionArea, CardContent, CardMedia, styled} from "@mui/material";
import TitlePage from "../post/TitlePage";
import {NavLink} from "react-router-dom";
import {motion} from 'framer-motion';
import shadows from "@mui/material/styles/shadows";
import {MAIN_CONCEPT} from "../theme/theme";

type TopStorySmallProps = {
    item: {
        url: string;
        src: string;
        title: string;
    }
}

const TopStorySmall: React.FC<TopStorySmallProps> = ({item}) => {
    return (
        <Card component={NavLink} sx={{boxShadow: 'unset', padding: 0}} to={item.url} className={'mb-2 p-2 '}>
            {/*<StyleCard>*/}
                <CardActionArea>
                    <CardMedia
                        component="img"
                        width="100%"
                        image={item.src}
                        alt={item.title}

                    />
                    <CardContent color={'inherit'}>
                        <TitlePage title={item.title} size={'body1'} url={item.url}/>
                    </CardContent>
                </CardActionArea>
            {/*</StyleCard>*/}
        </Card>
        // </motion.div>
    )
}
export const StyleCard = styled("div")(({theme}) => ({
    '&:hover': {
        color: MAIN_CONCEPT.main
        // textDecoration: "underline"
    },
    mb: 2,
}))
export default TopStorySmall;