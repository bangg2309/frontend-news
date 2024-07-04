import React from "react";
import PostAvt from "../post/PostAvt";
import TitlePage from "../post/TitlePage";
import NewsType from "../post/category-new";
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {Category} from "../../interfaces/Category";

type RemakerItemProps = {
    remaker: {
        url: string;
        src: string;
        title: string;
        type: Category;
    };
}

const RemakerItem: React.FC<RemakerItemProps> = ({remaker}) => {
    return (
                <Card sx={{boxShadow:'unset'}} component={NavLink} to={remaker.url} className="mr-1 mb-5 mt-5">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={remaker.src}
                            alt={remaker.title}
                        />
                        <CardContent>
                       <NewsType name={remaker.type.name} url={remaker.type.url} variant='subtitle1'/>
                            <TitlePage title={remaker.title} size={"body1"} url={remaker.url}/>
                        </CardContent>
                    </CardActionArea>
                </Card>
    );
}

export default RemakerItem;