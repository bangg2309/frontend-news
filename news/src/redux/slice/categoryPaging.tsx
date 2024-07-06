import {createReducer, createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name: "paging",
    initialState: {
        curPage: 1,
        perPage: 10,
        totalPage: 1,
        totalPost: 0,
        post: []
    },
    reducers: {
        setCurPage: (state, action) => {
            state.curPage = action.payload;
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload % 2 === 0 ? action.payload : action.payload + 1;
        },
        setPost: (state, action) => {
            state.post = action.payload;
            state.totalPage = Math.ceil(action.payload.length / state.perPage);
            state.totalPost = action.payload.length;
        },


    }
})