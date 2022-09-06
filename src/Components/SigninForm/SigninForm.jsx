import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {useNavigate} from 'react-router-dom';

import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import EmailInput from '../InputBoxes/EmailInput/EmailInput';
import PasswordInput from '../InputBoxes/PasswordInput/PasswordInput';

//actions
import { logIn } from '../../Features/Auth/AuthSlice';

//css
import './SignInForm.css';

/* The Login form component */
// Takes one prop, changeFormTo (function that changes the AuthPage form property)
const SigninForm = ({setForm}) => {
    const[emailInputValue, setEmailInputValue] = useState('')
    const[passwordInputValue, setPasswordInputValue] = useState('')
    const[keepUserSignedIn, setKeepUserSignedIn] = useState(false)

    const navigate = useNavigate()
    
    //Redux
    const dispatch = useDispatch();

    const submitForm = () =>{
        console.log('submitted')
        dispatch(logIn({'name': 'BABA'}))
    }

    const navigateToForgotPasswordPage = ()=>{
        navigate('/auth/forgotpassword')
    }

    const navigateToSignUpPage = ()=>{
        navigate('/auth/signup')
    }

    return (
        <form className="sign-in-form" onSubmit={e=>e.preventDefault()}>
            <div className="sign-in-form__inner">
                <div className="sign-in-form__heading">
                    <div className="sign-in-form__heading__inner">
                        <h1 className="sign-in-form__heading__text heading-normal">
                            Sign into your Techstore account
                        </h1>
                    </div>
                </div>
                <div className="sign-in-form__email-box">
                    <div className="sign-in-form__email-box__inner">
                    <EmailInput 
                            value={emailInputValue} 
                            setValue={setEmailInputValue} placeholder="Email Address"
                        />
                    </div>
                </div>
                <div className="sign-in-form__password-box">
                    <div className="sign-in-form__password-box__inner">
                        <PasswordInput
                            value={passwordInputValue}
                            setValue={setPasswordInputValue}
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div className="sign-in-form__checkbox">
                    <div className="sign-in-form__checkbox__inner">
                        <CheckBox 
                            value={keepUserSignedIn} 
                            setValue={setKeepUserSignedIn}
                        />
                    </div>
                </div>
                <div className="sign-in-form__sign-in-btn">
                    <div className="sign-in-form__sign-in-btn__inner">
                        <Button 
                            onClick={submitForm} 
                            className="button_filled" 
                            label="Sign in" 
                            submit={true}
                        />
                    </div>
                </div>
                <div className="sign-in-form__forgot-password-btn">
                    <div className="sign-in-form__forgot-password-btn__inner --fill-parent">
                        <Button 
                            onClick={navigateToForgotPasswordPage} 
                            className="button_bare --fill-parent" 
                            label="Forgot Password?" 
                            />
                    </div>
                </div>
                <div className="sign-in-form__sign-up-btn">
                    <div className="sign-in-form__sign-up-btn__inner">
                        <Button 
                            onClick={navigateToSignUpPage} 
                            className="button_bordered --fill-parent" 
                            label="Create your account"
                        />
                    </div>
                </div>
                <div className="sign-in-form__terms">
                    <div className="sign-in-form__terms__inner">
                        <span>
                            By signing in, you agree to the following:
                        </span>
                        <span className="--link">
                            Techstore terms and conditions
                        </span>
                        <span className="--link">
                            Techstore privacy policy
                        </span>
                    </div>
                </div>
                <div className="sign-in-form__offer">
                    <div className="sign-in-form__offer__inner">
                        <span className="--bolded">
                            *See offer details.&nbsp;
                        </span>
                        <span>
                            Restrictions apply. Pricing, promotions and availability may vary by location.
                        </span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SigninForm;