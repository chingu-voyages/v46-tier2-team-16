import { useEffect, useState } from 'react';
import { Search } from './search';
import recipes from './data/RecipesData.js';
import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import RecipeCard from './components/recipeCard/RecipeCard';
import './App.css';

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Home } from './pages/home';
// import { RecipeItem } from './components/recipeDetails';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home />,
//         //   errorElement: <NotFound />,
//     },
//     {
//         path: '/recipe/:id',
//         element: <RecipeItem />,
//     },
// ]);

const App = () => {
    // (Celine) temporary useEffect to handle development and testing with fake data: Recipes.js
    // empty array to have it having an effect only on first loading
    //---------------------------------

    useEffect(() => {
        const retriveRecipes = recipes.results;
        setFilteredRecipes(retriveRecipes);
    }, []);
    //---------------------------------

    // (Celine) Filter recipes depending of input user
    //---------------------------------
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    console.log('filteredRecipes', filteredRecipes);

    const handleSearch = async (newSearch) => {
        const filtered = recipes.results.filter((recipe) => {
            console.log('recipe.name', recipe.name);
            return recipe.name.toLowerCase().includes(newSearch.toLowerCase());
        });
        setFilteredRecipes(filtered);
    };
    //---------------------------------

    // (Celine) Filter recipes depending of button click quickCooking
    //---------------------------------

    const handleQuickCooking = async () => {
        console.log('clicked');
        const filteredByCookingTime = recipes.results.filter((recipe) => {
            console.log('recipe.cook_time_minutes', recipe.total_time_tier.tier);

            if (recipe.total_time_tier.tier === 'under_15_minutes') {
                return recipe;
            }
        });
        setFilteredRecipes(filteredByCookingTime);
    };
    //---------------------------------

    console.log('RECIPES', recipes);

    return (
        <>
            <Header />
            <main>
                {/* <Example /> */}
                <Search handleSearch={handleSearch} handleQuickCooking={handleQuickCooking} />
                {/* Section below will need to be replace with the Card element */}
                <RecipeCard data={recipes} />
                {/* <RouterProvider router={router} /> */}
            </main>
            <Footer />
        </>
    );
};

export default App;

{
    /* <div>
                {filteredRecipes.map((recipe, i) => (
                    <div key={i}>
                        <p>{recipe.name}</p>
                        <p>{recipe.description}</p>
                    </div>
                ))}
            </div> */
}
