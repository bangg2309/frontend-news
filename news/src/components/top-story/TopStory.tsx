import React from "react";
import {Grid, Stack} from "@mui/material";
import VerticalPost from "../post/VerticalPost ";
import TopStorySmall from "./TopStorySmall";
import {RSSItem} from "../../interfaces/RSSItem";

const TopStory: React.FC<{ item: RSSItem[] }> = ({item}) => {
    const bigPost = item.slice(0, 1);
    const list2th = item.slice(1, 3);
    console.log(list2th)
    const list3th = item.slice(3, 6);
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Stack>
                        {
                            bigPost.map((item, index) => (
                                <VerticalPost NewsView={item} key={index}/>
                            ))
                        }
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack>
                        {list2th.map((item, index) => (
                            <TopStorySmall item={item} key={index}/>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                {list3th.map((item, index) => (
                    <Grid item xs={4} key={index}>
                        <TopStorySmall item={item}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default TopStory;