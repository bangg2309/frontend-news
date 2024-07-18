import React, {MouseEventHandler, useEffect, useState} from 'react';
import BreadcrumbDetail from './BreadcrumbDetail';
import ContentDetail from './ContentDetail';
import AuthorDetail from './AuthorDetail';
import ArticleContent from './ArticleContent';
import RelatedArticles from './RelatedArticles';
import {ArticleData} from '../../interfaces/ArticleData';
import fetchArticleData from '../../services/CrawlArticle';
import ModeToggle from '../theme/toggleTheme';
import {useParams} from 'react-router-dom';
import {Box, Skeleton, Stack, useTheme} from '@mui/material';
import CommentBox from "./CommentBox";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import {
    Bookmark, BookmarkBorderRounded,
    BookmarkOutlined,
    FacebookTwoTone,
    MailOutlineOutlined,
    MailOutlineRounded
} from "@mui/icons-material";
import {MAIN_CONCEPT} from "../theme/theme";
import {color} from "framer-motion";
import {savePost, settingSavePost} from "../../interfaces/User";
import {useSelector} from "react-redux";
import {getIsLogin} from "../../redux/selector/authSelector";
import {users} from "../../data/usersData";
import {getCategory, getCategoryByName} from "../../services/GetData";
import {fetchRSSData} from "../../services/rssService";
import {Category} from "../../interfaces/Category";


const ArticleDetail: React.FC = () => {

    const theme = useTheme();
    const {articleName} = useParams<{ articleName: string }>();
    const [data, setData] = useState<ArticleData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isSave, setIsSave] = useState<boolean>(false);
    const isLogin = useSelector(getIsLogin);

    const getThumb = (category: Category | null) => {
        if (!category) return ''

        let thumb = ''
        if (category.subType) {
            for (const sub of category.subType) {
                fetchRSSData(category.rss).then((p) => {
                    p.map((item) => {
                        if (item.title === data?.title) {
                            thumb = item.thumb;
                            return
                        }
                    })
                })
                if (thumb) return thumb
            }
        }
        fetchRSSData(category.rss).then((p) => {
            p.map((item) => {
                if (item.title === data?.title) {
                    thumb = item.thumb;
                    return
                }
            })
        })
        return thumb;
    }
    const handleChangeSave = () => {
        if (isLogin) {
            savePost({
                link: articleName || '',
                title: data?.title || '',
                category: getCategoryByName(data?.category.name || ''),
                date: data?.time.substring(0, data?.time.indexOf(" ")) || '',
                thumb: data?.thumb || ''
            })
            setIsSave(!isSave);
        }
        console.log(users)
    }
    const customIconBookmark = (isSave: boolean) => {
        if (isSave) {
            return <Bookmark
                sx={{
                    padding: "5px",
                    color: MAIN_CONCEPT.main,
                    borderRadius: '50%',
                    transition: theme.transitions.create(['color'], {}),

                    '&:hover': {
                        backgroundColor: MAIN_CONCEPT.main,
                        color: 'white'
                    },
                }} fontSize={'large'}/>
        } else {
            return <BookmarkBorderRounded sx={{
                padding: "5px",
                borderRadius: '50%',
                transition: theme.transitions.create(['color'], {}),
                '&:hover': {
                    backgroundColor: MAIN_CONCEPT.main,
                    color: 'white'
                },
            }} fontSize={'large'}/>
        }
    }


    useEffect(() => {
            const fetchData = async () => {
                setLoading(true);
                if (articleName) {
                    try {
                        const articleData = await fetchArticleData(articleName);
                        setIsSave(settingSavePost({
                            link: articleName || '',
                            title: articleData?.title || '',
                            category: getCategoryByName(articleData?.category.name || ''),
                            date: articleData?.time.substring(0, articleData?.time.indexOf(" ")) || ''
                        }));
                        setData(articleData);
                    } catch
                        (error) {
                        console.error('Error fetching article data:', error);
                    }
                }

                setLoading(false);
            };
            fetchData();
        }, [articleName]
    )
    ;

    if (loading || !data) {
        return (
            <div className="container gap-10 grid grid-cols-[1fr_300px] grid-rows-[auto] p-5">
                <div className="container__left">
                    <Skeleton variant="rectangular" width="100%" height={30}/>
                    <Skeleton variant="text" width="60%" height={40}/>
                    <Skeleton variant="text" width="80%" height={30}/>
                    <Skeleton variant="rectangular" width="100%" height={200}/>
                </div>
                <div className="container__right ">
                    <Skeleton variant="rectangular" width="100%" height={30}/>
                    <Skeleton variant="rectangular" width="100%" height={400}/>
                </div>
            </div>
        );
    }

    return (
        <div className="container gap-10 grid grid-cols-[1fr_300px] grid-rows-[auto] p-5">
            <div className="container__left">
                <BreadcrumbDetail category={data.category.name} time={data.time}/>
                <AuthorDetail author={data.author}/>
                <Stack direction={'row'} spacing={1}>
                    <FacebookRoundedIcon sx={{
                        padding: "5px",
                        // boxSizing: 'unset',
                        borderRadius: '50%',
                        transition: theme.transitions.create(['color'], {}),
                        '&:hover': {
                            backgroundColor: MAIN_CONCEPT.main,
                            color: 'white'

                        }
                    }} fontSize={'large'}/>
                    <MailOutlineRounded sx={{
                        padding: "5px",

                        // boxSizing: 'unset',
                        borderRadius: '50%',
                        transition: theme.transitions.create(['color'], {}),
                        '&:hover': {
                            backgroundColor: MAIN_CONCEPT.main,
                            color: 'white'
                        }
                    }} fontSize={'large'}/>
                    <Box onClick={handleChangeSave}>
                        {customIconBookmark(isSave)}
                    </Box>
                </Stack>
                <ContentDetail title={data.title} sapo={data.sapo}>
                    <ArticleContent articleContent={data.articleContent}/>
                </ContentDetail>
                <CommentBox/>
            </div>
            <div className="container__right">
                <RelatedArticles articles={data.relatedArticle}/>
            </div>
        </div>
    );
}

export default ArticleDetail;