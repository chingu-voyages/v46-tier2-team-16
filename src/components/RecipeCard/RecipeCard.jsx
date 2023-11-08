import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';
import { useGlobalContext } from '../../contexts/DarkModeContext';

const RecipeCard = (props) => {
    const { oneRecipe } = props;
    const { isDarkTheme } = useGlobalContext();

    return (
        <div key={props.oneRecipe.id} className={`${styles.container} ${isDarkTheme ? styles['dark-theme'] : ''}`}>
            <figure className={styles.figure}>
                <img src={oneRecipe.thumbnail_url} alt={oneRecipe.name} className={styles.image} />
            </figure>
            <div className={styles.cardContent}>
                <h3 className={`${styles.name} ${isDarkTheme ? styles['dark-name'] : ''}`}>{props.oneRecipe.name}</h3>
                <div className={styles.btnCtn}>
                    <Link to={`/recipe/${props.oneRecipe.id}`} className={`${styles.btn} ${isDarkTheme ? styles['dark-btn'] : ''}`}>
                        Get Recipe
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;