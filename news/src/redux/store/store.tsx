import {configureStore} from "@reduxjs/toolkit";
import categoryPageSlice from "../slice/categoryPaging";

export const store =configureStore({
    reducer:{
        paging: categoryPageSlice.reducer,
    }
})