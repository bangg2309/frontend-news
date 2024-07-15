import React, {useEffect} from "react";
import {Divider, Grid, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
// import {lowerPost, upperPost} from "../../redux/selector/pagingSelector";
import {RSSItem} from "../../interfaces/RSSItem";
import {fetchRSSData} from "../../services/rssService";
// import categoryPaging from "../../redux/slice/categoryPaging";
import SectionTopStory from "../top-story/SectionTopStory";
import HorizonePost from "../post/HorizonePost";
import BigSection from "../top-story/BigSection";

interface Category {
    name: string;
    rss: string;
}

interface MainContentProps {
    categories: Category[];
}

const MainContent: React.FC<MainContentProps> = ({categories}) => {
    // const upperSelector = useSelector(upperPost);
    // const lowerSelector = useSelector(lowerPost);
    const {param} = useParams();
    const dispatch = useDispatch();
    const [news, setNews] = React.useState<RSSItem[]>([]);
    const [topStoryNews, setTopStoryNews] = React.useState<RSSItem[]>([]);
    const [bigStoryNews, setBigStoryNews] = React.useState<RSSItem[]>([]);

    useEffect(() => {
        const fetchAllRSSData = async () => {
            let allNews: RSSItem[] = [];
            for (let i = 0; i < categories.length; i++) {
                const category = categories[i];
                const categoryNews = await fetchRSSData(category.rss || "/");
                allNews = allNews.concat(categoryNews);
                switch (i) {
                    case 1:
                        setTopStoryNews(categoryNews.slice(0, 16));
                        break;
                    case 5:
                        setBigStoryNews(categoryNews.slice(0, 8));
                        break;
                    default:
                        break;
                }
            }
            setNews(allNews);
            // dispatch(categoryPaging.actions.setPost(allNews.slice(16)));
        };

        fetchAllRSSData();
    }, [categories, dispatch]);


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <SectionTopStory item={topStoryNews}/>
                    <Stack direction="column" spacing={2} divider={<Divider orientation="vertical" flexItem/>}>
                        <Grid container spacing={2}>
                            <Stack>
                                {/*    {upperSelector.map((item: RSSItem, index: 1) => (*/}
                                {/*    <HorizonePost NewsView={item} titleSize={"h5"} key={index}/>*/}
                                {/*))}*/}
                            </Stack>
                        </Grid>
                    </Stack>
                    <BigSection item={bigStoryNews}/>
                </Grid>
            </Grid>
        </>
    );
};

export default MainContent;