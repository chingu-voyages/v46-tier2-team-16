// import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';

// import { FaStar } from 'react-icons/fa';

const RecipeCard = (props) => {
    const { oneRecipe } = props;
    console.log('RECIPE', oneRecipe);
    return (
        <section className={styles.section}>
            <div key={oneRecipe.id} className={styles.container}>
                <figure className={styles.figure}>
                    <img src={oneRecipe.thumbnail_url} alt={oneRecipe.name} className={styles.image} />
                </figure>
                <div className={styles.cardContent}>
                    <h3 className={styles.name}>{oneRecipe.name}</h3>
                    <div className={styles.btnCtn}>
                        <a href={`/${oneRecipe.id}`} className={styles.btn}>
                            Get Recipe
                        </a>
                    </div>
                    {/* <div className={styles.rating}>
                        <FaStar color="#D4AD2E" />
                        {oneRecipe.rating}
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default RecipeCard;
