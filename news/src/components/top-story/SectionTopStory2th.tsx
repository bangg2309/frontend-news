import React from "react";
import {Stack} from "@mui/material";
import PostAvt from "../post/PostAvt";
import TitlePage from "../post/TitlePage";

type TopStorySmallProps={
    item:{
        url:string;
        src:string;
        title:string;
    }
}

const SectionTopStory2th: React.FC<TopStorySmallProps> = ({item}) => {
    return (
        <>
            <Stack className={"mb-4"} direction="row" alignItems="center" sx={{ '& > *:not(:last-child)': { marginRight: 3 } }} >
                <a href={item.url} style={{ display: 'flex', alignItems: 'flex-start', textDecoration: 'none' }}>
                    <PostAvt src={item.src} style={{ paddingRight: '10px'}} />
                    {/*<TitlePage title={item.title.toLowerCase()} size={"text-sm"} fontWeight={"medium"} />*/}
                </a>
            </Stack>
        </>
    )
}
export default SectionTopStory2th;