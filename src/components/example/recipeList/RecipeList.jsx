import { Link } from "react-router-dom"

import {data} from "../../../data/recipes";

const RecipeList = () => {
  return (
    <section className="container">
    {data.map((recipe) => (
      <div key={recipe.id}>
        <img src={recipe.image} alt={recipe.name} />
        <h3>{recipe.name}</h3>
        <p>{recipe.rating}</p>
        <Link to={`/recipe/${recipe.id}`}>View</Link>
      </div>
    ))}
  </section>
  )
}

export default RecipeList