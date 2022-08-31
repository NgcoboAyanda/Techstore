import React from 'react';

import './Button.css';

//Button component used in forms
const Button = ({submit, className='button_filled', label=''})=>{

    return(
        <div className={`button button_submit ${className}`}>
            <div className="button__inner">
                <button type="submit" onClick={()=>submit()}>
                    {label}
                </button>
            </div>
        </div>
    )
}

export default Button;