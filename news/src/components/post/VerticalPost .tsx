import React from "react";
import NewsType from "./category-new";
import TitlePage from "./TitlePage";
import DescriptionPost from "./description-post";
import {Box, Grid} from "@mui/material";
import PostAvt from "./PostAvt";
import {NewsView} from "../../interfaces/NewsView";

const VerticalPost: React.FC<{
    NewsView: NewsView;
    titleSize: string ;
}> = (props) => {
    return (
        <a href={props.NewsView.link}>

                <Box sx={{maxWidth:500}}>
                    <PostAvt
                        src={"https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/30/2024-2130.jpg?width=260&s=AMJjHYGtI2xZMpJ8m5Wejg"}/>
                </Box>
                <div className={"flex-col ml-2.5"}>
                <NewsType name={props.NewsView.category.name} url={props.NewsView.category.url}/>
                <TitlePage title={props.NewsView.title} size={props.titleSize}/>
                <DescriptionPost
                    description={props.NewsView.description}/>
                </div>
        </a>
    );
}

export default VerticalPost;