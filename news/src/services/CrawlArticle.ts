import axios from 'axios';
import cheerio from 'cheerio';
import {ArticleData, ContentItem, RelatedArticle} from "../interfaces/ArticleData";

const BASE_URL = 'https://tienphong.vn/';
const fetchArticleData = async (url: string): Promise<ArticleData | null> => {
    try {
        const crawlUrl = `${BASE_URL}${url}`

        const response = await axios.get(crawlUrl);
        const html = response.data;
        const $ = cheerio.load(html);

        const category = $('.main-cate').text().trim();
        const title = $('h1').text().trim();
        const sapo = $('.article__sapo').text().trim();
        const authorName = $('.name').text().trim();
        const time = $('.time').text().trim();

        const author = {
            name: authorName,
            image: 'https://static-images.vnncdn.net/vps/images/fb/2020/03/18/15/20200318152346-10ac.jpg',
            link: ''
        };

        const articleContent: ContentItem[] = [];
        $('.article__body').children().each((index, element) => {
            const tagName = $(element).prop('tagName');
            if (tagName === 'P') {
                articleContent.push({
                    type: 'text',
                    content: $(element).text().trim()
                });
            } else if (tagName === 'TABLE' && $(element).find('img').length > 0) {
                articleContent.push({
                    type: 'image',
                    content: $(element).find('img').attr('data-src') || '',
                    caption: $(element).find('.caption p').text().trim()
                });
            }
        });
        const relatedArticle: RelatedArticle[] = [];
        $('.box-content .story').each((i, elem) => {
            const relatedUrl = ($(elem).find('a.cms-link').attr('href') || '').replace(BASE_URL, '');
            const relatedTitle = $(elem).find('h3.story__heading a').text().trim();
            const relatedImage = $(elem).find('img').attr('data-src');
            if (relatedUrl && relatedTitle && relatedImage) {
                relatedArticle.push({
                    url: relatedUrl,
                    title: relatedTitle,
                    image: relatedImage
                });
            }
        });
        return {title, sapo, category, author, time, articleContent, relatedArticle};
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export default fetchArticleData;
