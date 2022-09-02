import React, { useState } from 'react';
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import InputBox from '../InputBox/InputBox';

import './SignInForm.css';

/* The Login form component */
// Takes one prop, changeFormTo (function that changes the AuthPage form property)
const SigninForm = ({setForm}) => {
    const[emailInputValue, setEmailInputValue] = useState('')
    const[passwordInputValue, setPasswordInputValue] = useState('')
    const[checkboxValue, setCheckboxValue] = useState(false)

    const submitForm = () =>{
        console.log('submitted boyeeee')
    }

    const changeToForgotPasswordForm = ()=>{
        setForm('forgotPasswordForm')
    }

    const changeToSignUpForm = ()=>{
        setForm('signUpForm')
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
                        <InputBox type='email' value={emailInputValue} setValue={setEmailInputValue} />
                    </div>
                </div>
                <div className="sign-in-form__password-box">
                    <div className="sign-in-form__password-box__inner">
                        <InputBox type='password' value={passwordInputValue} setValue={setPasswordInputValue}/>
                    </div>
                </div>
                <div className="sign-in-form__checkbox">
                    <div className="sign-in-form__checkbox__inner">
                        <CheckBox value={checkboxValue} setValue={setCheckboxValue}/>
                    </div>
                </div>
                <div className="sign-in-form__sign-in-btn">
                    <div className="sign-in-form__sign-in-btn__inner">
                        <Button onClick={submitForm} className="button_filled" label="Sign in" submit={true}/>
                    </div>
                </div>
                <div className="sign-in-form__forgot-password-btn">
                    <div className="sign-in-form__forgot-password-btn__inner --fill-parent">
                        <Button onClick={changeToForgotPasswordForm} className="button_bare --fill-parent" label="Forgot Password?" />
                    </div>
                </div>
                <div className="sign-in-form__sign-up-btn">
                    <div className="sign-in-form__sign-up-btn__inner">
                        <Button onClick={changeToSignUpForm} className="button_bordered --fill-parent" label="Create your account"/>
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