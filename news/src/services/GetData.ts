// category data

import {rssCategories} from "./rssCategories";

export const getCategory = (name: string) => {
    return rssCategories.find((category) => category.url === 'the-loai/'+name);
}
export const getCategoryByName = (name: string) => {
    return rssCategories.find((category) => category.name === name);
}
