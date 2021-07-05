import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import counterReducer from "../features/counterSlice";
import catReducer from '../features/catSlice'
import rootSaga from "../saga/root";
const sagaMiddleware = createSagaMiddleware()

const store = configureStore(
{
    reducer:{
        counter: counterReducer,
        cat:catReducer,  
    },
    middleware:[...getDefaultMiddleware({thunk:false}),sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store