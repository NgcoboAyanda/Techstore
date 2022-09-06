import React from 'react';

import './Button.css';

//Button component used in forms
// Has 4 props, onClick [function], className [string], label [string] and  submit [boolean]
const Button = ({onClick, className='button_filled', label='', submit=false, size = 'normal'})=>{

    const renderBtnType=()=>{
        if(submit){
            return 'submit';
        }
        else{
            return 'button';
        }
    }

    const renderBtnSize=()=>{
        if(size === 'large'){
            return 'button_large'
        }
    }

    return(
        <div className={`button button_submit ${className}`}>
            <div className="button__inner">
                <button type={renderBtnType()} className={`${renderBtnSize()}`} onClick={()=>{
                    if(onClick){
                        onClick()
                    }
                }}>
                    {label}
                </button>
            </div>
        </div>
    )
}

export default Button;