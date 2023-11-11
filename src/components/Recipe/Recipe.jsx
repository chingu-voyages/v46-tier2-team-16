import { RecipeCard } from '../../components/RecipeCard';
import { Loader } from '../../components/Loader';
import { useGlobalContext } from '../../contexts/DarkModeContext';

import styles from './Recipe.module.css';

const Recipe = (props) => {
    const { recipe, recipesToDisplay } = props;
    const { isDarkTheme } = useGlobalContext();
    console.log('recipesToDisplay', recipesToDisplay);

    return (
        <section className={`${styles.section} ${isDarkTheme ? styles['dark-theme'] : ''}`}>
            {recipe.loading && <Loader />}
            {!recipe.loading && recipesToDisplay.length === 0 ? (
                <p className={`${styles.noRecipe} ${isDarkTheme ? styles['dark-noRecipe'] : ''}`}>Sorry, no recipe to satisfy your papilles!</p>
            ) : (
                <></>
            )}
            {!recipe.loading && recipesToDisplay ? (
                <div className={`${styles.container} ${isDarkTheme ? styles['dark-theme'] : ''}`}>
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
