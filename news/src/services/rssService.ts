import axios from 'axios';
import {parseStringPromise} from 'xml2js';
import {RSSItem} from "../interfaces/RSSItem";

const BASE_URL = 'https://tienphong.vn/rss/';

const createRSSUrl = (slug: string): string => `${BASE_URL}${slug}`;

const fetchRSSFromUrl = async (url: string): Promise<RSSItem[]> => {
    try {
        const response = await axios.get(url);
        const parsedData = await parseStringPromise(response.data);
        const items = parsedData.rss.channel[0].item;

        return items.map((item: any) => ({
            title: item.title[0],
            description: item.description[0],
            pubDate: item.pubDate[0],
            link: item.link[0],
            category: item.category ? item.category[0] : 'Uncategorized',
            thumb: item.thumb ? item.thumb[0] : ''
        }));
    } catch (error) {
        console.error(`Error fetching RSS data from ${url}:`, error);
        return [];
    }
};

export const fetchRSSData = async (categorySlug: string): Promise<RSSItem[]> => {
    try {
        const url = createRSSUrl(categorySlug);
        return await fetchRSSFromUrl(url);
    } catch (error) {
        console.error('Error fetching RSS data:', error);
        throw error;
    }
};