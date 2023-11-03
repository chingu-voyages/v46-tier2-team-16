
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { HomeLayout } from "./layout";
import { NotFound } from './pages/NotFound';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
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
