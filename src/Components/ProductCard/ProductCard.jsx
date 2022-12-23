import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './ProductCard.css';

const ProductCard = ( { name, price, image, id=1, addToCart, size="thin", empty=false, link=''} ) => {
    let {categoryName} = useParams();

    // the sizes are:
    // thin and wide

    const addProductToCart = ()=>{
        addToCart();
    }

    const renderProductLink = () => {
        if(categoryName){
            return `/${categoryName}/${id}`
        }
        else{
            return link
        }
    }

    const renderProductLinkText = () => {
        if(name.length < 71){
            return name
        }
        else{
            return (
                name.substring(0, 77) + '...'
            )
        }
    }

    const renderCard = () => {
        if(!empty){
            //if card is not empty
            return (
                <>
                    <div className={`product-card_${size}__image`}>
                        <div className={`product-card_${size}__image__inner`}>
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className={`product-card_${size}__name`}>
                        <div className={`product-card_${size}__name__inner`}>
                            <Link className="link" to={renderProductLink()}>
                                {renderProductLinkText()}
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
                </>
            )
        }
        else{
            //if card is empty
            return (
                <div className={`product-card_${size}__skeleton skeleton-loader skeleton-loader_blink`}>
                    <div className={`product-card_${size}__skeleton__inner`}>

                    </div>
                </div>
            )
        }
    }

    const renderProductCardClass = () => {
        if(!empty){
            return `product-card_${size}_loaded`
        }
    }

    return (
        <div className={`product-card product-card_${size} ${renderProductCardClass()}`}>
            <div className={`product-card_${size}__inner`}>
                {renderCard()}
            </div>
        </div>
    )
}

export default ProductCard;