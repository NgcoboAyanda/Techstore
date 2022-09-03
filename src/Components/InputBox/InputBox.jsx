import React, { useState } from 'react';

import './InputBox.css';

// Input box element
// Takes 3 props, i.e type [string], value [string] and setValue [function] 
const InputBox = ({ type='text', value='', setValue, placeholder='', label='', optional=false}) =>{
    const[focused, setFocused] = useState(false)
    const[showPassword, setShowPassword] = useState(false)
    const[error, setError] = useState('')

    const onInputFocus = ()=>{
        setFocused(true)
    }

    const onInputFocusLost = ()=>{
        setFocused(false)
        validate()
    }

    const validate = ()=>{
        //will validate the input box
        //email validation uses regular expressions
        if(type === 'email'){
            let pattern = /\S+@\S+\.\S+/;
            let match = pattern.test(value)
            if(!match){
                setError('Please enter a valid email address.')
            }
            else{
                //if there's a match we clear the error
                setError('')
            }
        }
        else if(type === 'password'){
            //password validation simply checks for the password length
            let passwordLength = value.length;
            if(passwordLength < 6){
                setError('Please enter a valid password.');
            }
            else if(passwordLength >= 6){
                setError('');
            }
        }
        else if(type === 'text'){
            let valueLength = value.length;
            if(!optional){
                //if the input field is NOT optional
                if (valueLength < 3){
                    setError(`Please enter a valid ${label.toLowerCase()}.`)
                }
                else{
                    setError('')
                }
            }
            else{
                //if the input field is optional
                if (valueLength > 0){
                    //this means the user chose to fill this field
                    //we must make sure it has valid info
                    let minLength = 1
                    if(label === 'Phone Number'){
                        minLength = 10
                    }
                    if (valueLength < minLength){
                        setError(`Please enter a valid ${label.toLowerCase()}.`)
                    }
                    else{
                        setError('')
                    }
                }
                else if(valueLength === 0){
                    setError('')
                }
            }
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

    const renderInputType = ()=>{
        //NB ONlY FOR A PASSWORD INPUT ELEMENT
        if(type === 'password'){
            if(showPassword){
                return 'text';
            }
            else{
                return 'password';
            }
        }
        else return type;
    }

    const renderPasswordToggleBtn = ()=>{
        if(type === 'password'){
            if(!showPassword){
                //if the password is not shown
                return(
                    <div className="input-box__password-toggle-btn">
                        <div className="input-box__password-toggle-btn__inner">
                            <button className="button button_password-toggle --bg-transparent" onClick={()=>togglePasswordBtn()}>
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
                            <button className="button button_password-toggle --bg-transparent" onClick={()=>togglePasswordBtn()}>
                                hide
                            </button>
                        </div>
                    </div>
                )
            }
        }
        else return null;
    }

    const togglePasswordBtn = () => {
        setShowPassword(!showPassword);
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

    return (
        <div className={`input-box ${renderInputBoxClass()}`}>
            <div className="input-box__inner --fill-parent --bg-transparent">
                <div className="input-box__element --fill-parent --bg-transparent">
                    <div className="input-box__element__inner --fill-parent --bg-transparent">
                        <input type={renderInputType()} onFocus={()=>onInputFocus()}  onBlur={()=>onInputFocusLost()} className="--fill-parent --bg-transparent" value={value} onChange={(e)=>setValue(e.target.value)}/>
                    </div>
                </div>
                <div className={`input-box__bg ${renderInputBgClass()}`}>
                    {/* This is the background */}
                </div>
                <div className={`input-box__label ${renderInputLabelClass()}`}>
                    <div className="input-box__label__inner">
                        {placeholder||label}
                    </div>
                </div>
                {renderPasswordToggleBtn()}
            </div>

            {renderErrorMsg()}
        </div>
    )
}

export default InputBox;