import React, { useState } from 'react';

import './InputBox.css';

// Input box element
// Takes 3 props, i.e type [string], value [string] and setValue [function] 
const InputBox = ({ type='text', value='', setValue}) =>{
    const[focused, setFocused] = useState(false)

    const onInputFocus = ()=>{
        setFocused(true)
    }

    const onInputFocusLost = ()=>{
        setFocused(false)
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

    const renderInputLabel = ()=>{
        //rendering the correct input label
        if(type === 'email'){
            return 'Email Address'
        }
        else if (type === 'password'){
            return 'Password'
        }
    }

    return (
        <div className="input-box input-box_normal">
            <div className="input-box__inner --fill-parent --transparent">
                <div className="input-box__element --fill-parent --transparent">
                    <div className="input-box__element__inner --fill-parent --transparent">
                        <input type={type} onFocus={()=>onInputFocus()}  onBlur={()=>onInputFocusLost()} className="--fill-parent --transparent" value={value} onChange={(e)=>setValue(e.target.value)}/>
                    </div>
                </div>
                <div className={`input-box__label ${renderInputLabelClass()}`}>
                    <div className="input-box__label__inner">
                        {renderInputLabel()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputBox;