import React from "react";
import SignInForm from "../../../Components/SignInForm/SignInForm";
import AuthPage from "../AuthPage";

import './SignInPage.css';

const SignInPage=()=>{
    return(
        <>
            <AuthPage
                formComponent={<SignInForm/>}
            />
        </>
    )
}

export default SignInPage;