import axios from 'axios';
import {parseStringPromise} from 'xml2js';
import {RSSItem} from "../interfaces/RSSItem";

const RSS_URL = 'https://tienphong.vn/rss/home.rss';

export const fetchRSSData = async (): Promise<RSSItem[]> => {
    try {
        const response = await axios.get(RSS_URL);
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
        console.error('Error fetching RSS data:', error);
        throw error;
    }
};
