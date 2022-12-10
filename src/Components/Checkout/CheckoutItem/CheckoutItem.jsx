import React from 'react';
import CloseBtn from '../CloseBtn/CloseBtn';

import './CheckoutItem.css';

const CheckoutItem = ({ image, price, name, removeItem, empty=false }) => {

    const renderItem = () => {
        if(!empty){
            //the item is not empty
            return (
                <>    
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
                </>
            )
        }
        else {
            return (
                <div className="checkout-item__content checkout-item_empty">
                        <div className="checkout-item__content__inner checkout-item_empty__inner">
                            Your cart is empty
                        </div>
                    </div>
            )
        }
    }

    return (
        <div className="checkout-item">
            <div className="checkout-item__inner">
                {renderItem()}
            </div>
        </div>
    )
}

export default CheckoutItem;