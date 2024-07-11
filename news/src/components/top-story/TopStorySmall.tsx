import React, {useState} from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography, Link} from "@mui/material";
import TitlePage from "../post/TitlePage";
import {NavLink} from "react-router-dom";
import {RSSItem} from "../../interfaces/RSSItem";

const TopStorySmall: React.FC<{ item: RSSItem }> = (props) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const truncatedDescription = props.item.description.replace(/<[^>]*>/g, '').slice(0, 50);
    const fullDescription = props.item.description.replace(/<[^>]*>/g, '');

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <Card sx={{boxShadow: 'unset', padding: 0, maxWidth: 250}} component={NavLink} to={props.item.link} className={'mb-2 p-2'}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="100%"
                    image={props.item.thumb || '#'}
                    alt={props.item.title}
                />
                <CardContent color={'inherit'}>
                    <TitlePage title={props.item.title} size={'body1'} url={props.item.link}/>
                    <Typography variant="body2" color="text.secondary">
                        {showFullDescription ? fullDescription : truncatedDescription}
                        {!showFullDescription && fullDescription.length > 50 &&
                            <Link component="button" variant="body2" color="inherit" onClick={toggleDescription} sx={{textDecoration: 'none'}}>
                                ...Xem thêm
                            </Link>
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default TopStorySmall;