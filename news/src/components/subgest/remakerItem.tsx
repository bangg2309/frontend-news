import React from "react";
import PostAvt from "../post/PostAvt";
import TitlePage from "../post/TitlePage";
import NewsType from "../post/category-new";
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {Category} from "../../interfaces/Category";
import {RSSItem} from "../../interfaces/RSSItem";


const RemakerItem: React.FC<{ item: RSSItem }> = (props) => {
    return (
        <Card sx={{boxShadow: 'unset'}} component={NavLink} to={props.item.link} className="mb-2 mt-5">
                <CardMedia sx={{height: 100}}
                    component="img"
                    image={props.item.thumb}
                    alt={props.item.title}
                />
                <CardContent >
                    <NewsType category={props.item.category} variant='subtitle1'/>
                    <TitlePage title={props.item.title} size={"body2"} url={props.item.link}/>
                </CardContent>
        </Card>
    );
}

export default RemakerItem;