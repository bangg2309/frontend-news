import React, {useEffect, useState} from 'react';
import BreadcrumbDetail from './BreadcrumbDetail';
import ContentDetail from './ContentDetail';
import AuthorDetail from './AuthorDetail';
import ArticleContent from './ArticleContent';
import RelatedArticles from './RelatedArticles';
import {ArticleData} from "../../interfaces/ArticleData";
import fetchArticleData from "../../services/CrawlArticle";
const ArticleDetail: React.FC = () => {
    const [data, setData] = useState<ArticleData | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const url = 'thu-tuong-tiep-lanh-dao-cac-tap-doan-han-quoc-dau-tu-ty-usd-tai-viet-nam-post1651608.tpo';
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
                <RelatedArticles articles={data.relatedArticle}/>
            </div>
        </div>
    );
}

export default ArticleDetail;
