import React from 'react';

interface TextContentItem {
    type: 'text';
    content: string;
}

interface ImageContentItem {
    type: 'image';
    content: string;
    caption: string;
}

type ContentItem = TextContentItem | ImageContentItem;


interface ArticleContentProps {
    articleContent: ContentItem[];
}

const ArticleContent: React.FC<ArticleContentProps> = ({ articleContent }) => {
    return (
        <div>
            {articleContent.map((item, index) => {
                if (item.type === 'text') {
                    return <p className={"mt-4"} key={index}>{item.content}</p>;
                } else if (item.type === 'image') {
                    return (
                        <div key={index}>
                            <img src={item.content} alt={item.caption} />
                            {item.caption && <p>{item.caption}</p>}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default ArticleContent;
