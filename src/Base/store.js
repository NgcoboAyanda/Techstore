import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

//Reducers
import authReducer from '../Features/Auth/AuthSlice';

export default configureStore({
    reducer: {
        auth: authReducer
    },
    // Store has all of the default middleware added, _plus_ redux-thunk middleware middleware
})