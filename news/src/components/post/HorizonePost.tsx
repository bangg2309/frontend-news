import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import {NewsView} from "../../interfaces/NewsView";
import NewsType from "./category-new";
import TitlePage from "./TitlePage";

const HorizonePost: React.FC<{
    NewsView: NewsView, titleSize: string,
}> = (props) => {
    return (
        <Card sx={{boxShadow: 'unset'}} className={"mb-2"}>
            <CardActionArea>
                <Stack direction={'row'}>
                    <CardMedia
                        sx={{width: "100%", maxWidth: 280, margin: "16px"}}
                        component="img"
                        image={props.NewsView.src}
                        alt={props.NewsView.title}
                    />
                    <CardContent>
                        <NewsType url={props.NewsView.category.url} name={props.NewsView.category.name}
                                  variant={"subtitle1"}/>
                        <TitlePage title={props.NewsView.title} size={"h6"} url={props.NewsView.link}/>
                        <Typography variant="subtitle1" color="text.secondary">
                            {props.NewsView.description}
                        </Typography>
                    </CardContent>
                </Stack>
            </CardActionArea>
        </Card>
        // <a href={props.url}>
        //     <div className={"flex flex-row justify-between align-middle mb-10"}>
        //         <Box sx={{width: 240}}>
        //             <PostAvt
        //                 src={"https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/30/2024-2130.jpg?width=260&s=AMJjHYGtI2xZMpJ8m5Wejg"}/>
        //         </Box>
        //         <div className={"flex-col ml-2.5"}>
        //         <NewsType name={props.type} url={props.url}/>
        //         {/*<TitlePage title={props.title} size={props.size}/>*/}
        //         <DescriptionPost
        //             description={props.description}/>
        //         </div>
        //     </div>
        // </a>
    )
        ;
}

export default HorizonePost;