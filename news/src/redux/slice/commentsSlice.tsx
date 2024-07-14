import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Comment {
    id: number;
    username: string;
    text: string;
    time: string;
    articlePath: string;
}

interface CommentsState {
    comments: Comment[];
}

const initialState: CommentsState = {
    comments: [],
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload);
        }
    },
});

export const { addComment } = commentsSlice.actions;

export default commentsSlice;