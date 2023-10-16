import { Link, useNavigate } from 'react-router-dom';
import styles from './RecipeCard.module.css';
import { FaStar } from 'react-icons/fa';
import recepieDetails from '../recipeDetails/recipeDetails';

const Card = ({ items }) => {
    const navigate = useNavigate();
    const handleClick = (data) => {
        console.log('Clicked');
        navigate(recepieDetails(data));
    };
    return items.map((item) => (
        <div key={item.id} className={styles.container}>
            <figure className={styles.figure}>
                <img src={item.image} alt="image" className={styles.image} />
            </figure>
            <div className={styles.cardContent}>
                <p className={styles.name}>{item.name}</p>
                <div className={styles.rating}>
                    <FaStar color="#D4AD2E" /> &nbsp;
                    {item.rating}
                    <Link className={styles.btn} to={recepieDetails} onClick={(item) => handleClick(item)}>
                        Get Recipe
                    </Link>
                </div>
            </div>
        </div>
    ));
};

export default Card;
