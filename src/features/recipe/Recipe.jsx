import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes } from './recipeSlice'

import styles from './Recipe.module.css'

const Recipe = () => {
    const recipe = useSelector(state => state.recipe)
    const recipeResults = recipe.recipes.results
    console.log("Recipe results: ", recipeResults)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [])

    return (
        <section className={styles.container}>
            <h2 className={styles.text}>List of Recipes</h2>
            {recipe.loading && <p className={styles.text}>Loading...</p>}
            {!recipe.loading && recipe.error ? <p className={styles.text}>Error: {recipe.error}</p> : null}
            {!recipe.loading && recipeResults ? (
                <ul>
                    {recipeResults.map(recipe => (
                        <li key={recipe.id} className={styles.text}>{recipe.name}</li>
                    ))}
                </ul>
            ) : null}
        </section>
    )
}

export default Recipe;