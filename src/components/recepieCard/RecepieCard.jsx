import styles from './RecepieCard.module.css';
import { Data } from '../../data/recepies';

const Card = () => {
    const item = Data(0);
    return (
        <main style={styles.container}>
            <div>
                <img src={item.image} />
                <h1 style={styles.name}>{item.name}</h1>
                <h3>Rating: {item.rating}</h3>
                <h4>Category</h4>
                <p>{item.category}</p>
            </div>
            <div>
                <h3>Prep Time: &nbsp;</h3>
                {item.prepTime}
                <h3>Cook Time: &nbsp;</h3>
                {item.cookTime}
                <h3>Difficulty: &nbsp;</h3>
                {item.difficulty}
                <h3>Servings: &nbsp;</h3>
                {item.servings}
            </div>
            <div>
                <h2>Ingredients:</h2>
                <p>{item.ingredients}</p>
            </div>
            <div>
                <h2>Directions:</h2>
                {item.directions.map((step, idx) => (
                    <p key={idx}>{step}</p>
                ))}
                <h3>Notes:</h3>
                {item.notes}
            </div>
        </main>
    );
};

export default Card;
