import {Category} from "./Category";

export interface NewsView{
    title: string;
    description: string;
    src?:string;
    pubDate?: string;
    link: string;
    category: Category;
    thumb?: string;
};