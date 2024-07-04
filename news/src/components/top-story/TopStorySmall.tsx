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

const TopStorySmall: React.FC<TopStorySmallProps> = ({item}) => {
    return (
        <>
            <Stack className={"mb-8"} >
                <a href={item.url}>
                    <PostAvt src={item.src} />
                    <TitlePage title={item.title.toUpperCase()} size={"text-sm"} />
                </a>
            </Stack>
            </>
    )
}
export default TopStorySmall;