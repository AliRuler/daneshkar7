import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import FormPage from "../pages/formPage";
import SingleContact from "../pages/singleContact";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "/addContact",
                element: <FormPage/>,
            },
            {
                path: "/updateContact/:ContactId",
                element: <FormPage/>,
            },
            {
                path: "/contacts/:ContactId",
                element: <SingleContact/>,
            },
        ]
    }
]);

export default router