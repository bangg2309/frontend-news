import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import NewsType from "./category-new";
import TitlePage from "./TitlePage";
import {RSSItem} from "../../interfaces/RSSItem";
import {NavLink} from "react-router-dom";

const HorizonePost: React.FC<{
    NewsView: RSSItem, titleSize: string,
}> = (props) => {
    return (
        <Card sx={{boxShadow: 'unset', height: 'fit-content'}} className={"mb-2"} component={NavLink} to={props.NewsView.link}>
            <CardActionArea>
                <Stack direction={'row'}>
                    <CardMedia
                        sx={{width: 220, margin: "16px"}}
                        component="img"
                        image={props.NewsView.thumb}
                        alt={props.NewsView.title}
                    />
                    <CardContent>
                        <NewsType category={props.NewsView.category}
                                  variant={"subtitle1"}/>
                        <TitlePage title={props.NewsView.title} size={"subtitle1"} url={props.NewsView.link}/>
                        <Typography variant="body2" color="text.secondary">
                            {props.NewsView.description.replace(/<[^>]*>/g, '')}
                        </Typography>
                    </CardContent>
                </Stack>
            </CardActionArea>
        </Card>
    )
        ;
}

export default HorizonePost;