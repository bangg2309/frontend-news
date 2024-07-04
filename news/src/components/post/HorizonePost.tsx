import React from "react";
import NewsType from "./category-new";
import TitlePage from "./TitlePage";
import DescriptionPost from "./description-post";
import {Box, Grid} from "@mui/material";
import PostAvt from "./PostAvt";

const HorizonePost: React.FC<{
    type: string, url: string,
    title: string, size: string, description: string
}> = (props) => {
    return (
        <a href={props.url}>

            <div className={"flex flex-row justify-between align-middle mb-10"}>
                <Box sx={{width: 240}}>
                    <PostAvt
                        src={"https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/30/2024-2130.jpg?width=260&s=AMJjHYGtI2xZMpJ8m5Wejg"}/>
                </Box>
                <div className={"flex-col ml-2.5"}>
                <NewsType name={props.type} url={props.url}/>
                <TitlePage title={props.title} size={props.size}/>
                <DescriptionPost
                    description={props.description}/>
                </div>
            </div>
        </a>
    );
}

export default HorizonePost;