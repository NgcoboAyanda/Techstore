import React from 'react';
import CartIcon from './CartIcon.svg';

import './CartBtn.css';

const CartBtn = ( { toggleCart, cartCounter=0 } )=>{

    const renderCartCounter = ()=>{
        if(cartCounter){
            return(
                <div className="cart__counter">
                    <div className="cart__counter__inner">
                        <div>
                            { cartCounter }
                        </div>
                    </div>
                </div>
            )
        }
        else return null;
    }

    return (
        <div className="cart">
            <div className="cart__inner">
                <div className="cart__icon">
                    <div className="cart__icon__inner">
                        <img src={CartIcon} />
                    </div>
                </div>
                { renderCartCounter() }
            </div>
        </div>
    )
}

export default CartBtn;