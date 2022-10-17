import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiBaseUrl = 'http://localhost:8000';

const initialState = {
    loggedIn: false,
    user: null,
    status: 'idle',
    token: null,
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
    async (credentials, thunkAPI)=>{
        const response = await fetch(`${apiBaseUrl}/accounts/login/`,{
            ...requestConfig,
            body: JSON.stringify(credentials)
        })
        let res = await response.json();
        return res;
    }
)



export const signUp = createAsyncThunk(
    'auth/signUp',
    async (formData, thunkAPI)=>{
        const response = await fetch(`${apiBaseUrl}/accounts/signup/`,{
            ...requestConfig,
            body: JSON.stringify(formData)
        })
        if (response.status === 201){
            //if user was successfully created then we wanna dispatch login to log the new user in
            const {email, password} = formData;
            thunkAPI.dispatch(logIn({email, password}))
        }
    }
)

export const sendPasswordResetLink = createAsyncThunk(
    'auth/sendPasswordResetLink',
    async (credentials)=>{
        const response = await fetch(`${apiBaseUrl}/accounts/reset-password/?email=${credentials.email}`,{
            ...requestConfig,
            body: JSON.stringify(credentials)
        })
        if (response.status === 204){
            //user sent password reset link
            return null
        }
        else{
            //there was an error
            const error = await response.json()
            return error
        }
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
            const {token, user} = action.payload
            if(token){
                return {...state, user, token, loggedIn:true, status: 'idle'}
            }
            else{
                //there are no user and token properties inside the payload
                //meaning this is an error object
                return {...state, status:'idle', error: action.payload}
            }
        })
        //SIGN UP
        .addCase(signUp.pending, (state, action)=>{
            return {...state, status: 'loading'}
        })
        .addCase(signUp.fulfilled, (state, action)=>{
            return {...state, status: 'loading'}
        })
        //SENG PASSWORD RESET LINK
        .addCase(sendPasswordResetLink.pending, (state, action)=>{
            return {...state, status: 'loading'}
        })
        .addCase(sendPasswordResetLink.fulfilled, (state, action)=>{
            return {...state, status: 'idle', error: action.payload}
        })
    }   
})


export default authSlice.reducer