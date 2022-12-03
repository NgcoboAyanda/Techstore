import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.css';

const ProductCard = ( { name, price, image, id=1, addToCart, size="card" } ) => {

    const addProductToCart = ()=>{
        addToCart();
    }

    return (
        <div className={`product-card product-card_${size}`}>
            <div className={`product-card_${size}__inner`}>
                <div className={`product-card_${size}__image`}>
                    <div className={`product-card_${size}__image__inner`}>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className={`product-card_${size}__name`}>
                    <div className={`product-card_${size}__name__inner`}>
                        <Link className="link" to={`/p/${id}`}>
                            {name}
                        </Link>
                    </div>
                </div>
                <div className={`product-card_${size}__price`}>
                    <div className={`product-card_${size}__price__inner`}>
                        <div>
                            <span>R</span>{price}
                        </div>
                    </div>
                </div>
                <div className={`product-card_${size}__action`}>
                    <div className={`product-card_${size}__action__inner`}>
                        <button onClick={()=>addProductToCart()} className="btn btn_small btn_filled">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;