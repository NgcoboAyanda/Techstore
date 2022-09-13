import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //will get the captcha secret key when the user passes the captcha
        //signs up the user
        signUp: (state, action)=>{
            //hollup
        },
        //log in the user
        logIn: (state, action) =>{
            //wait
        },
        //sends a forgot password request
        forgotPassword: (state, action) =>{
            //oiiiii
        },
    },
})

export const { getCaptchaSecretKey,signUp, logIn, forgotPassword} = authSlice.actions

export default authSlice.reducer