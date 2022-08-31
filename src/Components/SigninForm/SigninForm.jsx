import React from 'react';
import InputBox from '../InputBox/InputBox';

import './SigninForm.css';

/* The Login form component */

const SigninForm = () => {
    return (
        <form className="login-form">
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
                        <InputBox type='email' />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SigninForm;