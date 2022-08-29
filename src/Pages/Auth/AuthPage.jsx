import React from 'react';
import Logo from '../../Components/Logo/Logo';

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
                <form action="" className="app__auth-page__form">
                    <div className="app__auth-page__form__inner">

                    </div>
                </form>
            </div>
        </div>
    )
};

export default AuthPage;