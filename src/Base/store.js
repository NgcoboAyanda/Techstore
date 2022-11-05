import { configureStore } from "@reduxjs/toolkit";

//Reducers
import authReducer from '../Features/Auth/AuthSlice';
import dataReducer from "../Features/Data/DataSlice";
import uiReducer from '../Features/Ui/UiSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        data: dataReducer
    },
    // Store has all of the default middleware added, _plus_ redux-thunk middleware middleware
})