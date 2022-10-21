import './App.css';
import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import {Provider} from 'react-redux'
import {store} from "./redux/store";

function App() {
    return (
        //provider like sun on city, you can see sun everywhere
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}

export default App;
