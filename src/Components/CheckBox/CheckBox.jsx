import React from 'react';

import './CheckBox.css';

//Takes two props, value [string] and setValue [function]
const CheckBox = ({value, setValue})=>{

    const renderCheckboxIconClass = ()=>{
        if(value){
            return 'check-box__element__icon_checked'
        }
    }

    return(
        <div className="check-box">
            <div className="check-box__inner">
                <div className="check-box__element">
                    <div className="check-box__element__inner">
                        <span className={`check-box__element__icon ${renderCheckboxIconClass()}`} onClick={()=>setValue(!value)}>
                            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fill-rule="nonzero"/></svg>
                        </span>
                        <span className="check-box__element__label">
                            Keep me signed in
                        </span>
                    </div>
                </div>
                <div className="check-box__information">
                    <div className="check-box__information__inner">
                        <p>
                            By checking this box you won't have to sign in as often on this device. For your security, we recommend only checking this box on your personal devices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckBox;