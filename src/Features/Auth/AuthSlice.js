import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    user: null,
    captchaSecretKey: null
}

const verifyCaptcha = async captchaSecretKey=>{
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecretKey}`,{method:'POST'});
    let res = await response.json();
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
            console.log(keyVerified)
        },
        //sends a forgot password request
        forgotPassword: (state, action) =>{
            console.log('forgot pass');
        },
    },
})

export const { getCaptchaSecretKey,signUp, logIn, forgotPassword} = authSlice.actions

export default authSlice.reducer