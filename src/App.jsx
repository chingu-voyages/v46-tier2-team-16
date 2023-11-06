import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from './layout';
import { RecipeDetails } from './pages/recipeDetails';
import  {Home}  from './pages/home';
import {NotFound} from './pages/NotFound';

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
            <Outlet classname='outlet' />
        </RouterProvider>
    );
};

export default App;
