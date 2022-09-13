import React, { useState } from 'react';
import { useEffect } from 'react';

import '../InputBoxes.css';

const PasswordInput = ({value='', placeholder='', optional=false, register, errors})=>{
    //register is a function from react-hook-form  
    const[showPassword, setShowPassword] = useState(false);
    const[error, setError] = useState('');
    const[focused, setFocused] = useState(false);

    const validationPattern = new RegExp('.{8}');

    const onInputFocus = ()=>{
        setFocused(true)
    }

    const onInputFocusLost = ()=>{
        setFocused(false)
        validate()
    }

    const clearError = ()=>{
        setError('');
    }

    const validate = ()=>{
        //password validation simply checks for the password length
        let match = validationPattern.test(value)
        if(!match){
            setError('Please enter a valid password');
        }
        else{
             //if there's a match we clear the error
            clearError()
        }
    }

    const renderInputLabelClass = ()=>{
        //return 'input-box__label_focused'
        //return 'input-box__label_normal'
        if(focused){
            return 'input-box__label_focused';
        }
        else if (!focused && value){
            return 'input-box__label_focused';
        }
        else if (!focused){
            return 'input-box__label_normal';
        }
    }

    const renderErrorMsg = () => {
        if(error){
            return(
                <div className="input-box__error-msg">
                    <div className="input-box__error-msg__inner">
                        {error}
                    </div>
                </div>
            )
        }
    }

    const renderInputBgClass = ()=>{
        if(!error){
            return 'input-box__bg_normal';
        }
        else{
            return 'input-box__bg_error';
        }
    }

    const renderInputBoxClass = ()=>{
        if(!error){
            return 'input-box_normal';
        }
        else{
            return 'input-box_error';
        }
    }

    const renderPasswordToggleBtn = ()=>{
        if(!showPassword){
            //if the password is not shown
            return(
                <div className="input-box__password-toggle-btn">
                    <div className="input-box__password-toggle-btn__inner">
                        <button className="button button_password-toggle --bg-transparent" type='button' onClick={()=>togglePasswordBtn()}>
                            show
                        </button>
                    </div>
                </div>
            )
        }
        else{
            //if the password is shown
            return(
                <div className="input-box__password-toggle-btn">
                    <div className="input-box__password-toggle-btn__inner">
                        <button className="button button_password-toggle --bg-transparent" type='button' onClick={()=>togglePasswordBtn()}>
                            hide
                        </button>
                    </div>
                </div>
            )
        }
    }

    const togglePasswordBtn = () => {
        setShowPassword(!showPassword);
    }

    const renderInputType = ()=>{
        if(!showPassword){
            return 'password';
        }
        else{
            return 'text';
        }
    }

    return (
        <div className={`input-box ${renderInputBoxClass()}`}>
            <div className="input-box__inner --fill-parent --bg-transparent">
                <div className="input-box__element --fill-parent --bg-transparent">
                    <div className="input-box__element__inner --fill-parent --bg-transparent">
                        <input 
                            type={renderInputType()}
                            className="--fill-parent --bg-transparent" 
                            {...register( "Password", { required: true, pattern: validationPattern , min: 8 } ) }
                            onFocus={()=>onInputFocus()}
                            onBlur={()=>onInputFocusLost()}
                        />
                    </div>
                </div>
                <div className={`input-box__bg ${renderInputBgClass()}`}>
                    {/* This is the background */}
                </div>
                <div className={`input-box__label ${renderInputLabelClass()}`}>
                    <div className="input-box__label__inner">
                        {placeholder}
                    </div>
                </div>
                {renderPasswordToggleBtn()}
            </div>
            {renderErrorMsg()}
        </div>
    )
}

export default PasswordInput;