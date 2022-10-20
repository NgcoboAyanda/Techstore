import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

import Notification from '../../Components/Notification/Notification';

import Logo from '../../Components/Logo/Logo';


import './AuthPage.css'
import { useEffect } from 'react';

//THE BASE PAGE FOR ALL AUTHENTICATION PAGES
const AuthPage = ({formComponent})=>{
    const notification = useSelector(state => state.auth.notification);
    const loggedIn = useSelector(state=> state.auth.loggedIn);
    
    const navigate = useNavigate()

    useEffect(
        ()=>{
            if(loggedIn){
                //redirect to the home page if user is logged in
                setTimeout(
                    ()=>{
                        navigate('/home')
                    },
                    3000
                )
            }
        },
        [loggedIn]
    )

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