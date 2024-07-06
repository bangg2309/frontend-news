import {Category} from "./Category";

export interface RSSItem {
    title: string;
    description: string;
    pubDate?: string;
    link: string;
    category: Category;
    thumb: string;
}
