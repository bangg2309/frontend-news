import React, { useEffect, useState } from 'react';
import BreadcrumbDetail from './BreadcrumbDetail';
import ContentDetail from './ContentDetail';
import AuthorDetail from './AuthorDetail';
import ArticleContent from './ArticleContent';
import RelatedArticles from './RelatedArticles';
import { ArticleData } from '../../interfaces/ArticleData';
import fetchArticleData from '../../services/CrawlArticle';
import ModeToggle from '../theme/toggleTheme';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const ArticleDetail: React.FC = () => {
    const { articleName } = useParams<{ articleName: string }>();
    const [data, setData] = useState<ArticleData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if (articleName) {
                try {
                    const articleData = await fetchArticleData(articleName);
                    setData(articleData);
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
                    <Skeleton variant="rectangular" width="100%" height={30} />
                    <Skeleton variant="text" width="60%" height={40} />
                    <Skeleton variant="text" width="80%" height={30} />
                    <Skeleton variant="rectangular" width="100%" height={200} />
                </div>
                <div className="container__right">
                    <Skeleton variant="rectangular" width="100%" height={30} />
                    <Skeleton variant="rectangular" width="100%" height={400} />
                </div>
            </div>
        );
    }

    return (
        <div className="container gap-10 grid grid-cols-[1fr_300px] grid-rows-[auto] p-5">
            <div className="container__left">
                <BreadcrumbDetail category={data.category} time={data.time} />
                <AuthorDetail author={data.author} />
                <ContentDetail title={data.title} sapo={data.sapo}>
                    <ArticleContent articleContent={data.articleContent} />
                </ContentDetail>
            </div>
            <div className="container__right">
                <ModeToggle />
                <RelatedArticles articles={data.relatedArticle} />
            </div>
        </div>
    );
}

export default ArticleDetail;
