import { Link } from 'react-router-dom';
import styles from './RecipeItem.module.css';
import { BiSolidLike, BiSolidDislike, BiBowlHot } from 'react-icons/bi';

const RecipeItem = ({ selectedRecipe }) => {
    console.log('selectedRecipe', selectedRecipe);

    const sections = selectedRecipe.sections[0].components;

    return !!selectedRecipe ? (
        <section className={styles.containerDetails}>
            <div key={selectedRecipe.id}>
                <div className={styles.mainCtn} id="top">
                    <img src={selectedRecipe.thumbnail_url} alt={selectedRecipe.name} />
                    <div className={styles.detailsCtn}>
                        <div>
                            <h3 className={styles.itemName}>{selectedRecipe.name}</h3>
                            <h4 className={styles.itemCategory}>
                                Category: <span>{selectedRecipe.total_time_tier?.display_tier}</span>
                            </h4>
                            <p className={styles.itemPrep}>
                                Preparation Time: <span>{selectedRecipe.prep_time_minutes} minutes</span>
                            </p>
                            <p className={styles.itemCook}>
                                Cooking Time: <span>{selectedRecipe.cook_time_minutes} minutes</span>
                            </p>
                            <p className={styles.itemServ}>
                                Servings: &nbsp;
                                <span>
                                    {selectedRecipe.num_servings} <BiBowlHot />
                                </span>
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
                                    {sections.map((item) => (
                                        <li key={item.id}>{item.raw_text}</li>
                                    ))}
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
                    <source src={selectedRecipe.original_video_url} type="application/x-mpegURL" />
                </video>
                <div className={styles.nutritionContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.tableLeft}>Nutritions</th>
                                <th className={styles.tableRight}>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.tableLeft}>Calories:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.calories}kCal</td>
                            </tr>
                            <tr>
                                <td className={styles.tableLeft}>Carbohydrates:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.carbohydrates} g</td>
                            </tr>
                            <tr>
                                <td className={styles.tableLeft}>Fat:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.fat} g</td>
                            </tr>
                            <tr>
                                <td className={styles.tableLeft}>Fiber:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.fiber} g</td>
                            </tr>
                            <tr>
                                <td className={styles.tableLeft}>Protein:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.protein} g</td>
                            </tr>
                            <tr>
                                <td className={styles.tableLeft}>Sugar:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.sugar} g</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className={styles.tableNote}>*per 100g of serving</p>
                </div>
            </div>

            <Link to="/" className={styles.btn}>
                Go Back
            </Link>
        </section>
    ) : (
        <></>
    );
};

export default RecipeItem;
