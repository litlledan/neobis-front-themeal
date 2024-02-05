import {configureStore} from "@reduxjs/toolkit";
import randomMeal from "../reducers/randomMeal"
import oneMeal from "../reducers/oneMeal"
import searchedMeal from "../reducers/searchMeal"


export const store = configureStore({
    reducer: {
        randomMeal,
        oneMeal,
        searchedMeal
    }
})