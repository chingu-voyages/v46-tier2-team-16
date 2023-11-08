import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedRecipe } from '../../features/recipe/relatedRecipesSlice';
import { useGlobalContext } from "../../contexts/DarkModeContext";

import styles from './RelatedRecipes.module.css';
import { Link } from 'react-router-dom';

const RelatedRecipes = ({ recipeId }) => {

    const dispatch = useDispatch();
    const { isDarkTheme } = useGlobalContext();

    useEffect(() => {
        dispatch(fetchRelatedRecipe(recipeId));
    }, [dispatch, recipeId]);

    const relatedRecipes = useSelector((state) => state.relatedRecipes);
    const listToDisplay = relatedRecipes.relatedRecipes;

    if (!listToDisplay) {
        return <></>;
    }

    return (
        <section className={styles.container}>
            <h3 className={styles.title}>Related Recipes</h3>
            <ul className={styles.list}>
                {[...listToDisplay].map((oneRecipe) => (
                    <Link key={oneRecipe.id} to={`/recipe/${oneRecipe.id}`}>
                        <li className={`${styles.recipe} ${isDarkTheme ? styles['dark-recipe'] : ''}`}>
                            <img className={styles.image} src={oneRecipe.thumbnail_url} alt={oneRecipe.slug} />
                            <p className={`${styles.recipeName} ${isDarkTheme ? styles['dark-recipeName'] : ''}`}>{oneRecipe.name}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    );
};

export default RelatedRecipes;