import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiBaseUrl = 'http://localhost:8000';

const initialState = {
    loggedIn: false,
    user: null,
    status: 'idle',
    token: null,
    notification:{}
    /*
            EXAMPLES OF BOTH TYPES OF NOTIFICATIONS
            {
                'error':{
                    'detail': "Invalid email address"
            }
        }
        OR
            {
                'success':{
                    'detail': "You have now been logged in."
                }
            }
    */
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
        if(response.status === 200){
            const res = await response.json();
            const { user, token } = res;
            const { setUser, setToken } = authSlice.actions;
            thunkAPI.dispatch(setUser(user));
            thunkAPI.dispatch(setToken(token));
        }
        else{
            //There was an error
            const error = await response.json();
            const { addNotification } = authSlice.actions;
            thunkAPI.dispatch(addNotification({
                'error': error
            }));
        }
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
        else{
            //there was an error
            const error = await response.json();
            const {addNotification} = authSlice.actions;
            thunkAPI.dispatch(addNotification({
                'error': error
            }));
        }
    }
)

export const sendPasswordResetLink = createAsyncThunk(
    'auth/sendPasswordResetLink',
    async (credentials, thunkAPI)=>{
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
            console.log(error)
            const {addNotification} = authSlice.actions;
            //the password reset endpoint returns a different error object 
            /*  
                {
                    email: [
                        "This is the error message which is also the first item inside this list."
                    ]
                }
            */
            //e.g ["We couldn't find a user associated.."]
            //so in this case we create our own error object
            let theError = {
                detail: error.email[0]
            }
            thunkAPI.dispatch(addNotification({
                'error': theError
            }));
        }
    }
)


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //ERRORS
        addNotification: (state, action)=>{
            return {...state, notification: action.payload};
        },
        clearNotification: (state, action)=>{
            return {...state, notification:{}};
        }
        ,
        //TOKEN
        setToken: (state, action)=>{
            return {...state, token: action.payload};
        },
        clearToken: (state, action)=>{
            return {...state, token: null};
        }
        ,
        //USER
        setUser: (state, action)=>{
            return {...state, user: action.payload};
        },
        clearUser: (state, action)=>{
            return {...state, user: null}
        }
    },
    extraReducers: builder=>{
        builder
        //LOG IN
        .addCase(logIn.pending, (state, action)=>{
            return {...state, status:'loading'}
        })
        .addCase(logIn.fulfilled, (state, action)=>{
            return {...state, status: 'idle'}
        })
        //SIGN UP
        .addCase(signUp.pending, (state, action)=>{
            return {...state, status: 'loading'}
        })
        .addCase(signUp.fulfilled, (state, action)=>{
            return {...state, status: 'loading'}
        })
        .addCase(signUp.rejected, (state, action)=>{
            return {...state, status: 'idle'}
        })
        //SENG PASSWORD RESET LINK
        .addCase(sendPasswordResetLink.pending, (state, action)=>{
            return {...state, status: 'loading'}
        })
        .addCase(sendPasswordResetLink.fulfilled, (state, action)=>{
            return {...state, status: 'idle'}
        })
        .addCase(sendPasswordResetLink.rejected, (state, action)=>{
            return {...state, status: 'idle'}
        })
    }   
})

export const {clearNotification} = authSlice.actions;

export default authSlice.reducer