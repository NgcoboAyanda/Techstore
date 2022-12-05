import React from 'react';
import { useState } from 'react';

import './Delivery.css';

const Delivery = ( {value, setValue} ) => {

    const renderDeliveryOptionClass = (option) => {
        if(option === value){
            return(
                "delivery__option_selected"
            )
        }
    }

    return (
        <div className="delivery">
            <div className="delivery__inner">
                <div className={`delivery__option ${renderDeliveryOptionClass("Pickup")}`} onClick={()=> setValue("Pickup")}>
                    <div className="delivery__option__inner">
                        <div className="delivery__option__icon">
                            <div className="delivery__option__icon__inner">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.499 12.03v11.971l-10.5-5.603v-11.835l10.5 5.467zm11.501 6.368l-10.501 5.602v-11.968l10.501-5.404v11.77zm-16.889-15.186l10.609 5.524-4.719 2.428-10.473-5.453 4.583-2.499zm16.362 2.563l-4.664 2.4-10.641-5.54 4.831-2.635 10.474 5.775z"/></svg>
                            </div>
                        </div>
                        <div className="delivery__option__name">
                            <div className="delivery__option__name__inner">
                                <span>
                                    {"Pickup"}
                                </span>
                            </div>
                        </div>
                        <div className="delivery__option__delivery-time">
                            <div className="delivery__option__delivery-time__inner">
                                <div>
                                    Ready within {2} hours
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`delivery__option ${renderDeliveryOptionClass("Home")}`} onClick={()=>setValue("Home")} >
                    <div className="delivery__option__inner">
                        <div className="delivery__option__icon">
                            <div className="delivery__option__icon__inner">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2 16v6l-2-.014v-7.995l4.998-3.997 2.359 2.481 7.618-6.478 7.025 5.855v10.148h-2.991v-6h-4.009v6h-6.991v-6h-6.009zm5 5v1h-3.991v-1h3.991zm-3.991-2h3.991v1h-3.991v-1zm10-3h-2.009v3h2.009v-3zm-10 1h3.991v1h-3.991v-1zm11.985-15l9.006 7.67-1.328 1.493-7.678-6.489-7.569 6.456-1.427-1.465 8.996-7.665z"/></svg>
                            </div>
                        </div>
                        <div className="delivery__option__name">
                            <div className="delivery__option__name__inner">
                                <span>
                                    Home Delivery
                                </span>
                            </div>
                        </div>
                        <div className="delivery__option__delivery-time">
                            <div className="delivery__option__delivery-time__inner">
                                <div>
                                    Ready within 3 days
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery;