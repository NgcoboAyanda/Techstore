import React from "react";
import SignUpForm from "../../../Components/SignUpForm/SignUpForm";
import AuthPage from "../AuthPage";

import './SignUpPage.css';

const SignUpPage=()=>{
    return(
        <>
            <AuthPage
                formComponent={<SignUpForm/>}
            />
        </>
    )
}

export default SignUpPage;