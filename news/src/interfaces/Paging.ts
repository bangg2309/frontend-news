import {RSSItem} from "./RSSItem";

export interface Paging{
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    post:RSSItem[];
}