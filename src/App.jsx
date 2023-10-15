import { Example } from './example';
import Card from './components/recipeCard/RecipeCard';
// import Recipe from './components/recipeDetails/recipeDetails';

import './App.css';
import Data from './data/recipes';

const App = () => {
    console.log('Data:', Data);
    return (
        <>
            <div className="container">
                <div className="card">
                    <Card items={Data} />
                </div>
                <div>{/* <Recipe path="/recipe/:id" /> */}</div>
            </div>
            <Example />
        </>
    );
};

export default App;
