import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart} from '../../Features/Ui/UiSlice';

import './Checkout.css';

import ProductCard from '../ProductCard/ProductCard';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import CloseBtn from './CloseBtn/CloseBtn';
import { useState } from 'react';

const Checkout = ({isOpen=false, toggle}) => {
    const cartItems = useSelector(state=> state.ui.cart);
    const [subtotal, setSubtotal] = useState(0)

    const dispatch = useDispatch()

    const calculateSubtotal = () => {
        let total = 0;
        cartItems.map(item=>{
            total = total + parseFloat(item.price);
        })
        setSubtotal(total.toFixed(2))
    }

    useEffect(
        ()=>{
            if(isOpen){
                document.body.style.overflow = 'hidden';
            }
            else{
                document.body.style.overflow = 'unset';
            }
        },
        [isOpen]
    )

    useEffect(
        ()=>{
            calculateSubtotal()
        },
        [cartItems]
    )

    const renderItemCount = () => {
        const count = cartItems.length
        if (count === 1){
            return `${count} item`
        }
        else {
            return `${count} items`
        }
    }

    const renderCheckoutItems = () => {
        return cartItems.map( (item, i) => {
            return (
                <React.Fragment key={i}>
                    <CheckoutItem
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        removeItem={()=>dispatch( removeFromCart(item.id) )}
                    />
                </React.Fragment>
            )
        } )
    }

    const renderVisibility = ()=>{
        if(isOpen){
            return (
                <div className="checkout">
                    <div className="checkout__inner">
                        <div className="checkout__content">
                            <div className="checkout__content__inner">
                                <div className="checkout__content__heading">
                                    <div className="checkout__content__heading__inner">
                                        <div className="checkout__content__heading__title">
                                            <div className="checkout__content__heading__title__inner">
                                                <h1 className="heading heading_big">
                                                    Cart
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="checkout__content__heading__total">
                                            <div className="checkout__content__heading__total__inner">
                                                <span className="amount">
                                                    R{subtotal} subtotal
                                                </span>
                                                <span>
                                                    &#160;
                                                    &#x2022;
                                                    &#160;
                                                </span>
                                                <span className="item-count">
                                                    {renderItemCount()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout__content__items">
                                    <div className="checkout__content__items__inner">
                                        {renderCheckoutItems()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="checkout__close-btn">
                            <div className="checkout__close-btn__inner">
                                <CloseBtn
                                    onClick={()=>toggle()}
                                    size="big"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else return null;
    }

    return (
        <>
            {renderVisibility()}
        </>
    )
}

export default Checkout;