import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {searchMeal} from "../../redux/reducers/searchMeal";
import SearchedMealsList from "../../Components/SearchedMealsList";

const SearchMeal = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const handleChange = useCallback((e) => {
        setInput(e.target.value)
    },[])


    const handleSubmit = (e) => {
        e.preventDefault()

        if (input.trim().length > 3){
            dispatch(searchMeal(input))
        }else {
            alert("Min-length is 3")
        }

        setTimeout(() => {
            window.scroll(0, 700)
        }, 400)
    }


    return (
           <>
               <form onSubmit={handleSubmit} className="search">
                   <h2 className="search__title">Find your Meal</h2>
                   <label className="search__label">
                       <input onChange={handleChange} placeholder="Find your meal" className="search__input" type="text"/>
                       <button type="submit" className="search__btn">Search</button>
                   </label>
               </form>
               <SearchedMealsList/>
           </>
    );
};

export default SearchMeal;