import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const HorizonePost: React.FC<{
    type: string, url: string,
    title: string, size: string, description: string
}> = (props) => {
    return (
        <Card>
            <CardActionArea>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={props.url}
                            alt="green iguana"
                        />
                    </Grid>
                    <Grid item xs={8}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    </Grid>
                </Grid>
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