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
    useEffect(() => {
        dispatch(fetchRecipeById(recipeId));
    }, [dispatch, recipeId]);
    const selectedRecipe = recipe.recipes;

    console.log('SELECTED', selectedRecipe);
    return (
        <section className={styles.containerDetails}>
            <h4>TEST RECIPE #{recipeId}</h4>

            <div key={selectedRecipe.id}>
                <div className={styles.mainCtn}>
                    <img src={selectedRecipe.thumbnail_url} alt={selectedRecipe.name} />
                    <div className={styles.detailsCtn}>
                        <div>
                            <h3 className={styles.itemName}>{selectedRecipe.name}</h3>
                            {/* <h4 className={styles.itemCategory}>Category: {selectedRecipe.total_time_tier.display_tier}</h4> */}
                            <p className={styles.itemPrep}>
                                Preparation Time: <span>{selectedRecipe.prep_time_minutes} minutes</span>
                            </p>
                            <p className={styles.itemCook}>
                                Cooking Time: <span>{selectedRecipe.cook_time_minutes} minutes</span>
                            </p>
                            <p className={styles.itemServ}>
                                Servings: <span>{selectedRecipe.num_servings}</span>
                            </p>
                        </div>
                        <div>
                            <p className={styles.itemIngr}>
                                Ingredients:
                                <span>
                                    {/* {selectedRecipe?.sections.map((item, idx) => {
                                        item.components.map((component) => <li key={idx}>{component.raw_text}</li>);
                                    })} */}
                                </span>
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
                {/* <p className={styles.itemNote}>
                    Note: <span>{selectedRecipe.notes}</span>
                </p> */}
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
