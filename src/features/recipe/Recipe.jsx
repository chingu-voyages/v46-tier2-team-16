import { RecipeCard } from '../../components/RecipeCard';

import styles from './Recipe.module.css';

const Recipe = (props) => {
    const { recipe, recipesToDisplay } = props;
    console.log('recipesToDisplay', recipesToDisplay);

    // <div className={styles.container}>
    //     {recipesToDisplay.map((oneRecipe) => (
    //         <div key={oneRecipe.id} className={`${styles.text} card`}>
    //             <p>XYZ</p>
    //             <RecipeCard oneRecipe={oneRecipe} />
    //         </div>
    //     ))}
    // </div>;
    return (
        <section className={styles.section}>
            <h2 className={styles.text}>List of Recipes</h2>

            {recipe.loading && <p className={styles.text}>Loading...</p>}
            {!recipe.loading && recipe.error ? <p className={styles.text}>Error: {recipe.error}</p> : null}
            {!recipe.loading && recipesToDisplay ? (
                <div className={styles.container}>
                    {recipesToDisplay.map((oneRecipe) => (
                        <RecipeCard key={oneRecipe.id} oneRecipe={oneRecipe} />
                    ))}
                </div>
            ) : (
                <p>No recipe with this name</p>
            )}
        </section>
    );
};

export default Recipe;
