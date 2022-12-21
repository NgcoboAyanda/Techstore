import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Delivery from '../../Components/Delivery/Delivery';
import Gallery from '../../Components/Gallery/Gallery';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import Rating from '../../Components/Rating/Rating';

import './ProductPage.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentProduct, fetchProduct } from '../../Features/Data/DataSlice';
import { addToCart } from '../../Features/Ui/UiSlice';

const ProductPage = () => {
    const [deliveryMethod, setDeliveryMethod] = useState("Pickup");
    const product = useSelector(state => state.data.currentProduct);

    const { categoryName, productId } = useParams();

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(fetchProduct({categoryName, productId}));
            return ()=>{
                dispatch(clearCurrentProduct());
            }
        },
        []
    )

    const addItemToCart = () => {
        dispatch(addToCart(product));
    }

    const productHasLoaded = () => {
        let loaded =  Object.keys(product).length !== 0;
        return loaded;
    }

    const renderProductInformation = () => {
        if(productHasLoaded()){
            //if product has loaded
            return (
                <>
                    <div className="app__product-page__main__product__information__price">
                        <div className="app__product-page__main__product__information__price__inner">
                            <span>
                                R{6399.99}
                            </span>
                        </div>
                    </div>
                    <div className="app__product-page__main__product__information__rating">
                        <div className="app__product-page__main__product__information__rating__inner">
                            <Rating
                                stars={0}
                            />
                        </div>
                    </div>
                    <div className="app__product-page__main__product__information__delivery">
                        <div className="app__product-page__main__product__information__delivery__inner">
                            <Delivery
                                value={deliveryMethod}
                                setValue={setDeliveryMethod}
                            />
                        </div>
                    </div>
                    <div className="app__product-page__main__product__information__button">
                        <div className="app__product-page__main__product__information__button__inner">
                            <Button
                                onClick={addItemToCart}
                                label="Add To Cart"
                                size="normal"
                            />
                        </div>
                    </div>
                </>
            )
        }
        else{
            //if product has not loaded
            return (
                <div className="skeleton-loader skeleton-loader_block skeleton-loader_blink"></div>
            )
        }
    }

    const renderProductHeading = () => {
        if(productHasLoaded()){
            return (
                <div className="app__product-page__main__heading">
                    <div className="app__product-page__main__heading__inner">
                        <h1 className='heading_big'>
                            {product.name}
                        </h1>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="skeleton-loader skeleton-loader_text skeleton-loader_blink"></div>
            )
        }
    }

    const renderProductSpecs = () => {
        if(productHasLoaded()){
            const {os, battery, storage, camera, gpu, ram} = product;
            const specs = [{os}, {ram}, {battery}, {storage}, {camera}, {gpu}]
            return specs.map((spec, i) => {
                const key = Object.keys(spec)[0];
                return (
                    <div className="app__product-page__main__about__content__specs__text__item" key={i}>
                    <div className="app__product-page__main__about__content__specs__text__item__inner">
                        <span className="app__product-page__main__about__content__specs__text__item__key">
                            {key.toUpperCase()}:
                        </span>
                        <span className="app__product-page__main__about__content__specs__text__item__value">
                            {spec[key]}
                        </span>
                    </div>
                </div>
                )
            })
        }
        else {
            return (
                <div className="skeleton_loader skeleton_loader_text-list">
                    <div className="skeleton_loader_text-list__inner">
                        <div className="skeleton_loader_text-list__item skeleton-loader_blink"></div>
                        <div className="skeleton_loader_text-list__item skeleton-loader_blink"></div>
                        <div className="skeleton_loader_text-list__item skeleton-loader_blink"></div>
                        <div className="skeleton_loader_text-list__item skeleton-loader_blink"></div>
                        <div className="skeleton_loader_text-list__item skeleton-loader_blink"></div>
                        <div className="skeleton_loader_text-list__item skeleton-loader_blink"></div>
                    </div>
                </div>
            )
        }
    }

    const renderProductDescription = () => {
        if(productHasLoaded()){
            return (
                <span>
                    {product.description}
                </span>
            )
        }
        else {
            return <div className="skeleton-loader skeleton-loader_blink"></div>
        }
    }

    const renderProductGallery = () => {
        if(productHasLoaded()){
            return (
                <Gallery
                    images={[product.image]}
                />
            )
        }
        else{
            return (
                <Gallery
                    images={[]}
                />
            )
        }
    }

    return (
        <div className="app__page app__product-page">
            <div className="app__page__inner app__product-page__inner">
                <div className="app__page__header">
                    <div className="app__page__header__inner">
                        <Header/>
                    </div>
                </div>
                <div className="app__page__main app__product-page__main">
                    <div className="app__page__main__inner  app__product-page__main__inner">
                        {renderProductHeading()}
                        <div className="app__product-page__main__product">
                            <div className="app__product-page__main__product__inner">
                                <div className="app__product-page__main__product__gallery">
                                    <div className="app__product-page__main__product__gallery__inner">
                                        {renderProductGallery()}
                                    </div>
                                </div>
                                <div className="app__product-page__main__product__information">
                                    <div className="app__product-page__main__product__information__inner">
                                        {renderProductInformation()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="app__product-page__main__about">
                            <div className="app__product-page__main__about__inner">
                                <div className="app__product-page__main__about__heading">
                                    <div className="app__product-page__main__about__heading__inner">
                                        <h2 className="heading heading_mid">
                                            About this item
                                        </h2>
                                    </div>
                                </div>
                                <div className="app__product-page__main__about__content">
                                    <div className="app__product-page__main__about__content__inner">
                                        <div className="app__product-page__main__about__content__description">
                                            <div className="app__product-page__main__about__content__description__inner">
                                                <div className="app__product-page__main__about__content__description__label">
                                                    <div className="app__product-page__main__about__content__description__label__inner">
                                                        <h3 className="heading heading_small">
                                                            Description
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="app__product-page__main__about__content__description__text">
                                                    <div className="app__product-page__main__about__content__description__text__inner">
                                                        {renderProductDescription()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="app__product-page__main__about__content__specs">
                                            <div className="app__product-page__main__about__content__content__specs__inner">
                                                <div className="app__product-page__main__about__content__specs__label">
                                                    <div className="app__product-page__main__about__content__specs__label__inner">
                                                        <h3 className="heading heading_small">
                                                            Specifications
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="app__product-page__main__about__content__specs__text">
                                                    <div className="app__product-page__main__about__content__specs__text__inner">
                                                        {renderProductSpecs()}
                                                    </div>
                                                </div>
                                            </div>
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

export default ProductPage;