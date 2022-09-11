import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

import './RadioBox.css';

const RadioBox = ({value, setValue, label='', options=[]})=>{

    const renderOptions = ()=>{
        return(
            options.map(theOption=>{
                const renderIconClass = ()=>{
                    if(value === theOption.id ){
                        return 'radio-box__options__item__icon_checked'
                    }   
                }

                return(
                    <div className="radio-box__options__item" id={theOption.id} key={theOption.id} onClick={e=> setValue(e.target.id)}>
                            <div className="radio-box__options__item__inner --no-events">
                                <span className={`radio-box__options__item__icon ${renderIconClass()}  --no-events`}>
                                    <div className="radio-box__options__item__icon__inner --no-events">
                                    </div>
                                </span>
                                <span className="radio-box__options__item__label --no-events">
                                    <div className="radio-box__options__item__label__inner --no-events">
                                        {theOption.label}
                                    </div>
                                </span>
                            </div>
                        </div>
                )
            })
        )
    }

    return(
        <div className="radio-box">
            <div className="radio-box__inner">
                <div className="radio-box__label">
                    <div className="radio-box__label__inner">
                        <span>
                            {label}
                        </span>
                    </div>
                </div>
                <div className="radio-box__options">
                    <div className="radio-box__options__inner">
                        {renderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RadioBox;