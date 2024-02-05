import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getRandomMeal = createAsyncThunk(
'meal/getRandomMeal',
async () => {
    try {
        const res = await axios('/random.php')

        if (res.status === 200){

            return res.data
        }else {
            throw new Error('Server Error!')
        }

    }catch (err){
        if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            console.log('Unexpected error', err);
        }
    }
})

const randomMealSlice = createSlice({
    name: "mealSlice",
    initialState:{
        data: [],
        status: '',
        error: ''
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getRandomMeal.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
        builder
            .addCase(getRandomMeal.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })
        builder
            .addCase(getRandomMeal.fulfilled, (state, action) => {
                state.status = 'resolve'
                state.error = ''
                state.data = action.payload
            })
    }
})

export default randomMealSlice.reducer