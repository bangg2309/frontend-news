import React from "react";
import NewsType from "./category-new";
import {Card, CardActionArea, CardContent, CardMedia, styled, Typography} from "@mui/material";
import {NewsView} from "../../interfaces/NewsView";
import {NavLink} from "react-router-dom";
import shadows from "@mui/material/styles/shadows";
import TitlePage from "./TitlePage";

const VerticalPost: React.FC<{ NewsView: NewsView }> = (props) => {
    return (
            <Card sx={{boxShadow: 'unset', padding: 0}} component={NavLink} to={props.NewsView.link}>
                <CardActionArea>

                    <CardMedia
                        component="img"
                        image={props.NewsView.src}
                        alt={props.NewsView.title}
                    />
                    <CardContent className={""}>
                        {/*<Typography gutterBottom variant="h5" component="div">*/}
                        {/*    <NewsType name={props.NewsView.category.name}/>*/}
                        {/*</Typography>*/}
                        {/*<Typography gutterBottom fontWeight={600} variant="h5" component="div">*/}
                        {/*    {props.NewsView.title}*/}
                        {/*</Typography>*/}
                        <TitlePage title={props.NewsView.title} size={'h5'} url={props.NewsView.link}/>
                        <Typography variant="subtitle1" color="text.secondary">
                            {props.NewsView.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
}


export default VerticalPost;