import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectSearchedMeal} from "../redux/reduxSelectors/reduxSelectors";
import {useNavigate} from "react-router-dom";
import {clearSearchResults} from "../redux/reducers/searchMeal";

const SearchedMealsList = () => {

    const {data, status} = useSelector(selectSearchedMeal)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearSearchResults())
    },[dispatch])

    const navigate = useNavigate()

    return (
        <>
            {
                status === "resolve" ?  
                   <div className="container">
                       <div className="meal__list">
                           {
                               data.meals ? data.meals.map(item => (
                                   <div onClick={() => navigate(`/meal/${item.idMeal}`)} key={item.idMeal} className="meal__item">
                                       <img className="meal__item-img" src={item.strMealThumb} alt=""/>
                                       <h3 className="meal__item-title">{item.strMeal}</h3>
                                       <p className="meal__item-subtitle">{item.strCategory} | {item.strArea}</p>
                                   </div>
                               )) : <h2 className="meal__empty">Nothing was found for your request!</h2>
                           }
                       </div>
                   </div>
                    : status === "loading" ? <div className="meal__search-loading"><h2>Loading...</h2></div> : ""
            }
        </>
    );
};

export default SearchedMealsList;