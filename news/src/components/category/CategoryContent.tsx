import React, {useEffect} from "react";
// import {NewsView} from "../../interfaces/NewsView";
import {fetchRSSData} from "../../services/rssService";
import {RSSItem} from "../../interfaces/RSSItem";
import Breedcrumb from "../breedcrumb/breedcrumb";
import {Grid, Pagination, PaginationItem, Stack} from "@mui/material";
import TopStory from "../top-story/TopStory";
import HorizonePost from "../post/HorizonePost";
import BoxRemaker from "../subgest/boxRemaker";
import {useParams} from "react-router-dom";
import {getCategory} from "../../services/GetData";
import {Paging} from "../../interfaces/Paging";
import fullCategory from "../../redux/slice/fullCategory";
import {useDispatch} from "react-redux";


const defaultPaging: Paging = {
    page: 0,
    limit: 10,
    total: 0,
    totalPage: 0,
    post: [],
}

const CategoryContent: React.FC = (props) => {
    const {param} = useParams();
    const [news, setNews] = React.useState(defaultPaging);
    const dispatch = useDispatch();
    const category = getCategory(param || "/");
    const getUpperPost = news.post.slice(news.page * news.limit, news.page * news.limit + news.limit / 2)
    const getLowerPost = news.post.slice(news.page * news.limit + news.limit / 2, news.page * news.limit + news.limit)
    const handleChangePage = (e: React.ChangeEvent<unknown>, v: number) => {
        setNews((prev) => {
            return {
                ...prev,
                page: v - 1
            }
        });
    };

    document.title = category.name;
    const url = window.location.pathname.split('/').pop();
    useEffect(() => {
        dispatch(fullCategory.actions.setLoading(false))
        // console.log(123)
        fetchRSSData(category.rss).then((data) => {
            // setNews()
            setNews((prev) => {
                return {
                    ...prev,
                    post: data,
                    total: data.length,
                    totalPage: data.length % prev.limit === 0 ? data.length / prev.limit : Math.floor(data.length / prev.limit) + 1
                }
            })
        })
    }, [url]);
    return (
        <>
            <Breedcrumb category={category}/>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <TopStory item={news.post.slice(0, 6)}/>
                    {getUpperPost.map((item: RSSItem, index: number) => {
                        return (
                            <HorizonePost NewsView={item} titleSize={"h5"}/>
                        )
                    })}

                </Grid>
                <Grid item xs={3}>
                    {/*<ModeToggle/>*/}
                </Grid>
            </Grid>
            <BoxRemaker item={news.post.slice(0, 10)}/>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    {getLowerPost.map((item: RSSItem, index: number) => {
                        return (
                            <HorizonePost NewsView={item} titleSize={"h6"} key={index}/>
                        )
                    })}
                    <Pagination sx={{margin: 'auto'}} count={news.totalPage} variant="outlined"
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