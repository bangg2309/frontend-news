import React, { useEffect } from "react";
import { Divider, Grid, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { RSSItem } from "../../interfaces/RSSItem";
import { fetchRSSData } from "../../services/rssService";
import SectionTopStory from "../top-story/SectionTopStory";
import HorizonePost from "../post/HorizonePost";
import BigSection from "../top-story/BigSection";
import { getCategory } from "../../services/GetData";

const getRandomUniqueIndices = (arrayLength: number, count: number, maxIndex: number) => {
    const indices = new Set<number>();
    while (indices.size < count && indices.size < arrayLength) {
        const randomIndex = Math.floor(Math.random() * maxIndex);
        if (randomIndex < arrayLength) {
            indices.add(randomIndex);
        }
    }
    return Array.from(indices);
};

const MainContent: React.FC = () => {
    const { param } = useParams();
    const [news, setNews] = React.useState<RSSItem[]>([]);
    const [topStoryNews, setTopStoryNews] = React.useState<RSSItem[]>([]);
    const [bigStoryNews, setBigStoryNews] = React.useState<RSSItem[]>([]);
    const category = getCategory(param || "/");

    useEffect(() => {
        fetchRSSData(category.rss).then((data) => {
            setNews(data);
            setTopStoryNews(data.slice(0, 30));
            setBigStoryNews(data.slice(10, 50));
        });
    }, [category.rss]);

    document.title = "The World News";

    const randomIndicesForHorizonePost = getRandomUniqueIndices(news.length, 3, 40);
    const randomSliceForHorizonePost = randomIndicesForHorizonePost.map(index => news[index]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <SectionTopStory item={topStoryNews} />
                <Stack direction="column" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                    <Grid container spacing={2}>
                        <Stack>
                            {randomSliceForHorizonePost.map((item, index) => (
                                <HorizonePost key={index} titleSize={index.toString()} NewsView={item} />
                            ))}
                        </Stack>
                    </Grid>
                </Stack>
            </Grid>
            <BigSection item={bigStoryNews} />
            <Grid item xs={12}>
                <SectionTopStory item={topStoryNews} />
                <Stack direction="column" spacing={2} divider={<Divider orientation="vertical" flexItem />}></Stack>
            </Grid>
            <BigSection item={bigStoryNews} />
        </Grid>
    );
};

export default MainContent;