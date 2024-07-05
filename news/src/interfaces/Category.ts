export interface Category{
    id?: number;
    name: string;
    rss: string;
    url: string;
    style?: {};
    subType?: Category[];
}