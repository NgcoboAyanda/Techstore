import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        user: null
    },
    reducers: {
        signUp: state =>{
            console.log('signed up')
        },
        logIn: state =>{
            console.log('logged in')
        },
        forgotPassword: state =>{
            console.log('forgot pass')
        },
    },
})

export const {signUp, logIn, forgotPassword} = authSlice.actions

export default authSlice.reducer