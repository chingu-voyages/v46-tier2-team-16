import styles from './RecepieCard.module.css';
// import { Data } from '../../data/recepies';

const item = [
    {
        id: 0,
        name: 'Prawn & harissa spaghetti',
        category: 'Sea food',
        prepTime: 5,
        cookTime: 15,
        difficulty: 'Easy',
        serving: 2,
        ingredients: [
            '100g long-stem broccoli, cut into thirds',
            '180g dried spaghetti, regular or wholemeal',
            '2 tbsp olive oil',
            '1 large garlic clove, lightly bashed',
            '150g cherry tomatoes, halved',
            '150g raw king prawns',
            '1 heaped tbsp rose harissa paste',
            '1 lemon, finely zested',
        ],
        directions: [
            {
                step1: 'Bring a pan of lightly salted water to the boil. Add the broccoli and boil for 1 min 30 secs, or until tender. Drain and set aside. Cook the pasta following pack instructions, then drain, reserving a ladleful of cooking water.',
                step2: 'Heat the oil in a large frying pan, add the garlic clove and fry over a low heat for 2 mins. Remove with a slotted spoon and discard, leaving the flavoured oil.',
                step3: 'Add the tomatoes to the pan and fry over a medium heat for 5 mins, or until beginning to soften and turn juicy. Stir through the prawns and cook for 2 mins, or until turning pink. Add the harissa and lemon zest, stirring to coat.',
                step4: 'Toss the cooked spaghetti and pasta water through the prawns and harissa. Stir through the broccoli, season to taste and serve.',
                step5: '',
            },
        ],
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn-harissa-spaghetti-d29786f.jpg?quality=90&webp=true&resize=300,272',
        rating: 4.8,
        notes: '',
    },
];

const Card = () => {
    return (
        <div className={styles.container} key={item.id}>
            <div>
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
                {/* {item.directions.map((step, idx) => (
                            <p key={idx}>{step}</p>
                        ))} */}
                <p>Notes:</p>
                {item.notes}
            </div>
        </div>
    );
};

export default Card;
