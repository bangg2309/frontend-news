export interface Post {
    title: string;
    category: string;
    date: string;
}

// const fs = require('fs');
// post: Post, email: string
export const savePost = async () => {
    fetch('savePostData.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
        .then((data) => {
            console.log(data)
        })
        .catch(error => console.log('Error:', error))

}