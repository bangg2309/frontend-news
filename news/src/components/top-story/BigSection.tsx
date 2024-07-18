import React from "react";
import {RSSItem} from "../../interfaces/RSSItem";
import {Grid, Stack} from "@mui/material";
import SectionTopStory2th from "./SectionTopStory2th";
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

const BigSection: React.FC<{ item: RSSItem[] }> = ({ item }) => {
    const maxIndex = 20;
    const bigPost = getRandomUniqueSlice(item, 1, maxIndex);
    const list2th = getRandomUniqueSlice(item, 2, maxIndex);
    const list3th = getRandomUniqueSlice(item, 2, maxIndex);
    const list6th = getRandomUniqueSlice(item, 5, maxIndex);

    return (
        <>
            {/*<Breedcrumb category={Category}/>*/}
            <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2}>
                    <Grid item xs={8} style={{display:"contents"}}>
                        <Stack>
                            {bigPost.map((item, index) => (
                                <SectionTopStory2th item={item} key={index} style={{width:'-webkit-fill-available'}}/>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack direction="column" spacing={2}>
                            {
                                list2th.map((item, index) => (
                                    <SectionTopStory2th item={item} key={index} width={230} height={258}/>
                                ))
                            }
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack>
                            {list3th.map((item, index) => (
                                <SectionTopStory2th item={item} key={index} width={230} height={258}/>
                            ))}
                        </Stack>
                    </Grid>
                </Stack>
            </Stack>
        </>
    )
}
export default BigSection;