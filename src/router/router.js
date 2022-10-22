import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import FormPage from "../pages/formPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/addContact",
        element: <FormPage/>,
    },
    {
        path: "/updateContact/:ContactId",
        element: <FormPage/>,
    },
]);

export default router