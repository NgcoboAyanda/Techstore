import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart} from '../../Features/Ui/UiSlice';

import './Checkout.css';

import ProductCard from '../ProductCard/ProductCard';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import CloseBtn from './CloseBtn/CloseBtn';
import { useState } from 'react';
import RadioBox from '../RadioBox/RadioBox';

const Checkout = ({isOpen=false, toggle}) => {
    const cartItems = useSelector(state=> state.ui.cart);
    const [subtotal, setSubtotal] = useState(0);
    const [subtotalWithTax, setSubtotalWithTax] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [tax, setTax] = useState(0);

    const dispatch = useDispatch()

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const calculateSubtotal = () => {
        let total = 0;
        let tax = 0;
        cartItems.map(item=>{
            let itemPrice = item.price.replace(',','');
            total = total + parseFloat(itemPrice);
        })
        setSubtotal((total+deliveryFee).toFixed(2));
        //calculating subtotal with tax
        tax = calculateTax(total);
        total = total + tax;
        setSubtotalWithTax(total.toFixed(2));
    }

    const calculateTax = amount => {
        let tax = amount * 0.15;
        setTax(tax.toFixed(2));
        return tax;
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
            calculateSubtotal();
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
        if(cartItems.length > 0){
            //If there are items in the cart
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
        else {
            return <CheckoutItem
                empty={true}
            />
        }
    }

    const renderOrderSummaryDetails = () => {
        return [{subtotal}, {delivery: deliveryFee}, {tax}].map( (item, i) => {
            const itemKey = Object.keys(item)[0];
            const itemValue = item[itemKey];
            return (
                <div className={`checkout__content__order-summary__details__item checkout__content__order-summary__details__${itemKey}`} key={i}>
                    <div className="checkout__content__order-summary__details__item__inner">
                        <span className="key">
                            {capitalize(itemKey)}
                        </span>
                        <span className="value">
                            <span>R</span>
                            <span>{itemValue}</span>
                        </span>
                    </div>
                </div>
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
                                                    R{subtotalWithTax} subtotal
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
                                
                                <div className="checkout__content__order-summary">
                                    <div className="checkout__content__order-summary__inner">
                                        <div className="checkout__content__order-summary__heading">
                                            <div className="checkout__content__order-summary__heading__inner">
                                                <h2 className="heading heading_big">
                                                    Order summary
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="checkout__content__order-summary__details">
                                            <div className="checkout__content__order-summary__details__inner">
                                                {renderOrderSummaryDetails()}
                                            </div>
                                        </div>
                                        <div className="checkout__content__order-summary__total">
                                            <div className="checkout__content__order-summary__total__inner">
                                                <div className="key">
                                                    Total
                                                </div>
                                                <div className="value">
                                                    <span>R</span>
                                                    <span>{subtotalWithTax}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout__content__order-summary__btn button button_submit button_filled">
                                            <div className="checkout__content__order-summary__btn__inner button__inner">
                                                <button className="">
                                                    Proceed To Payment
                                                </button>
                                            </div>
                                        </div>
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