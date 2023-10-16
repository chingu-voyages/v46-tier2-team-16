import Card from './components/recipeCard/RecipeCard';

import './App.css';
import Data from './data/recipes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className="container">
                    <div className="card">
                        <Card items={Data} />
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
