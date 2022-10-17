import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiBaseUrl = 'http://localhost:8000';

const initialState = {
    loggedIn: false,
    user: null,
    status: 'idle',
    error: null
}

const requestConfig = {
    method: "POST",
    headers: {
        accept: "application/json",
        'Content-Type': "application/json",
    },
}

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (credentials)=>{
        const response = await fetch(`${apiBaseUrl}/accounts/login/`,{
            ...requestConfig,
            body: credentials
        })
        let res = await response.json();
        return res;
    }
)

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (formData)=>{
        const response = await fetch(`${apiBaseUrl}/accounts/signup/`,{
            ...requestConfig,
            body: formData
        })
        let res = await response.json();
        return res;
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: builder=>{
        //LOG IN
        builder.addCase(logIn.pending, (state, action)=>{
            return {...state, status:'loading'}
        })
        .addCase(logIn.fulfilled, (state, action)=>{
            if(action.payload.uid){
                //if a valid object is returned
                //meaning authentication was successful
                return {...state, status:'idle', user: action.payload, loggedIn: true}
            }
            else{
                //there is no uid inside the payload
                //meaning this is an error object
                return {...state, status:'idle', user: null, error: action.payload}
            }
        })
        //SIGN UP
    }
})


export default authSlice.reducer