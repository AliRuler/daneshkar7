import './App.css';
import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import {Provider} from 'react-redux'
import {persistor, store} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
    return (
        //provider like sun on city, you can see sun everywhere
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router}/>
            </PersistGate>
        </Provider>
    );
}

export default App;
