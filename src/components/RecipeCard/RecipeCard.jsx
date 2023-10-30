// import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './RecipeCard.module.css';

// import { FaStar } from 'react-icons/fa';

const RecipeCard = (props) => {
    const { oneRecipe } = props;
    const [selected, setSelected] = useState([]);
    // console.log('RECIPE', oneRecipe);

    const clickHandler = (recipe) => {
        setSelected((prevState) => {
            if (prevState.includes(recipe)) return prevState.filter((item) => item.id !== recipe.id);
            return [...prevState, recipe];
        });
    };
    return (
        <section className={styles.section}>
            <div key={oneRecipe.id} className={styles.container}>
                <figure className={styles.figure}>
                    <img src={oneRecipe.thumbnail_url} alt={oneRecipe.name} className={styles.image} />
                </figure>
                <div className={styles.cardContent}>
                    <h3 className={styles.name}>{oneRecipe.name}</h3>
                    <div className={styles.btnCtn} onClick={() => clickHandler(oneRecipe.id)}>
                        <button className={styles.btn} id={oneRecipe.id} data={oneRecipe}>
                            Get Recipe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipeCard;
