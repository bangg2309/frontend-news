import {configureStore} from "@reduxjs/toolkit";
import fullCategory from "../slice/fullCategory";

export const store = configureStore({
    reducer: {
        fullCategory: fullCategory.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>