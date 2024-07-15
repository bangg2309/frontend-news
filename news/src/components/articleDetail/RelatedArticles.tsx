import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

interface RelatedArticle {
    url: string;
    title: string;
    image: string;
}

interface RelatedArticlesProps {
    articles: RelatedArticle[];
}


const RelatedArticles: React.FC<RelatedArticlesProps> = ({articles}) => {
    const navigate = useNavigate();
    const handleNavigation = (url: string) => {
        navigate('/bai-viet/' + url);
    };
    return (
        // <Typography>
        <div className="horizontal-box-wrapper sticky top-20 pb-4">
            <h2 className="font-bold text-lg mb-5 pb-1.5 uppercase font-sans"
                style={{borderBottom: "1px solid #add2ff", color: "#2d67ad"}}>
                Tin tức liên quan
            </h2>
            <div>
                {articles.map((article, index) => (
                    <div key={index}
                         className="grid grid-cols-2 mb-5 max-w-xs cursor-pointer"
                         onClick={() => handleNavigation(article.url)}>
                        <div className="mr-4">
                            <div className={"block h-0 pb-[66.66%] relative w-full"}
                                 title={article.title}>
                                <img src={article.image} alt={article.title}/>
                            </div>
                        </div>
                        <div className="leading-5">
                            <h3 className="vnn-title">
                                <div className={" font-sans text-[15px] leading-[19px]"}
                                     title={article.title}>
                                    {article.title}
                                </div>
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <a href="/"
                   className="bg-transparent border-[1px] border-[#2d67ad] rounded-[50px] text-[#2d67ad] cursor-pointer font-sans font-bold text-[12px] px-[15px] py-[5px]"
                   title="Quay lại trang chủ">
                    <img className="mr-2 mb-0.5 inline-block"
                         src="https://static.vnncdn.net/v1/icon/icon-pre-bule-sm.png"/>
                    QUAY LẠI TRANG CHỦ
                </a>
            </div>
        </div>
        // </Typography>
    );
};

export default RelatedArticles;