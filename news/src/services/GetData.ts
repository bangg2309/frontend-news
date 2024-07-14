// category data

import {rssCategories} from "./rssCategories";
import {RSSItem} from "../interfaces/RSSItem";
export const getCategoryAllObject = (name:string) => {
    console.log(name)
    return rssCategories.find((category) => {
        if (category.subType) {
            const subCategory = category.subType.find((sub) => sub.name === name);
            if (subCategory) return subCategory;
        }
        return category.name === name;
    }) || rssCategories[0];

}
export const getCategory = (name: string) => {
    for (const category of rssCategories) {
        if (category.url.endsWith(name)) return category;
        if (category.subType) {
            const subCategory = category.subType.find((sub) => sub.url.endsWith(name));
            if (subCategory) return subCategory;
        }
    }
    return rssCategories[0];
}
export const getCategoryByName = (name: string) => {
    for (const category of rssCategories) {
        if (category.name === name) return category;
        if (category.subType) {
            const subCategory = category.subType.find((sub) => sub.name === name);
            if (subCategory) return subCategory;
        }
    }
    return rssCategories[0];
}
export const getAllNameURLAndRss = () => {
    return rssCategories.map((category) => {
            if (category.subType) {
                return category.subType.map((sub) => {
                    return {
                        name: sub.name,
                        url: sub.url,
                        rss: sub.rss
                    }
                })
            }
            return {
                name: category.name,
                url: category.url,
                rss: category.rss
            }
        }
    ).flat()
}

