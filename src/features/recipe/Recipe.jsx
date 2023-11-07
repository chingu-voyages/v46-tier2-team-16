import { RecipeCard } from '../../components/RecipeCard';
import { Loader } from '../../components/Loader';
import { useGlobalContext } from '../../contexts/DarkModeContext';

import styles from './Recipe.module.css';

const Recipe = (props) => {
    const { recipe, recipesToDisplay } = props;
    const { isDarkTheme } = useGlobalContext();

    // console.log('recipesToDisplay', recipesToDisplay);

    return (
        <section className={`${styles.section} ${isDarkTheme ? styles['dark-section'] : ''}`}>
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