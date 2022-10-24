import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

import Notification from '../../Components/Notification/Notification';

import Logo from '../../Components/Logo/Logo';


import './AuthPage.css'
import { useEffect } from 'react';
import Loader from '../../Components/Loader/Loader';

//THE BASE PAGE FOR ALL AUTHENTICATION PAGES
const AuthPage = ({formComponent})=>{
    const notification = useSelector(state => state.auth.notification);
    const loggedIn = useSelector(state=> state.auth.loggedIn);
    const status = useSelector(state=> state.auth.status);

    const navigate = useNavigate()

    useEffect(
        ()=>{
            if(loggedIn){
                //if user is logged in
                //redirect to home page
                setTimeout(
                    ()=>{
                        navigate('/home');
                    },
                    3000
                )
            }
        },
        [loggedIn]
    )

    const renderAuthPage = ()=>{
        if(!loggedIn){
            return(
                <>
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
                </>
            )
        }
        else{
            //when user is logged in
            return (
                <>
                    <div className="app__auth-page__message">
                        <div className="app__auth-page__message">
                            You are logged in. You will be redirected shortly.
                        </div>
                    </div>
                </>
            )
        }
    }

    const renderLoadingAnimation = ()=>{
        if(status === 'loading'){
            //only renders when we are loading
            return(
                <div className="app__auth-page__loader">
                    <div className="app__auth-page__loader__inner">
                        <Loader 
                            color="light"
                        />
                    </div>
                </div>
            )
        }
    }

    //
    return(
        <div className='app__auth-page page'>
            <div className="app__auth-page__inner">
                {renderLoadingAnimation()}
                {renderAuthPage()}
            </div>
        </div>
    )
};

export default AuthPage;