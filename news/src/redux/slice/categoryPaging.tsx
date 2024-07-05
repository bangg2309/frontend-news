import {createReducer, createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name: "paging",
    initialState: {
        curPage: 1,
        perPage: 10,
        totalPage: 1,
        totalPost: 0,
        post:[]
    },
    reducers: {
        setPage: (state, action) => {
            state.curPage = action.payload;
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload;
        },
        setTotalPage: (state, action) => {
            state.totalPage = action.payload;
        },
        setTotalPost: (state, action) => {
            state.totalPost = action.payload;
            state.totalPage = Math.ceil(action.payload / state.perPage);
        },
        setPost: (state, action) => {
            state.post = action.payload;
        }

    }
})