import { Link } from 'react-router-dom';
import styles from './RecipeItem.module.css';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';

const RecipeItem = ({selectedRecipe}) => {
    console.log('selectedRecipe', selectedRecipe)

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
            <div key={selectedRecipe.id}>
                <div className={styles.mainCtn}>
                    <img src={selectedRecipe.thumbnail_url} alt={selectedRecipe.name} />
                    <div className={styles.detailsCtn}>
                        <div>
                            <h3 className={styles.itemName}>{selectedRecipe.name}</h3>
                            <h4 className={styles.itemCategory}>Category: {selectedRecipe.total_time_tier.display_tier}</h4>
                            <p className={styles.itemPrep}>
                                Preparation Time: <span>{selectedRecipe.prep_time_minutes} minutes</span>
                            </p>
                            <p className={styles.itemCook}>
                                Cooking Time: <span>{selectedRecipe.cook_time_minutes} minutes</span>
                            </p>
                            <p className={styles.itemServ}>
                                Servings: <span>{selectedRecipe.num_servings}</span>
                            </p>
                            <p className={styles.itemLike}>
                                <BiSolidLike color="green" /> <span>{selectedRecipe.user_ratings.count_positive}</span>
                            </p>
                            <p className={styles.itemLike}>
                                <BiSolidDislike color="red" /> <span>{selectedRecipe.user_ratings.count_negative}</span>
                            </p>
                        </div>
                        <div>
                            <p className={styles.itemIngr}>
                                Ingredients:
                                <span>
                                    {selectedRecipe?.sections.map((item) => {
                                        item?.components.map((component) => <li key={component.id}>{component.raw_text}</li>);
                                    })}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.directionsCtn}>
                    <h4>Directions:</h4>
                    {selectedRecipe.instructions.map((step, idx) => (
                        <ol key={idx} className={styles.itemStep}>
                            Step {step.position}.&nbsp;<span>{step.display_text}</span>
                        </ol>
                    ))}
                </div>
            </div>
            <div className={styles.facts}>
                <video controls width="450" className={styles.video}>
                    <source src={selectedRecipe.video_url} type="application/x-mpegURL" />
                </video>
                <div className={styles.nutritionContainer}>
                    <h3 className={styles.nutritionH3}>Nutrition Facts:</h3>
                    <p className={styles.nutrition}>
                        Calories: <span>{selectedRecipe.nutrition.calories}</span>
                    </p>
                    <p className={styles.nutrition}>
                        Carbohydrates: <span>{selectedRecipe.nutrition.carbohydrates}</span>
                    </p>
                    <p className={styles.nutrition}>
                        Fat: <span>{selectedRecipe.nutrition.fat}</span>
                    </p>
                    <p className={styles.nutrition}>
                        Fiber: <span>{selectedRecipe.nutrition.fiber}</span>
                    </p>
                    <p className={styles.nutrition}>
                        Protein: <span>{selectedRecipe.nutrition.protein}</span>
                    </p>
                    <p className={styles.nutrition}>
                        Sugar: <span>{selectedRecipe.nutrition.sugar}</span>
                    </p>
                </div>
            </div>

            <Link to="/" className={styles.btn}>
                Go Back
            </Link>
        </section>
)}

export default RecipeItem;
