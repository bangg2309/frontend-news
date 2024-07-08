import React, {useEffect} from "react";
// import {NewsView} from "../../interfaces/NewsView";
import {fetchRSSData} from "../../services/rssService";
import {Category} from "../../interfaces/Category";
import {RSSItem} from "../../interfaces/RSSItem";
import Breedcrumb from "../breedcrumb/breedcrumb";
import {Box, Grid, Pagination, PaginationItem, Stack} from "@mui/material";
import TopStory from "../top-story/TopStory";
import HorizonePost from "../post/HorizonePost";
import BoxRemaker from "../subgest/boxRemaker";
import ModeToggle from "../theme/toggleTheme";
import {useDispatch, useSelector} from "react-redux";
import categoryPaging from "../../redux/slice/categoryPaging";
import {lowerPost, totalPageSelector, totalPostSelector, upperPost} from "../../redux/selector/pagingSelector";


const CategoryContent: React.FC<{ category: Category }> = (props) => {
    const dispatch = useDispatch();
    const [news, setNews] = React.useState<RSSItem[]>([]);
    const handleChangePage = (e: React.ChangeEvent<unknown>, v: number) => {
        dispatch(categoryPaging.actions.setCurPage(v))
    };
    useEffect(() => {
        fetchRSSData(props.category.rss).then((data) => {
            setNews(data)
            dispatch(categoryPaging.actions.setPost(data.slice(16)))
        })
    }, [])

    return (
        <>
            <Breedcrumb category={props.category}/>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <TopStory item={news.slice(0, 6)}/>
                    {useSelector(upperPost).map((item: RSSItem, index: number) => {
                        return (
                            <HorizonePost NewsView={item} titleSize={"h5"} key={index}/>
                        )
                    })}

                </Grid>
                <Grid item xs={3}>
                    <ModeToggle/>
                </Grid>
            </Grid>
                        <BoxRemaker item={news.slice(0, 10)}/>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    {useSelector(lowerPost).map((item: RSSItem, index: number) => {
                        return (

                            <HorizonePost NewsView={item} titleSize={"h6"} key={index}/>
                        )
                    })}
                        <Pagination sx={{margin: 'auto'}} count={useSelector(totalPageSelector)} variant="outlined"
                                    shape="rounded"
                                    renderItem={(item) => (
                                        <PaginationItem
                                            component={Stack}
                                            justifyContent="center"
                                            alignItems="center"
                                            sx={{width: 30, height: 30}}
                                            {...item}
                                        />
                                    )}
                                    onChange={handleChangePage}
                        />
                </Grid>
                <Grid item xs={3}>
                    {/*<ModeToggle/>*/}
                </Grid>
            </Grid>
        </>
    );
}
export default CategoryContent;