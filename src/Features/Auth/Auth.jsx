import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUp, logIn, forgotPassword } from './AuthSlice';

export const Auth = ()=>{
    const auth = useSelector((state)=> state.auth.value);
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch(logIn())}>
                Log In
            </button>
            <button onClick={()=>dispatch(signUp())}>
                Sign Up
            </button>
            <button onClick={()=>dispatch(forgotPassword())}>
                Forgot Password
            </button>
        </div>
    )
};