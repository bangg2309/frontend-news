import {configureStore} from "@reduxjs/toolkit";
import fullCategory from "../slice/fullCategory";
import commentsSlice from "../slice/commentsSlice";

export const store = configureStore({
    reducer: {
        fullCategory: fullCategory.reducer,
        comments: commentsSlice.reducer
    }
})
