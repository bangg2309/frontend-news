import React from "react";
import {RSSItem} from "../../interfaces/RSSItem";
import {Grid, Stack} from "@mui/material";
import SectionTopStory2th from "./SectionTopStory2th";
import Breedcrumb from "../breedcrumb/breedcrumb";
import {Category} from "../../interfaces/Category";

const BigSection: React.FC<{ item: RSSItem[] }> = ({item}) => {
    const bigPost = item.slice(0, 1);
    const list2th = item.slice(1, 3);
    const list3th = item.slice(3, 5);
    const list6th = item.slice(6, 11);

    return (
        <>
            {/*<Breedcrumb category={}/>*/}
            <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2}>
                    <Grid item xs={6} style={{display:"contents"}}>
                        <Stack>
                            {bigPost.map((item, index) => (
                                <SectionTopStory2th item={item} key={index}/>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack direction="column" spacing={2}>
                            {
                                list2th.map((item, index) => (
                                    <SectionTopStory2th item={item} key={index}/>
                                ))
                            }
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack>
                            {list3th.map((item, index) => (
                                <SectionTopStory2th item={item} key={index}/>
                            ))}
                        </Stack>
                    </Grid>
                </Stack>
            </Stack>
        </>
    )
}
export default BigSection;