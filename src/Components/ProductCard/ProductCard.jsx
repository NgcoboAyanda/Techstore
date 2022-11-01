import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.css';

const ProductCard = ( { name, price, image, id, link, addToCart } ) => {

    return (
        <div className="product-card">
            <div className="product-card__inner">
                <div className="product-card__image">
                    <div className="product-card__image__inner">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="product-card__name">
                    <div className="product-card__name__inner">
                        <Link className="link" to={link}>
                            {name}
                        </Link>
                    </div>
                </div>
                <div className="product-card__price">
                    <div className="product-card__price__inner">
                        <div>
                            {price}
                        </div>
                    </div>
                </div>
                <div className="product-card__action">
                    <div className="product-card__action__inner">
                        <button className="btn btn_small btn_filled">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;