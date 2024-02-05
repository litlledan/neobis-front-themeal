export const getIngredients = (meal) => {
    let strIngredient  = 'strIngredient'
    let strMeasure = 'strMeasure'

    let ingredientsObj = []
    let count = 1

    while (meal[strIngredient + count]){
        ingredientsObj[meal[strIngredient + count]] = meal[strMeasure + count]
        count++
    }
    return ingredientsObj
}
