import RecipeItem from "../../components/recipeItem/RecipeItem"
import RelatedRecipes from "../../components/RelatedRecipes/RelatedRecipes"
import { Loader } from "../../components/Loader";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeById } from '../../features/recipe/recipeSliceById';
import { useEffect } from 'react';

const RecipeDetails = () => {
    const params = useParams();
    const recipeId = parseInt(params.id);

    const dispatch = useDispatch();

    // console.log('recipeId', recipeId)

    useEffect(() => {
        dispatch(fetchRecipeById(recipeId));
    }, [dispatch, recipeId])

    const recipeById = useSelector((state) => state.recipeById);
    const selectedRecipe = recipeById.recipeById;

    // console.log('selectedRecipe recipedetails', selectedRecipe)
    return (
        <>
            {recipeById.loading && <Loader />}
            {!recipeById.loading && selectedRecipe ? (
                <>
                    <RecipeItem selectedRecipe={selectedRecipe} />
                    <RelatedRecipes recipeId={recipeId} />
                </>
            ) : null}
        </>
    )
}

export default RecipeDetails;