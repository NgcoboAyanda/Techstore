import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    user: null,
    captchaSecretKey: null,
    captchaSolved: false
}

const verifyCaptcha = async captchaSecretKey=>{
    let res = 'verifying captcha';
    return res;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //will get the captcha secret key when the user passes the captcha
        getCaptchaSecretKey: (state, action)=>{
            return { ...state, captchaSecretKey: action.payload };
        },
        //signs up the user
        signUp: (state, action)=>{
            const key = state.captchaSecretKey;
            const keyVerified = verifyCaptcha(key);
            if(keyVerified){

            }
        },
        //log in the user
        logIn: (state, action) =>{
            const key = state.captchaSecretKey;
            let keyVerified = verifyCaptcha(key);
        },
        //sends a forgot password request
        forgotPassword: (state, action) =>{
            console.log('forgot pass');
        },
    },
})

export const { getCaptchaSecretKey,signUp, logIn, forgotPassword} = authSlice.actions

export default authSlice.reducer