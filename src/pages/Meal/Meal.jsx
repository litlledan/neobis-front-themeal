import React, {useEffect} from 'react';
import SearchMeal from "../SearchMeal/SearchMeal";
import {getRandomMeal} from "../../redux/reducers/randomMeal";
import {useDispatch, useSelector} from 'react-redux'
import {selectRandomMeal} from "../../redux/reduxSelectors/reduxSelectors";
import {Link} from "react-router-dom";

const Meal = () => {

    const dispatch = useDispatch()

    const {data, status} = useSelector(selectRandomMeal)

    useEffect(() => {
        dispatch(getRandomMeal())
    }, [dispatch]);


    return (
        <>
                <div className="meal">
                    <div className="container">
                        {
                            status === 'resolve' && <div className="meal__content">
                                <div className="meal__left">
                                    <h2 className="meal__title-top">
                                        Meal of the Day
                                    </h2>
                                    <Link to={`/meal/${data.meals[0].idMeal}`} className="meal__title">
                                        {data.meals[0].strMeal}
                                    </Link>
                                    <p className="meal__info">{data.meals[0].strCategory} | {data.meals[0].strArea}</p>
                                </div>
                                <div className="meal__right">
                                    <img className="meal__img" src={data.meals[0].strMealThumb} alt=""/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                    <SearchMeal/>
                </>
    );
};

export default Meal;