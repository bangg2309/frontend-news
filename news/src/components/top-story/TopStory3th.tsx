import React from "react";
import {Grid} from "@mui/material";
import TopStorySmall from "./TopStorySmall";

const list = [
    {
        url: "https://www.google.com",
        src: "https://www.google.com",
        title: "title1"
    },
    {
        url: "https://www.google.com",
        src: "https://www.google.com",
        title: "title2"
    },
    {
        url: "https://www.google.com",
        src: "https://www.google.com",
        title: "title"
    }
]
const TopStory3th: React.FC = () => {
    return (
        <>
            <Grid container spacing={2}>
                {list.map((item, index) => (
                    <Grid item xs={4} key={index}>
                        <TopStorySmall item={item}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}