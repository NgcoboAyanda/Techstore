import React from 'react';
import ForgotPasswordForm from '../../../Components/ForgotPasswordForm/ForgotPasswordForm';
import AuthPage from '../AuthPage';

import './ForgotPasswordPage.css';

const ForgotPasswordPage = ()=>{

    return(
        <>
            <AuthPage
                formComponent={<ForgotPasswordForm/>}
            />
        </>
    )
}

export default ForgotPasswordPage;