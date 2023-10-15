// import styles from './recipeDetails.module.css';

const recepieDetails = ({ recipe }) => {
    console.log('RECIPE', recipe);
    return (
        <div key={recipe.id}>
            <div>
                <h1>Recepie Details</h1>
                <p>{recipe.title}</p>
            </div>
        </div>
    );
};

export default recepieDetails;

{
    /* <div>
                <img src={item.image} alt="image" />
                <p className={styles.name}>{item.name}</p>
                <p>Rating: {item.rating}</p>
                <p>Category</p>
                <p>{item.category}</p>
            </div>
            <div>
                <p>Prep Time: &nbsp;</p>
                {item.prepTime}
                <p>Cook Time: &nbsp;</p>
                {item.cookTime}
                <p>Difficulty: &nbsp;</p>
                {item.difficulty}
                <p>Servings: &nbsp;</p>
                {item.servings}
            </div>
            <div>
                <p>Ingredients:</p>
                <p>{item.ingredients}</p>
            </div>
            <div>
                <p>Directions:</p>
                {item.directions.map((step, idx) => (
                            <p key={idx}>{step}</p>
                        ))}
                <p>Notes:</p>
                {item.notes}
            </div> */
}
