import { RecipeCard } from '../../components/RecipeCard';
import { Loader } from '../../components/Loader';
import { useGlobalContext } from '../../contexts/DarkModeContext';


import styles from './Recipe.module.css';

const Recipe = (props) => {
    const { recipe, recipesToDisplay } = props;
    const { isDarkTheme } = useGlobalContext();
    // console.log('recipe:', recipe);
    // recipe.results.map(oneRecipe => console.log("One recipe: ", oneRecipe));
    // recipe.results.map(oneRecipe => console.log("One recipe Id: ", oneRecipe.id));
    // the following, recipesToDisplay is undefined
    console.log('recipesToDisplay', recipesToDisplay);

    return (
        <section className={`${styles.section} ${isDarkTheme ? styles['dark-section'] : ''}`}>
            {/* TODO - update the following all .loading to .isLoading */}
            {recipe.loading && <Loader />}
            {!recipe.loading && recipe.error ? <p className={styles.text}>Error: {recipe.error}</p> : null}
            {!recipe.loading && recipesToDisplay ? (
                <div className={styles.container}>
                    {recipesToDisplay.map((oneRecipe) => (
                        <RecipeCard key={oneRecipe.id} oneRecipe={oneRecipe} />
                    ))}
                </div>
            ) : (
                <></>
            )}
        </section>
    );
};

export default Recipe;
