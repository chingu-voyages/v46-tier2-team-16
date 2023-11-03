import { RecipeCard } from '../../components/RecipeCard'
import { Loader } from '../../components/Loader'

import styles from './Recipe.module.css'

const Recipe = (props) => {
    const { recipe, recipesToDisplay } = props
    // console.log('recipe:', recipe);
    // recipe.results.map(oneRecipe => console.log("One recipe: ", oneRecipe));
    recipe.results.map(oneRecipe => console.log("One recipe Id: ", oneRecipe.id));
    // the following, recipesToDisplay is undefined
    console.log('recipesToDisplay', recipesToDisplay);

    return (
        <section className={styles.container}>
            <h2 className={styles.text}>List of Recipes</h2>

            {recipe.isLoading && <Loader />}
            {!recipe.isLoading && recipe.error ? (
                <p className={styles.text}>Error: {recipe.error}</p>
            ) : null}
            {!recipe.isLoading && recipesToDisplay ? (
                <ul>
                    {recipesToDisplay.map((oneRecipe) => (
                        <li key={oneRecipe.id} className={styles.text}>
                            <RecipeCard oneRecipe={oneRecipe} />
                        </li>
                    ))
                    }
                </ul>
            ) : <p>No recipe with this name</p>}

        </section>
    )
}

export default Recipe;