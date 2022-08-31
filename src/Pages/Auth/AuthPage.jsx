import React from 'react';
import Logo from '../../Components/Logo/Logo';
import SigninForm from '../../Components/SigninForm/SigninForm';

import './AuthPage.css'

const AuthPage = ()=>{

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
                        <SigninForm/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AuthPage;