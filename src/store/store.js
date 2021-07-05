import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import catReducer from '../features/catSlice'
const store = configureStore({
    reducer:{
        counter: counterReducer,
        cat:catReducer
    }
})
export default store