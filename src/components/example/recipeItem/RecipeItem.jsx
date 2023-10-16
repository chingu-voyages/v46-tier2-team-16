import { Link, useParams } from "react-router-dom";
import { data } from "../../../data/recipes";

const RecipeItem = () => {
  const { id } = useParams();
  const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id, 10));

  if (!selectedRecipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <section className="container">
      <div key={selectedRecipe.id}>
        <img src={selectedRecipe.image} alt={selectedRecipe.name} />
        <h3>{selectedRecipe.name}</h3>
        <p>Rating: {selectedRecipe.rating}</p>
        <h4>Directions:</h4>
        <ol>
          {selectedRecipe.directions.map((step, index) => (
            <li key={index}>{JSON.stringify(step)}</li>
          ))}
        </ol>
      </div>
      <Link to="/">Go Back</Link>
    </section>
  );
};

export default RecipeItem;
