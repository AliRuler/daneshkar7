import {configureStore} from "@reduxjs/toolkit";
import ContactSlice from "./slice/contact.reducer";

export const store = configureStore({
    //reducer are my products
    reducer: {
        contacts: ContactSlice,
    }
})