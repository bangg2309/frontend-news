import {configureStore} from "@reduxjs/toolkit";
import categoryPageSlice from "../slice/categoryPaging";
import fullCategory from "../slice/fullCategory";

export const store =configureStore({
    reducer:{
        paging: categoryPageSlice.reducer,
        fullCategory: fullCategory.reducer,
    }
})