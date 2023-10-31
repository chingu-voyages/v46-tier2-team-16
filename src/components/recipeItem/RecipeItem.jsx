import { Link, useParams } from 'react-router-dom';
import styles from './RecipeItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeById } from '../../features/recipe/recipeSliceById';
import { useEffect } from 'react';

import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';

// To uncomment when ready the RecipeItem is ready to use it
// import { RelatedRecipes } from "./components/RelatedRecipes/index"

const RecipeItem = () => {
    const params = useParams();
    const recipeId = params.id;
    const recipe = useSelector((state) => state.recipe);
    // console.log('RECIPE', recipe);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecipeById(recipeId));
    }, [dispatch, recipeId]);

    const selectedRecipe = recipe.recipes.results;

    console.log('SELECTED', selectedRecipe);

    const product = selectedRecipe && selectedRecipe.find((item) => item.id === +recipeId);

    console.log('PRODUCT', product);

    // for (const section of product.sections) {
    //     for (const component of section.components) {
    //         const measurement = component.measurements[0];
    //         const quantity = measurement.quantity === "0" ? "-" : measurement.quantity;
    //         const unit = quantity > 1 ? measurement.unit.display_plural : measurement.unit.display_singular;
    //         const ingredientItem = document.createElement("li");
    //         const ingredientText = ${quantity} ${unit} ${components.ingredient.name};
    //         ingredientItem.innerText = ingredientText;
    //         ingredientItem.style.listStyle = "disc"; // Add a small black dot
    //         recipeIngredientsUl.appendChild(ingredientItem);
    //     }
    // }

    // console.log('SECTION', section);

    return (
        <section className={styles.containerDetails}>
            {/* <h4>TEST RECIPE #{recipeId}</h4> */}

            <div key={product.id}>
                <div className={styles.mainCtn}>
                    <img src={product.thumbnail_url} alt={product.name} />
                    <div className={styles.detailsCtn}>
                        <div>
                            <h3 className={styles.itemName}>{product.name}</h3>
                            <h4 className={styles.itemCategory}>Category: {product.total_time_tier.display_tier}</h4>
                            <p className={styles.itemPrep}>
                                Preparation Time: <span>{product.prep_time_minutes} minutes</span>
                            </p>
                            <p className={styles.itemCook}>
                                Cooking Time: <span>{product.cook_time_minutes} minutes</span>
                            </p>
                            <p className={styles.itemServ}>
                                Servings: <span>{product.num_servings}</span>
                            </p>
                            <p className={styles.itemServ}>
                                <BiSolidLike color="green" /> :<span>{product.user_ratings.count_positive}</span>
                            </p>
                            <p className={styles.itemServ}>
                                <BiSolidDislike color="red" /> : <span>{product.user_ratings.count_negative}</span>
                            </p>
                        </div>
                        <div>
                            <p className={styles.itemIngr}>
                                Ingredients:
                                <span>
                                    {product?.sections.map((item) => {
                                        item?.components.map((component) => <li key={component.id}>{component.raw_text}</li>);
                                    })}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.directionsCtn}>
                    <h4>Directions:</h4>
                    {product.instructions.map((step, idx) => (
                        <ol key={idx} className={styles.itemStep}>
                            Step {step.position}.&nbsp;<span>{step.display_text}</span>
                        </ol>
                    ))}
                </div>
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
