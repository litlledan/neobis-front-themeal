import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getOneMeal = createAsyncThunk(
    "meal/getOneMeal",
    async (id) => {
        try {
            const res = await axios(`/lookup.php?i=${id}`)

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

const oneMealSlice = createSlice({
    name: "oneMealSlice",
    initialState: {
        data: {},
        status: "",
        error: ""
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getOneMeal.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
        builder
            .addCase(getOneMeal.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.payload
            })
        builder
            .addCase(getOneMeal.fulfilled, (state, action) => {
                state.status = "resolve"
                state.error = ""
                state.data = action.payload
            })

    }
})

export default oneMealSlice.reducer