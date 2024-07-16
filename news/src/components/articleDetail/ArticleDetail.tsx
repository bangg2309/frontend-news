import React, {useEffect, useState} from 'react';
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


const ArticleDetail: React.FC = () => {

    const theme = useTheme();
    const {articleName} = useParams<{ articleName: string }>();
    const [data, setData] = useState<ArticleData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isSave, setIsSave] = useState<boolean>(false);
    const handleChangeSave = () => {
        savePost({
            title: data?.title || '',
            category: data?.category || '',
            date: data?.time.substring(0, data?.time.indexOf(" ")) || ''
        })
        setIsSave(!isSave);
    }
    const customIconBookmark = (isSave: boolean) => {
        if (isSave) {
            return <Bookmark sx={{
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
                    setData(articleData);
                    setIsSave(settingSavePost({
                        title: articleData?.title || '',
                        category: articleData?.category || '',
                        date: articleData?.time.substring(0, articleData?.time.indexOf(" ")) || ''
                    }));
                } catch (error) {
                    console.error('Error fetching article data:', error);
                }
            }

            setLoading(false);
        };

        fetchData();
    }, [articleName]);

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
                <BreadcrumbDetail category={data.category} time={data.time}/>
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
                    {customIconBookmark(isSave)}
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