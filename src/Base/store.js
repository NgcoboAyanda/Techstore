import { configureStore } from "@reduxjs/toolkit";

//Reducers
import authReducer from '../Features/Auth/AuthSlice'

export default configureStore({
    reducer: {
        auth: authReducer
    }
})