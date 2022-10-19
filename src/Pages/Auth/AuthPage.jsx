import React from 'react';
import { useSelector } from 'react-redux';

import Notification from '../../Components/Notification/Notification';

import Logo from '../../Components/Logo/Logo';


import './AuthPage.css'

const AuthPage = ({formComponent})=>{
    const notification = useSelector(state => state.auth.notification)
    //The base page for all auth pages
    //
    return(
        <div className='app__auth-page page'>
            <div className="app__auth-page__inner">
                <div className="app__auth-page__logo">
                    <div className="app__auth-page__logo__inner">
                        <Logo/>
                    </div>
                </div>
                <div className="app__auth-page__errors">
                    <div className="app__auth-page__errors__inner">
                        <Notification
                            notification={notification}
                        />
                    </div>
                </div>
                <div className="app__auth-page__form">
                    <div className="app__auth-page__form__inner">
                        {formComponent}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AuthPage;