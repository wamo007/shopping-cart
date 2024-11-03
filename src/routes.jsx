import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Shop from "./Shop";


const routes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'contacts',
        element: <Contact />,
    },
    {
        path: 'shop',
        element: <Shop />,
    },
    {
        path: 'about',
        element: <About />,
    },
    {
        path: 'cart',
        element: <Cart />,
    },
];

export default routes;