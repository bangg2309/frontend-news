import {configureStore} from "@reduxjs/toolkit";
import categoryPageSlice from "../slice/categoryPaging";
import fullCategory from "../slice/fullCategory";
import commentsSlice from "../slice/commentsSlice";

export const store =configureStore({
    reducer:{
        paging: categoryPageSlice.reducer,
        fullCategory: fullCategory.reducer,
        comments: commentsSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>;