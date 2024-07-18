import {users} from "../data/usersData";
import {Category} from "./Category";

export interface User {
    id: number;
    email: string;
    password: string;
    name?: string;
    phone?: string;
    address?: string;
    avatar?: string;
    saveList: UserSavePost[];
}

export interface UserSavePost {
    link: string;
    title: string;
    category: Category;
    date: string;
    thumb?:string
}

const convertDate = (date: string) => {
    const dateArray = date.split('/')
    return dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]

}
export const settingSavePost = (findingPost: UserSavePost) => {
    findingPost.date = convertDate(findingPost.date)
    sessionStorage.setItem('isLogin', 'true')
    const isLogin = sessionStorage.getItem('isLogin') == 'true';
    if (isLogin) {
        const user = getUser();
        if (!user) return false;
        const allSaveLists = JSON.parse(localStorage.getItem('saveLists') || '{}');
        const userSaveList: UserSavePost[] = allSaveLists[user.email] || [];
        const postIndex = userSaveList.findIndex(p => p.title === findingPost.title);
        if (postIndex !== -1) return true;
    }
    return false;
}
export const isLogin = () => {
    const isLogin = sessionStorage.getItem('isLogin')
    if (isLogin === 'true') {
        return true;
    }
    return false;
}
export const getUser = () => {
    const userS = JSON.parse(sessionStorage.getItem('user') || 'null')
    if (!userS) return null;
    return users.find((user) => user.email === userS.email && user.password === userS.password)

}

export const savePost = (post: UserSavePost) => {
    const user = getUser();
    if (!user) return false;
    const allSaveLists = JSON.parse(localStorage.getItem('saveLists') || '{}');
    const userSaveList: UserSavePost[] = allSaveLists[user.email] || [];
    const postIndex = userSaveList.findIndex(p => p.title === post.title);
    if (postIndex !== -1) {
        userSaveList.splice(postIndex, 1);
    } else {
        userSaveList.push(post);
    }
    allSaveLists[user.email] = userSaveList;
    localStorage.setItem('saveLists', JSON.stringify(allSaveLists));
    return true;
}
const checkIsSave = (post: UserSavePost) => {
    if (isLogin()) {
        const userId = sessionStorage.getItem('user')
        if (!userId) return false;
        const user = getUser();
        if (!user) return false;
        user.saveList.map((savePost) => {
            if (savePost.title === post.title) {
                return true;
            }
        })
    }
    return false;
}