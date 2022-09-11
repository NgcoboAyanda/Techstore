import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import EmailInput from '../InputBoxes/EmailInput/EmailInput';
import RadioBox from '../RadioBox/RadioBox';

import './ForgotPasswordForm.css';

const ForgotPasswordForm = ()=>{
    const [emailInputValue, setEmailInputValue] = useState('');
    const [radioBoxValue, setRadioBoxValue] = useState('password-reset')
    const [keepUserSignedIn, setKeepUserSignedIn] = useState(false);
    const [step, setStep] = useState(1);

    const continueForm = ()=>{
        setStep(2);
    }

    const submitForm = ()=>{
        console.log('forgot password form submitted!')
    }

    const returnToFirstStep = ()=>{
        setStep(1)
    }

    const renderCorrectStep = ()=>{
        if(step === 1){
            // if step === 1 then we show an email input box
            return(
                <div className="forgot-password-form__step-1">
                    <div className="forgot-password-form__step-1__inner"> 
                        <div className="forgot-password-form__step-1__text">
                            <div className="forgot-password-form__step-1__text__inner">
                                <div className="forgot-password-form__step-1__text__element">
                                    In order to change your password, we need to verify your identity. Enter the email address associated with your account.
                                </div>
                            </div>
                        </div>
                        <div className="forgot-password-form__step-1__email-box">
                            <div className="forgot-password-form__step-1__email-box__inner">
                                <EmailInput
                                    value={emailInputValue}
                                    setValue={setEmailInputValue}
                                    placeholder="Email Address"
                                />
                            </div>
                        </div>
                        <div className="forgot-password-form__continue-btn">
                            <div className="forgot-password-form__continue-btn__inner">
                                <Button
                                    onClick={continueForm}
                                    className="button_filled"
                                    label="Continue"
                                    submit={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if(step === 2){
            //if step === 2 then we show options to reset password
            return(
                <div className="forgot-password-form__step-2">
                    <div className="forgot-password-form__step-2__inner">
                        <div className="forgot-password-form__step-2__text">
                            <div className="forgot-password-form__step-2__text__inner">
                                <span>We will send a code to</span>
                                <span className="--bolded"> {emailInputValue} </span>
                                <span>so that you can get back into your account</span>
                            </div>
                            <div className="forgot-password-form__step-2__radio-btn">
                                <div className="forgot-password-form__step-2__radio-btn__inner">
                                    <RadioBox
                                        value={radioBoxValue}
                                        setValue={setRadioBoxValue}
                                        label="What would you like to do?"
                                        options={[
                                            { 
                                                id:'password-reset', 
                                                label:'Password reset' 
                                            }
                                            , 
                                            { 
                                                id: 'temporary-code', 
                                                label:'Sign in with temporary code' 
                                            }
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="forgot-password-form__step-2__checkbox">
                                <div className="forgot-password-form__step-2__checkbox__inner">
                                    <CheckBox
                                        value={keepUserSignedIn}
                                        setValue={setKeepUserSignedIn}
                                    />
                                </div>
                            </div>
                            <div className="forgot-password-form__step-2__send-code-btn">
                                <div className="forgot-password-form__step-2__send-code-btn__inner">
                                    <Button
                                        onClick={submitForm}
                                        className="button_filled"
                                        label="Send Code"
                                        submit={true}

                                    />
                                </div>
                            </div>
                            <div className="forgot-password-form__step-2__prev-step-btn">
                                <div className="forgot-password-form__step-2__prev-step-btn__inner">
                                <Button
                                        onClick={returnToFirstStep}
                                        className="button_bordered"
                                        label="Go Back"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return(
        <React.StrictMode>
            <form className="forgot-password-form" onSubmit={e=>e.preventDefault()}>
                <div className="forgot-password-form__inner">
                    <div className="forgot-password-form__heading">
                        <div className="forgot-password-form__heading__inner">
                            <div className="forgot-password-form__heading__text heading-normal">
                                Forgot Password
                            </div>
                        </div>
                    </div>
                    {renderCorrectStep()}
                </div>
            </form>
        </React.StrictMode>
    )
}

export default ForgotPasswordForm;