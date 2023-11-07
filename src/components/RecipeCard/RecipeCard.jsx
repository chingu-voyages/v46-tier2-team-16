import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './RecipeCard.module.css';
import { useGlobalContext } from '../../contexts/DarkModeContext';

const RecipeCard = (props) => {
    // const navigate = useNavigate();
    const { oneRecipe } = props;
    const { isDarkTheme } = useGlobalContext();
    // const [selected, setSelected] = useState([]);

    // const clickHandler = (id) => {
    //     console.log('recipe ID: ', id);
    //     setSelected((prevState) => {
    //         if (prevState.includes(id)) return prevState.filter((item) => item.id !== id.id);
    //         return [...prevState, id];
    //     });
    //     navigate(`/recipe/${id}`);
    // };

    return (
        <div key={props.oneRecipe.id} className={`${styles.container} ${isDarkTheme ? styles['dark-container'] : ''}`}> 
                <figure className={styles.figure}>
                    <img src={oneRecipe.thumbnail_url} alt={oneRecipe.name} className={styles.image} />
                </figure>
                <div className={styles.cardContent}>
                <h3 className={`${styles.name} ${isDarkTheme ? styles['dark-name'] : ''}`}>{props.oneRecipe.name}</h3>
                    <div className={styles.btnCtn}>
                    <Link to={`/recipe/${props.oneRecipe.id}`} className={`${styles.btn} ${isDarkTheme ? styles['dark-btn'] : ''}`}> {/* Apply dark mode class */}
            Get Recipe
        </Link>
                    </div>
                </div>
            </div>
    );
};

export default RecipeCard;
