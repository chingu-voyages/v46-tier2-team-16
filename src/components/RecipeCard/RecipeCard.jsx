// import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';

import { FaStar } from 'react-icons/fa';

const RecipeCard = ({oneRecipe}) => {
    return (
        <section className="section">
                <div key={oneRecipe.id} className="container">
                    <figure className="figure">
                        <img src={oneRecipe.image} alt={oneRecipe.name} className="image" />
                    </figure>
                    <div className="cardContent">
                        <h3 className="name">{oneRecipe.name}</h3>
                        <div className="btn-ctn">
                            {/* <Link to={`/recipe/${recipe.id}`} className="btn">
                                Get Recipe
                            </Link> */}
                        </div>
                        <div className="rating">
                            <FaStar color="#D4AD2E" />
                            {oneRecipe.rating}
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default RecipeCard;
