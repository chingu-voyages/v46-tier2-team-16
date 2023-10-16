import { Link, useParams } from 'react-router-dom';
import { data } from '../../../data/recipes';
import './RecipeItem.css';

const RecipeItem = () => {
    const { id } = useParams();
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id, 10));

    console.log(selectedRecipe);

    if (!selectedRecipe) {
        return <div>Recipe not found.</div>;
    }

    return (
        <section className="container-details">
            <div key={selectedRecipe.id}>
                <div className="main-ctn">
                    <img src={selectedRecipe.image} alt={selectedRecipe.name} />
                    <div className="details-ctn">
                        <div>
                            <h3 className="item-name">{selectedRecipe.name}</h3>
                            <h4 className="item-category">Category: {selectedRecipe.category}</h4>
                            <p className="item-rating">
                                Rating: <span>{selectedRecipe.rating}</span>
                            </p>
                            <p className="item-prep">
                                Preparation Time: <span>{selectedRecipe.prepTime} minutes</span>
                            </p>
                            <p className="item-cook">
                                Cooking Time: <span>{selectedRecipe.cookTime} minutes</span>
                            </p>
                            <p className="item-diff">
                                Difficulty: <span>{selectedRecipe.difficulty}</span>
                            </p>
                            <p className="item-serv">
                                Servings: <span>{selectedRecipe.serving}</span>
                            </p>
                        </div>
                        <div>
                            <p className="item-ingr">
                                Ingredients:
                                <span>
                                    {selectedRecipe.ingredients.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="directions-ctn">
                    <h4>Directions:</h4>
                    {selectedRecipe.directions.map((step, idx) => (
                        <ol key={idx} className="item-step">
                            Step {idx + 1}.&nbsp;<span>{step}</span>
                        </ol>
                    ))}
                </div>
                <p className="item-note">
                    Note: <span>{selectedRecipe.notes}</span>
                </p>
            </div>
            <Link to="/" className="btn">
                Go Back
            </Link>
        </section>
    );
};

export default RecipeItem;
