import {Category} from "./Category";

export interface NewsView{
    title: string;
    description: string;
    pubDate?: string;
    link: string;
    category: Category;
    thumb?: string;
};