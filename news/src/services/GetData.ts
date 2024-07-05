// category data

import {rssCategories} from "./rssCategories";

export const getCategory = (name: string) => {
    return rssCategories.find((category) => category.name === name) || {name: '', subType: [], url: ''};
}


