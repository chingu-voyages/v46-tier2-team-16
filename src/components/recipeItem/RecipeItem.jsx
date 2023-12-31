import { Link } from 'react-router-dom';
import styles from './RecipeItem.module.css';
import { useGlobalContext } from '../../contexts/DarkModeContext';
import { BiBowlHot } from 'react-icons/bi';

const RecipeItem = ({ selectedRecipe }) => {
    const sections = selectedRecipe.sections[0].components;
    console.log('Selected Recipe:', selectedRecipe);

    const { isDarkTheme } = useGlobalContext();

    return !!selectedRecipe ? (
        <section className={`${styles.containerDetails} ${isDarkTheme ? styles['dark-containerDetails'] : ''}`}>
            <div key={selectedRecipe.id} className={styles.insideContainerDetails}>
                <div className={styles.mainCtn} id="top">
                    <div className={styles.containerTitle}>
                        <h3 className={styles.itemName}>{selectedRecipe.name}</h3>
                        <p className={`${styles.itemCategory} ${isDarkTheme ? styles['dark-itemCategory'] : ''}`}>
                            Category: {selectedRecipe.total_time_tier?.display_tier}
                        </p>
                    </div>

                    <div className={styles.containerInfo}>
                        <span className={styles.insideInfo}>
                            <h6 className={styles.itemPrep}>Prep Time:</h6>
                            <p className={`${styles.itemsResult} ${isDarkTheme ? styles['dark-itemsResult'] : ''}`}>
                                {selectedRecipe.prep_time_minutes} minutes
                            </p>
                        </span>
                        <span className={styles.insideInfo}>
                            <h6 className={styles.itemCook}>Cook Time: </h6>
                            <p className={`${styles.itemsResult} ${isDarkTheme ? styles['dark-itemsResult'] : ''}`}>
                                {selectedRecipe.cook_time_minutes} minutes
                            </p>
                        </span>
                        <span className={styles.insideInfo}>
                            <h6 className={styles.itemServ}>
                                {' '}
                                <BiBowlHot /> Serves:
                            </h6>
                            <p className={`${styles.itemsResult} ${isDarkTheme ? styles['dark-itemsResult'] : ''}`}>
                                {' '}
                                {selectedRecipe.num_servings} servings
                            </p>
                        </span>
                    </div>
                </div>

                <div className={styles.secondContainer}>
                    <div className={styles.containerIngr}>
                        <h4 className={styles.itemIngr}>Ingredients:</h4>
                        <ul className={styles.ingredientList}>
                            {sections.map((item) => (
                                <li key={item.id}>{item.raw_text}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.containerDirec}>
                        <h4 className={styles.itemDirec}>Directions:</h4>
                        <ul className={styles.instructionsList}>
                            {selectedRecipe.instructions.map((step, idx) => (
                                <li key={idx} className={styles.itemStep}>
                                    <p className={`${styles.itemsResult} ${isDarkTheme ? styles['dark-itemsResult'] : ''}`}>{step.position}. </p>
                                    <p className={`${styles.stepText} ${isDarkTheme ? styles['dark-stepText'] : ''}`}>{step.display_text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.containerImage}>
                        <img src={selectedRecipe.thumbnail_url} alt={selectedRecipe.name} className={styles.selectedImage} />
                    </div>
                </div>

                <div className={styles.facts}>
                    <video controls width="450" className={styles.video}>
                        <source src={selectedRecipe.original_video_url} type="video/mp4" />
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
                        <p className={`${styles.tableNote} ${isDarkTheme ? styles['dark-tableNote'] : ''}`}>*per 100g of serving</p>
                    </div>
                </div>
            </div>

            <Link to="/" className={`${styles.btn} ${isDarkTheme ? styles['dark-btn'] : ''}`}>
                Go Back
            </Link>
        </section>
    ) : (
        <></>
    );
};

export default RecipeItem;
