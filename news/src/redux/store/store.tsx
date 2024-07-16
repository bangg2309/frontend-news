import {configureStore} from "@reduxjs/toolkit";
import fullCategory from "../slice/fullCategory";
import commentsSlice from "../slice/commentsSlice";
import authSlice from "../slice/authSlice";

export const store = configureStore({
    reducer: {
        fullCategory: fullCategory.reducer,
        comments: commentsSlice.reducer,
        auth: authSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
