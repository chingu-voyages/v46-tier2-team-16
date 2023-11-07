// this component will be in the details component and should received the param of the Url
//as props in order to fetch the info from the api

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedRecipe } from '../../features/recipe/relatedRecipesSlice';

import styles from './RelatedRecipes.module.css';
import { Link } from 'react-router-dom';

// import { useGetListSimilaritiesQuery } from "../../features/recipe/recipeSlice";
// import { Loader } from '../../components/Loader';

const RelatedRecipes = ({ recipeId }) => {
    // const { data: getListSimilaritiesData, error, isError, isLoading } = useGetListSimilaritiesQuery();

    // if (isLoading) return <Loader />
    // console.log("getListSimilaritiesData: ", getListSimilaritiesData);

    console.log('id related recipes compo', recipeId);
    const dispatch = useDispatch();

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
                        <li className={styles.recipe}>
                            <img className={styles.image} src={oneRecipe.thumbnail_url} alt={oneRecipe.slug} width={250} height={216} />
                            <p className={styles.recipeName}>{oneRecipe.name}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    );
};

export default RelatedRecipes;