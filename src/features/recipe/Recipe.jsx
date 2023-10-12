import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes } from './recipeSlice'

import styles from './Recipe.module.css'

    const Recipe = (props) => {
        const { recipe, recipesToDisplay } = props
        console.log('recipesToDisplay', recipesToDisplay)
    return (
        <section className={styles.container}>
            <h2 className={styles.text}>List of Recipes</h2>

            {recipe.loading && <p className={styles.text}>Loading...</p>}
            {!recipe.loading && recipe.error ? (
                <p className={styles.text}>Error: {recipe.error}</p>
                ) : null}
            {!recipe.loading && recipesToDisplay ? (
                 <ul>
                    {recipesToDisplay.map((recipe) => (
                        <li key={recipe.id} className={styles.text}>
                            {recipe.name}
                        </li>
                        ))          
                    }
                </ul>
                ) : <p>No recipe with this name</p>}

        </section>
    )
}

export default Recipe;
