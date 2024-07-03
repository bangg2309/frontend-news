interface TextContentItem {
    type: 'text';
    content: string;
}

interface ImageContentItem {
    type: 'image';
    content: string;
    caption: string;
}

export type ContentItem = TextContentItem | ImageContentItem;

export interface RelatedArticle {
    url: string;
    title: string;
    image: string;
}

interface Author {
    name: string;
    image: string;
    link: string;
}

export interface ArticleData {
    category: string;
    title: string;
    time: string;
    articleContent: ContentItem[];
    sapo: string;
    relatedArticle: RelatedArticle[];
    author: Author;
}