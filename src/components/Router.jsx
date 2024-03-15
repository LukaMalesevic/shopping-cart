import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import Shop from "./Shop";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <Error/>,
        },
        {
            path: "shop",
            element: <Shop/>,
            errorElement: <Error/>,
        }
    ])

    return <RouterProvider router={router} />;
}

export default Router;
