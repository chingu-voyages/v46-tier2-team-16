import { Link, useParams } from 'react-router-dom';
import styles from './RecipeItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeById } from '../../features/recipe/recipeSliceById';
import { useEffect } from 'react';

// To uncomment when ready the RecipeItem is ready to use it
// import { RelatedRecipes } from "./components/RelatedRecipes/index"

const RecipeItem = () => {
    const params = useParams();
    const recipeId = params.id;
    const recipe = useSelector((state) => state.recipe);
    const dispatch = useDispatch();
    const selectedRecipe = recipe.recipes;
    const recipeData = selectedRecipe.results;
    console.log('SELECTED', selectedRecipe);
    console.log('DATA', recipeData);
    useEffect(() => {
        dispatch(fetchRecipeById(recipeId));
    }, [dispatch, recipeId]);

    return (
        <section className={styles.containerDetails}>
            {/* <h4>TEST RECIPE #{recipeId}</h4> */}

            <div key={recipeData.id}>
                <div className={styles.mainCtn}>
                    <img src={recipeData.thumbnail_url} alt={recipeData.name} />
                    <div className={styles.detailsCtn}>
                        <div>
                            <h3 className={styles.itemName}>{recipeData.name}</h3>
                            <h4 className={styles.itemCategory}>Category: {recipeData.total_time_tier.display_tier}</h4>
                            {/* <p className="item-rating">
                                Rating: <span>{selectedRecipe.rating}</span>
                            </p> */}
                            <p className={styles.itemPrep}>
                                Preparation Time: <span>{recipeData.prep_time_minutes} minutes</span>
                            </p>
                            <p className={styles.itemCook}>
                                Cooking Time: <span>{recipeData.cook_time_minutes} minutes</span>
                            </p>
                            {/* <p className="item-diff">
                                Difficulty: <span>{selectedRecipe.difficulty}</span>
                            </p> */}
                            <p className={styles.itemServ}>
                                Servings: <span>{recipeData.num_servings}</span>
                            </p>
                        </div>
                        <div>
                            <p className={styles.itemIngr}>
                                Ingredients:
                                {/* <span>{selectedRecipe?.sections?.map((item, idx) => console.log(item))}</span> */}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.directionsCtn}>
                    <h4>Directions:</h4>
                    {/* {selectedRecipe.directions.map((step, idx) => (
                        <ol key={idx} className="item-step">
                            Step {idx + 1}.&nbsp;<span>{step}</span>
                        </ol>
                    ))} */}
                </div>
                <p className={styles.itemNote}>
                    Note: <span>{recipeData.notes}</span>
                </p>
            </div>

            {/* To uncomment when ready the RecipeItem is ready to use it 
            <RelatedRecipes id={id} /> */}

            <Link to="/" className={styles.btn}>
                Go Back
            </Link>
        </section>
    );
};

export default RecipeItem;
