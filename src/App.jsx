import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from './layout';
import './index.css';

import { RecipeDetails } from './pages/recipeDetails';
import { NotFound } from './pages/notFound';
import { Home } from './pages/home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/recipe/:id',
                element: <RecipeDetails />,
            },
        ],
    },
]);

const App = () => {
    return (
        <RouterProvider router={router}>
            <Outlet classname="outlet" />
        </RouterProvider>
    );
};

export default App;
