import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { /* Controller, */ useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
//import CaptchaBox from '../CaptchaBox/CaptchaBox';
import CheckBox from '../CheckBox/CheckBox';
import EmailInput from '../InputBoxes/EmailInput/EmailInput';
import NameInput from '../InputBoxes/NameInput/NameInput';
import PasswordInput from '../InputBoxes/PasswordInput/PasswordInput';
import PhoneInput from '../InputBoxes/PhoneInput/PhoneInput';

import './SignUpForm.css';

import { signUp, clearNotification } from '../../Features/Auth/AuthSlice';

const SignUpForm = () =>{
    const[keepUserSignedIn, setKeepUserSignedIn] = useState(false)


    const { register, watch , handleSubmit, /* control,  formState: { errors } */ } = useForm({
        defaultValues: {
            'email': "",
            'first_name': "",
            'last_name': "",
            'phone': "",
            'password': "",
            /* 'CaptchaKey': 'aaaaaaaaaaaaaa' */
        }
    });
    const navigate = useNavigate();
    const authStatus = useSelector(state=> state.auth.status);

    //Redux
    const dispatch = useDispatch();

    useEffect(
        ()=>{
            //when component mounts
            //clear any validation errors
            dispatch(clearNotification())
        },
        []
    )

    const submitForm =(data)=>{
        if(data){
            dispatch( signUp(data) );
        }
    }

    const navigateToSignInPage = ()=>{
        navigate('/accounts/signin');
    }

    return(
        <form className="sign-up-form" onSubmit={handleSubmit(data=>submitForm(data))}>
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
                            value={watch('email')}
                            placeholder="Email Address"
                            register={register}
                        />
                    </div>
                </div>
                <div className="sign-up-form__first-name-box">
                    <div className="sign-up-form__first-name-box__inner">
                        <NameInput
                            value={watch('first_name')}
                            label="first_name"
                            placeholder="First Name"
                            register={register}
                        />
                    </div>
                </div>
                <div className="sign-up-form__last-name-box">
                    <div className="sign-up-form__last-name-box__inner">
                        <NameInput
                            value={watch('last_name')}
                            label="last_name"
                            placeholder="Last Name"
                            register={register}
                        />
                    </div>
                </div>
                <div className="sign-up-form__phone-box">
                    <div className="sign-up-form__phone-box__inner">
                        <PhoneInput
                            value={watch("phone")}
                            label="phone"
                            placeholder="Mobile phone number (optional)"  
                            optional={true}
                            register={register}
                        />
                    </div>
                </div>
                <div className="sign-up-form__password-box">
                    <div className="sign-up-form__password-box__inner">
                        <PasswordInput
                            value={watch('password')}
                            placeholder="Password"
                            register={register}
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
                {
                    /*
                        THE CAPTCHA BOX IS REMOVED FOR NOW
                        <div className="sign-up-form__captcha">
                            <div className="sign-up-form__captcha__inner captcha-box-container">
                                <Controller
                                    control={control}
                                    name="CaptchaKey"
                                    shouldUnregister={true}
                                    rules={ 
                                        {
                                            required: true
                                        }
                                    }
                                    render={
                                        ({ field: {onChange} })=>(
                                            <CaptchaBox
                                                value={watch('CaptchaKey')}
                                                onChange={onChange}
                                            />
                                        )
                                    }
                                />
                            </div>
                        </div>
                    */
                }
                <div className="sign-up-form__terms">
                    <div className="sign-up-form__terms__inner">
                        <span>
                            By creating an account, you are agreeing to our terms & conditions and privacy policy, including receipt of exclusive email offers and promotions. To manage your marketing choices please access the Choice section of our privacy policy. Message and data rates may apply when including a phone number.
                        </span>
                    </div>
                </div>
                <div className="sign-up-form__btn-link">
                    <div className="sign-up-form__btn-link">
                        <Button
                            onClick={null}
                            className="button_bare"
                            label="Terms & Conditions"
                        />
                    </div>
                </div>
                <div className="sign-up-form__btn-link">
                    <div className="sign-up-form__btn-link">
                        <Button
                            onClick={null}
                            className="button_bare"
                            label="Privacy Policy"
                        />
                    </div>
                </div>
                <div className="sign-up-form__sign-up-btn">
                    <div className="sign-up-form__sign-up-btn__inner">
                        <Button 
                            onClick={submitForm} 
                            className="button_filled" 
                            label="Create Account" 
                            submit={true}
                        />
                    </div>
                </div>
                <div className="sign-up-form__btn-link">
                    <div className="sign-up-form__btn-link">
                        <Button
                            onClick={navigateToSignInPage}
                            className="button_bare"
                            label="or sign in"
                            size='large'
                        />
                    </div>
                </div>
                <div className="sign-up-form__offer">
                    <div className="sign-up-form__offer__inner">
                        <span className="--bolded">
                            *See offer details.
                        </span>
                        <span>
                            Restrictions apply. Pricing, promotions and availability may vary by location and on our site.
                        </span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm;