import styles from './RecipeCard.module.css';
import { FaStar } from 'react-icons/fa';

const Card = ({ items }) => {
    return items.map((item) => (
        <div key={item.id} className={styles.container}>
            <figure className={styles.figure}>
                <img src={item.image} alt="image" className={styles.image} />
            </figure>
            <div className={styles.cardContent}>
                <p className={styles.name}>{item.name}</p>
                <div className={styles.rating}>
                    <FaStar color="yellowgreen" /> &nbsp;
                    {item.rating}
                    <a href={`/recipe/${item.id}`} data={item}>
                        <button className={styles.btn}>Get Recipe</button>
                    </a>
                </div>
            </div>
            {/* {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />} */}
        </div>
    ));
};

export default Card;
