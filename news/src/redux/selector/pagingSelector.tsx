import {createSelector} from "@reduxjs/toolkit";

export const currentPageSelector = (state: any) => state.paging.curPage
export const perPageSelector = (state: any) => state.paging.perPage
export const totalPageSelector = (state: any) => state.paging.totalPage
export const totalPostSelector = (state: any) => state.paging.totalPost
export const postSelector = (state: any) => state.paging.post
export const upperPost = createSelector(currentPageSelector, perPageSelector, postSelector, (currentPage, perPage, post) => {
    return post.slice(currentPage * perPage, currentPage * perPage + perPage / 2)
})
export const lowerPost = createSelector(currentPageSelector, perPageSelector, postSelector, (currentPage, perPage, post) => {

    return post.slice(currentPage * perPage + perPage / 2, currentPage * perPage + perPage)
})
