import React from 'react';

import './InputBox.css';

// Input box element
//Only takes one prop (type)
const InputBox = ({ type='text' }) =>{
    return (
        <div className="input-box input-box_normal">
            <div className="input-box__inner --fill-parent --transparent">
                <div className="input-box__element --fill-parent --transparent">
                    <div className="input-box__element__inner --fill-parent --transparent">
                        <input type={type} className="--fill-parent --transparent"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputBox;