import React from "react";
import NewsType from "./category-new";
import {Card, CardActionArea, CardContent, CardMedia, styled, Typography} from "@mui/material";
import {NewsView} from "../../interfaces/NewsView";
import {NavLink} from "react-router-dom";
import shadows from "@mui/material/styles/shadows";

const VerticalPost: React.FC<{NewsView: NewsView;titleSize: string;}> = (props) => {
    return (
        <Card component={NavLink} to={props.NewsView.link}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="100%"
                    image={props.NewsView.src}
                    alt={props.NewsView.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <NewsType name={props.NewsView.category.name}/>
                    </Typography>
                    <Typography gutterBottom fontWeight={600} variant="h4" component="div">
                        {props.NewsView.title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {props.NewsView.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default VerticalPost;