import React, { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import EmailInput from '../InputBoxes/EmailInput/EmailInput';
import NameInput from '../InputBoxes/NameInput/NameInput';
import PasswordInput from '../InputBoxes/PasswordInput/PasswordInput';
import PhoneInput from '../InputBoxes/PhoneInput/PhoneInput';

import './SignUpForm.css';

const SignUpForm = () =>{
    const[email, setEmail] = useState('')
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[phoneNumber, setPhoneNumber] = useState('')
    const[password, setPassword] = useState('')
    const[keepUserSignedIn, setKeepUserSignedIn] = useState(false)

    return(
        <div className="sign-up-form">
            <div className="sign-up-form__inner">
                <div className="sign-up-form__heading">
                    <div className="sign-up-form__heading__inner">
                        <h1 className="sign-up-form__heading__text heading-normal">
                            Create your Techstore account
                        </h1>
                    </div>
                </div>
                <div className="sign-up-form__email-box">
                    <div className="sign-up-form__email-box__inner">
                        <EmailInput
                            value={email}
                            setValue={setEmail}
                            placeholder="Email Address"
                        />
                    </div>
                </div>
                <div className="sign-up-form__first-name-box">
                    <div className="sign-up-form__first-name-box__inner">
                        <NameInput
                            value={firstName}
                            setValue={setFirstName}
                            label="First Name"
                            placeholder="First Name"
                        />
                    </div>
                </div>
                <div className="sign-up-form__last-name-box">
                    <div className="sign-up-form__last-name-box__inner">
                        <NameInput
                            value={lastName}
                            setValue={setLastName}
                            label="Last Name"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className="sign-up-form__phone-box">
                    <div className="sign-up-form__phone-box__inner">
                        <PhoneInput
                            value={phoneNumber} 
                            setValue={setPhoneNumber} 
                            placeholder="Mobile phone number (optional)" 
                            label="Phone Number" 
                            optional={true}
                        />
                    </div>
                </div>
                <div className="sign-up-form__password-box">
                    <div className="sign-up-form__password-box__inner">
                        <PasswordInput
                            value={password}
                            setValue={setPassword}
                            placeholder="Create Password"
                        />
                    </div>
                </div>
                <div className="sign-up-form__information">
                    <div className="sign-up-form__information__inner">
                        <div className="sign-up-form__information__row">
                            <span className="--bolded">
                                Must contain:
                            </span>
                            <span className="list">
                                <span>More than 6 characters</span>
                            </span>
                        </div>
                        <div className="sign-up-form__information__row">
                            <span className="--bolded">
                                A strong password contains: 
                            </span>
                            <span className="list">
                                <span>
                                    Lowercase letters
                                </span>
                                <span>
                                    Uppercase letters
                                </span>
                                <span>
                                    Numbers
                                </span>
                                <span>
                                    Special characters
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="sign-up-form__checkbox">
                    <div className="sign-up-form__checkbox__inner">
                        <CheckBox
                            value={keepUserSignedIn}
                            setValue={setKeepUserSignedIn}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;