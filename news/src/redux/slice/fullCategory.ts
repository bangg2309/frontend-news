import {createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name: "fullCategory",
    initialState: {
        loading: false,
        error: null
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }

})