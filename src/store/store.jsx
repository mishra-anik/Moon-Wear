import { configureStore } from "@reduxjs/toolkit";
import cartRedux from "../reducers/cartSlice.jsx";
 export const store = configureStore({
    reducer: { 
        
       cart: cartRedux,


    }
});
