import React from 'react';

import './Button.css';

//Button component used in forms
// Has 4 props, onClick [function], className [string], label [string] and  submit [boolean]
const Button = ({onClick, className='button_filled', label='', submit=false})=>{

    const renderBtnType=()=>{
        if(submit){
            return 'submit';
        }
        else{
            return 'button';
        }
    }

    return(
        <div className={`button button_submit ${className}`}>
            <div className="button__inner">
                <button type={renderBtnType()} onClick={()=>onClick()}>
                    {label}
                </button>
            </div>
        </div>
    )
}

export default Button;