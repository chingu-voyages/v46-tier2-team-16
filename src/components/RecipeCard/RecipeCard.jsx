import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './RecipeCard.module.css';

const RecipeCard = (props) => {
    // const navigate = useNavigate();
    const { oneRecipe } = props;
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
            <div key={oneRecipe.id} className={styles.container}>
                <figure className={styles.figure}>
                    <img src={oneRecipe.thumbnail_url} alt={oneRecipe.name} className={styles.image} />
                </figure>
                <div className={styles.cardContent}>
                    <h3 className={styles.name}>{oneRecipe.name}</h3>
                    <div className={styles.btnCtn}>
                        <Link to={`/recipe/${oneRecipe.id}`} className={styles.btn}>
                            Get Recipe
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default RecipeCard;
