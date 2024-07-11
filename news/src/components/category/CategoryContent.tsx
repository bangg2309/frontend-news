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
import {useNavigate, useParams} from "react-router-dom";
import {getCategory} from "../../services/GetData";
import {RootState} from "../../redux/store/store";
const defaultCategory: Category = {
    name: 'Trang chủ',
    rss: 'home.rss',
    url: '/trang-chu'
}
const CategoryContent: React.FC = (props) => {
    const upperSelector= useSelector(upperPost);
    const lowerSelector= useSelector(lowerPost);
    const {param} = useParams();
    // const navigate = useNavigate();
    // if (categoryUrl === undefined) {
    //     navigate("/")
    // }
    const category = getCategory(param||"/") || defaultCategory;
    const dispatch = useDispatch();
    const [news, setNews] = React.useState<RSSItem[]>([]);
    const handleChangePage = (e: React.ChangeEvent<unknown>, v: number) => {
        dispatch(categoryPaging.actions.setCurPage(v))
    };
    useEffect(() => {
        fetchRSSData(category.rss||"/").then((data) => {
            setNews(data)
            dispatch(categoryPaging.actions.setPost(data.slice(16)))
        })
    }, [])

    return (
        <>
            <Breedcrumb category={category}/>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <TopStory item={news.slice(0, 6)}/>
                    {upperSelector.map((item: RSSItem, index: number) => {
                        return (
                            <HorizonePost NewsView={item} titleSize={"h5"} key={index}/>
                        )
                    })}

                </Grid>
                <Grid item xs={3}>
                    {/*<ModeToggle/>*/}
                </Grid>
            </Grid>
            <BoxRemaker item={news.slice(0, 10)}/>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    {lowerSelector.map((item: RSSItem, index: number) => {
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

            </Grid>
        </>
    );
}
export default CategoryContent;