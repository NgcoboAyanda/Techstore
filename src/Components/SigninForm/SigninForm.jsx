import React, { useState } from 'react';
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import InputBox from '../InputBox/InputBox';

import './SigninForm.css';

/* The Login form component */

const SigninForm = () => {
    const[emailInputValue, setEmailInputValue] = useState('')
    const[passwordInputValue, setPasswordInputValue] = useState('')
    const[checkboxValue, setCheckboxValue] = useState(false)

    const submitForm = () =>{
        
    }

    return (
        <form className="login-form" onSubmit={e=>e.preventDefault()}>
            <div className="login-form__inner">
                <div className="login-form__heading">
                    <div className="login-form__heading__inner">
                        <h1 className="login-form__heading__text heading-normal">
                            Sign into your Techstore account
                        </h1>
                    </div>
                </div>
                <div className="login-form__email-box">
                    <div className="login-form__email-box__inner">
                        <InputBox type='email' value={emailInputValue} setValue={setEmailInputValue} />
                    </div>
                </div>
                <div className="login-form__password-box">
                    <div className="login-form__password-box__inner">
                        <InputBox type='password' value={passwordInputValue} setValue={setPasswordInputValue}/>
                    </div>
                </div>
                <div className="login-form__checkbox">
                    <div className="login-form__checkbox__inner">
                        <CheckBox value={checkboxValue} setValue={setCheckboxValue}/>
                    </div>
                </div>
                <div className="login-form__sign-in-btn">
                    <div className="login-form__sign-in-btn__inner">
                        <Button submit={submitForm} className="button_filled" label="Sign in"/>
                    </div>
                </div>
                <div className="login-form__forgot-password-btn">
                    <div className="login-form__forgot-password-btn__inner --fill-parent">
                        <Button submit={submitForm} className="button-bare --fill-parent" label="Forgot Password?" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SigninForm;