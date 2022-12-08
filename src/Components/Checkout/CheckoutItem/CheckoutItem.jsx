import React from 'react';
import CloseBtn from '../CloseBtn/CloseBtn';

import './CheckoutItem.css';

const CheckoutItem = ({ image, price, name, removeItem }) => {

    return (
        <div className="checkout-item">
            <div className="checkout-item__inner">
                <div className="checkout-item__close-btn">
                    <div className="checkout-item__close-btn__inner">
                        <CloseBtn
                            onClick={()=>removeItem()}
                        />
                    </div>
                </div>
                <div className="checkout-item__content">
                    <div className="checkout-item__content__inner">
                        <div className="checkout-item__content__image">
                            <div className="checkout-item__content__image__inner">
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div className="checkout-item__content__details">
                            <div className="checkout-item__content__details__inner">
                                <div className="checkout-item__content__details__price">
                                    <div className="checkout-item__content__details__price__inner">
                                        <span>
                                            R{price}
                                        </span>
                                    </div>
                                </div>
                                <div className="checkout-item__content__details__name">
                                    <div className="checkout-item__content__details__name__inner">
                                        <div>
                                            {name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem;