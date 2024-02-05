import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getOneMeal} from "../../redux/reducers/oneMeal";
import {useDispatch, useSelector} from "react-redux";
import {selectOneMeal} from "../../redux/reduxSelectors/reduxSelectors";
import {getIngredients} from "../../utils/ingredients";

const Description = () => {

    const params = useParams().id
    const dispatch = useDispatch()

    let ingredients = {}

    const {data, status} = useSelector(selectOneMeal)

    useEffect(() => {
        dispatch(getOneMeal(params))
    }, [params, dispatch])


    if (status === "resolve"){
        ingredients = getIngredients(data.meals[0])
    }

    return (
        <div className="description">
            <div className="container">
                {
                    status === "resolve" ? <>
                        <div className="description__content">
                            <div className="description__left">
                                <h2 className="description__title">{data.meals[0].strMeal}</h2>
                                <p className="description__subtitle">{data.meals[0].strCategory} | {data.meals[0].strArea}</p>
                                <ul className="description__list">
                                    {
                                        Object.entries(ingredients).map((item, idx) => (
                                            <li key={idx} className="description__item">- {item[0]} <span>{item[1]}</span></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="description__right">
                                <img className="description__img"
                                     src={data.meals[0].strMealThumb} alt=""/>
                            </div>
                        </div>
                        <div className="description__instruction">
                            <h3 className="description__instruction-title">Instruction</h3>
                            <p className="description__instruction-text">{data.meals[0].strInstructions}</p>
                        </div>
                        <a href={data.meals[0].strYoutube} className="description__btn">Watch on YouTube</a>
                    </> : status === "loading" ? "Loading..." : ""
                }
            </div>
        </div>
    );
};

export default Description;