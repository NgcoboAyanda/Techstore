import React, { useState } from 'react';
import InputBox from '../InputBox/InputBox';

import './SigninForm.css';

/* The Login form component */

const SigninForm = () => {
    const[emailInputValue, setEmailInputValue] = useState('')
    const[passwordInputValue, setPasswordInputValue] = useState('')

    const submitForm = e =>{
        e.preventDefault()
    }

    return (
        <form className="login-form" onSubmit={e=>submitForm(e)}>
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
            </div>
        </form>
    )
}

export default SigninForm;