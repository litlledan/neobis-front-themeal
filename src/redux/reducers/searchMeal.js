import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const searchMeal = createAsyncThunk(
    "meal/searchMeal",
    async (str) => {
        try {
            const res = await axios(`search.php?s=${str}`)
            if (res.status === 200){
                return res.data
            }else {
                throw new Error('Unexpected Error!')
            }

        }catch (err){
            if (err instanceof Error){
                throw new Error(err.message);
            } else {
                console.log('Unexpected error', err);
            }
        }
    }
)





const searchedMealSlice = createSlice({
    name: "searchedMealSlice",
    initialState: {
        data: [],
        status: "",
        error: ""
    },
    reducers:{
        clearSearchResults: (state) => {
            state.data = []
            state.status = ''
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchMeal.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
        builder
            .addCase(searchMeal.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.payload
            })
        builder
            .addCase(searchMeal.fulfilled, (state, action) => {
                state.status = "resolve"
                state.error = ""
                state.data = action.payload
            })

    }
})

export const {clearSearchResults} = searchedMealSlice.actions

export default searchedMealSlice.reducer