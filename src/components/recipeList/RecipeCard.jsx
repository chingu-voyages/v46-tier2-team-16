// import { Link } from 'react-router-dom';
import './RecipeCard.module.css';
import { FaStar } from 'react-icons/fa';

const RecipeCard = ({recipe}) => {
    return (
        <section className="section">
                <div key={recipe.id} className="container">
                    <figure className="figure">
                        <img src={recipe.image} alt={recipe.name} className="image" />
                    </figure>
                    <div className="cardContent">
                        <h3 className="name">{recipe.name}</h3>
                        <div className="btn-ctn">
                            {/* <Link to={`/recipe/${recipe.id}`} className="btn">
                                Get Recipe
                            </Link> */}
                        </div>
                        <div className="rating">
                            <FaStar color="#D4AD2E" /> &nbsp;
                            {recipe.rating}
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default RecipeCard;
