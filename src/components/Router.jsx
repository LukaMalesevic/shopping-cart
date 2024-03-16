import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import Shop from "./Shop";
import { useState } from "react";

const Router = () => {

    const [cart, nextCart] = useState(false);
    const [cartItems, nextCartItems] = useState([]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home 
            cart={cart}
            nextCart={nextCart}
            cartItems={cartItems}
            nextCartItems={nextCartItems}
            />,
            errorElement: <Error/>,
        },
        {
            path: "shop",
            element: <Shop 
            cart={cart}
            nextCart={nextCart}
            cartItems={cartItems}
            nextCartItems={nextCartItems}/>,
            errorElement: <Error/>,
        }
    ])

    return <RouterProvider router={router} />;
}

export default Router;
