import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Form from "../pages/form";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/addContact",
        element: <Form/>,
    },
    {
        path: "/updateContact/:ContactId",
        element: <Form/>,
    },
]);

export default router