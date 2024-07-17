import React from "react";
import {Box, Divider, Grid, Stack} from "@mui/material";
import VerticalPost from "../post/VerticalPost ";
import SectionTopStory2th from "./SectionTopStory2th";
import TopStorySmall from "./TopStorySmall";
import {RSSItem} from "../../interfaces/RSSItem";

const getRandomUniqueSlice = (array: RSSItem[], count: number, maxIndex: number) => {
    const indices = new Set<number>();
    while (indices.size < count && indices.size < array.length) {
        const randomIndex = Math.floor(Math.random() * maxIndex);
        if (randomIndex < array.length) {
            indices.add(randomIndex);
        }
    }
    return Array.from(indices).map(index => array[index]);
}

const SectionTopStory: React.FC<{ item: RSSItem[] }> = ({ item }) => {
    const maxIndex = 40;
    const bigPost = getRandomUniqueSlice(item, 1, maxIndex);
    const list1th = getRandomUniqueSlice(item, 2, maxIndex);
    const list2th = getRandomUniqueSlice(item, 2, maxIndex);
    const list3th = getRandomUniqueSlice(item, 4, maxIndex);
    const list6th = getRandomUniqueSlice(item, 5, maxIndex);
    const list4th = getRandomUniqueSlice(item, 4, maxIndex);


    return (
        <>
            <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2}>
                    <Grid item xs={3}>
                        <Stack>
                            {list6th.map((item, index) => (
                                <SectionTopStory2th item={item} key={index}/>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction="column" spacing={2}>
                            {
                                bigPost.map((item, index) => (
                                    <VerticalPost NewsView={item} key={index}/>
                                ))
                            }
                            <Grid item xs={15}>
                                <Stack direction="row" spacing={2}>
                                    <Grid item xs={6}>
                                        {list1th.map((item, index) => (
                                            <SectionTopStory2th item={item} key={index}/>
                                        ))}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {list2th.map((item, index) => (
                                            <SectionTopStory2th item={item} key={index}/>
                                        ))}
                                    </Grid>
                                </Stack>
                            </Grid>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack>
                            {list4th.map((item, index) => (
                                <TopStorySmall item={item} key={index}/>
                            ))}
                        </Stack>
                    </Grid>
                </Stack>

                <Stack direction="row" spacing={2}>
                    {list3th.map((item, index) => (
                        <Grid item xs={6} key={index}>
                            <TopStorySmall item={item}/>
                        </Grid>
                    ))}
                </Stack>
            </Stack>
        </>
    )
}
export default SectionTopStory;