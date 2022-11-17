import {configureStore} from "@reduxjs/toolkit";
import {weatherReducer} from "./Slices/Forcast";

const store = configureStore({
    reducer:{
        weather : weatherReducer
    }

})

export default store