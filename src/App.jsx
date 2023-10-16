// import Card from './components/recipeCard/RecipeCard';
// import Data from './data/recipes';

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {Home} from "./pages/home";
import {RecipeItem} from "./components/example/recipeItem";
import './App.css';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    //   errorElement: <NotFound />,
    },
    {
        path:"/recipe/:id",
        element: <RecipeItem/>
    }
  ]);



const App = () => {
    return (
        <>
            {/* <BrowserRouter>
                <div className="container">
                    <div className="card">
                        <Card items={Data} />
                    </div>
                </div>
            </BrowserRouter> */}
             <RouterProvider router={router} />
        </>
    );
};

export default App;
