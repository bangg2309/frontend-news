import React, {useEffect, useState} from 'react';
import BreadcrumbDetail from './BreadcrumbDetail';
import ContentDetail from './ContentDetail';
import AuthorDetail from './AuthorDetail';
import ArticleContent from './ArticleContent';
import RelatedArticles from './RelatedArticles';
import {ArticleData} from "../../interfaces/ArticleData";
import fetchArticleData from "../../services/CrawlArticle";
import ModeToggle from "../theme/toggleTheme";
import { useParams } from 'react-router-dom';
const ArticleDetail: React.FC = () => {
    const { articleName } = useParams<{ articleName: string }>();
    const [data, setData] = useState<ArticleData | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const url = articleName!;
            const articleData = await fetchArticleData(url);
            console.log(articleData);
            setData(articleData);
        };

        fetchData();
    }, []);
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container gap-10 grid grid-cols-[1fr_300px] grid-rows-[auto] p-5">
            <div className="container__left">
                <BreadcrumbDetail category={data.category} time={data.time}/>
                <AuthorDetail author={data.author}/>
                <ContentDetail title={data.title} sapo={data.sapo}>
                    <ArticleContent articleContent={data.articleContent}/>
                </ContentDetail>
            </div>
            <div className="container__right">
                <ModeToggle></ModeToggle>
                <RelatedArticles articles={data.relatedArticle}/>
            </div>
        </div>
    );
}

export default ArticleDetail;
