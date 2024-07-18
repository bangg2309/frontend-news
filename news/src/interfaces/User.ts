import {users} from "../data/usersData";

export interface User {
    id: number;
    email: string;
    password: string;
    name?: string;
    phone?: string;
    address?: string;
    avatar?: string;
    saveList?: UserSavePost[];
}

export interface UserSavePost {
    title: string;
    category: string;
    date: string;
}

const convertDate = (date: string) => {
    const dateArray = date.split('/')
    return dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]

}
export const settingSavePost = (findingPost: UserSavePost) => {
    findingPost.date = convertDate(findingPost.date)
    sessionStorage.setItem('isLogin', 'true')
    const isLogin = sessionStorage.getItem('isLogin')
    if (isLogin === 'true') {
        const userId = sessionStorage.getItem('user')
        if (!userId) return false;
        users.map((user) => {
            if (user.id === Number.parseInt(userId)) {
                user.saveList?.map((post) => {
                    if (post.title === findingPost.title) {
                        return true;
                    }
                })
            }
        })
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
const getUser = () => {
    const userId = sessionStorage.getItem('user')
    if (!userId) return null;
    return users.find((user) => user.id === Number.parseInt(userId))
}

export const savePost = (post: UserSavePost) => {
    if (isLogin()) {
        const userId = sessionStorage.getItem('user')
        if (!userId) return false;
        const user = getUser();
        if (!user) return false;
        if (!user.saveList) user.saveList = []
        user.saveList?.map((savePost) => {
            if (savePost.title === post.title) {
                //delete
                user.saveList?.splice(user.saveList.indexOf(savePost), 1)
                return true;
            }
        })
        user.saveList?.push(post)
        return true;
    }
}
const checkIsSave = (post: UserSavePost) => {
    if (isLogin()) {
        const userId = sessionStorage.getItem('user')
        if (!userId) return false;
        const user = getUser();
        if (!user) return false;
        user.saveList?.map((savePost) => {
            if (savePost.title === post.title) {
                return true;
            }
        })
    }
    return false;
}