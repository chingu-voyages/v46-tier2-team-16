// import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './RecipeCard.module.css';

// import { FaStar } from 'react-icons/fa';

const RecipeCard = (props) => {
    const navigate = useNavigate()
    const { oneRecipe } = props;
    const [selected, setSelected] = useState([]);
    // console.log('RECIPE', oneRecipe);

    const clickHandler = (recipe) => {
        console.log("recipe ID: ", recipe);
        navigate(`/recipe/${recipe}`);
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
                    <div className={styles.btnCtn}>
                        <button className={styles.btn} id={oneRecipe.id} data={oneRecipe} onClick={() => clickHandler(oneRecipe.id)}>
                            Get Recipe
                        </button>
                        {/* <Link to={`/`} className={styles.btn} onClick={() => clickHandler(oneRecipe.id)}>Get Recipe</Link> */}
                        {/* <Link to={`/recipe/${oneRecipe.id}`} className={styles.btn}>Get Recipe</Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipeCard;
