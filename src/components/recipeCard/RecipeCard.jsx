import { Link } from 'react-router-dom';
// import { recipes } from '../../data/RecipesData';
import './RecipeCard.module.css';
import { FaStar } from 'react-icons/fa';

const RecipeCard = ({ data }) => {
    return (
        <section className="section">
            {data.map((recipe) => (
                <div key={recipe.results.id} className="container">
                    <figure className="figure">
                        <img src={recipe.results.thumbnail_url} alt={recipe.results.name} className="image" />
                    </figure>
                    <div className="cardContent">
                        <h3 className="name">{recipe.results.name}</h3>
                        <div className="btn-ctn">
                            <Link to={`/recipe/${recipe.results.id}`} className="btn">
                                Get Recipe
                            </Link>
                        </div>
                        <div className="rating">
                            <FaStar color="#D4AD2E" /> &nbsp;
                            {recipe.results.rating}
                        </div>
                    </div>
                </div>
            ))}
            {/* <h1>CARD</h1> */}
        </section>
    );
};

export default RecipeCard;
