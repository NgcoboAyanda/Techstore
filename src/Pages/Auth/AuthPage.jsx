import React, { useState } from 'react';
import ForgotPasswordForm from '../../Components/ForgotPasswordForm/ForgotPasswordForm';
import Logo from '../../Components/Logo/Logo';
import SignInForm from '../../Components/SignInForm/SignInForm';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';

import './AuthPage.css'

const AuthPage = ()=>{
    const[form, setForm] = useState('signInForm')

    const renderForm = ()=>{
        //rendering form based on the form state property
        if(form === 'signInForm'){
            return <SignInForm setForm={setForm}/>
        }
        else if(form === 'signUpForm'){
            return <SignUpForm setForm={setForm} />
        }
        else if(form === 'forgotPasswordForm'){
            return <ForgotPasswordForm setForm={setForm} />
        }
        else{
            throw 'AuthPage component received an invalid value for "form" state.'
        }
    }

    return(
        <div className='app__auth-page page'>
            <div className="app__auth-page__inner">
                <div className="app__auth-page__logo">
                    <div className="app__auth-page__logo__inner">
                        <Logo/>
                    </div>
                </div>
                <div className="app__auth-page__form">
                    <div className="app__auth-page__form__inner">
                        {renderForm()}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AuthPage;