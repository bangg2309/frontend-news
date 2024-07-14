import React from "react";
import {Divider, Stack, Typography} from "@mui/material";
import PostAvt from "../post/PostAvt";
import TitlePage from "../post/TitlePage";
import {RSSItem} from "../../interfaces/RSSItem";
import {Description} from "@mui/icons-material";

const SectionTopStory2th: React.FC<{ item: RSSItem }> = (props) => {
    return (
        <>
            <Stack className={"mb-4"} direction="row" alignItems="center"
                   sx={{'& > *:not(:last-child)': {marginRight: 3}}}>
                <a href={props.item.link} style={{display: 'flex', alignItems: 'flex-start', textDecoration: 'none'}}>
                    <Stack  spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <PostAvt src={props.item.thumb} style={{paddingRight: '10px'}}/>
                        <TitlePage title={props.item.title} size={"subtitle1"} url={props.item.link}/>
                    </Stack>
                </a>
            </Stack>
        </>
    )
}
export default SectionTopStory2th;