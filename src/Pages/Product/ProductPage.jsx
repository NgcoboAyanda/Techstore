import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Delivery from '../../Components/Delivery/Delivery';
import Gallery from '../../Components/Gallery/Gallery';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import Rating from '../../Components/Rating/Rating';

import './ProductPage.css';

const ProductPage = () => {
    const [deliveryMethod, setDeliveryMethod] = useState("Pickup");
    const [product, setProduct] = useState({})

    const { productId } = useParams();

    const addToCart = () => {
        console.log(productId)
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
                                onClick={addToCart}
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
                <div className="skeleton-loader"></div>
            )
        }
    }

    const renderProductHeading = () => {
        if(productHasLoaded()){
            return (
                <div className="app__product-page__main__heading">
                    <div className="app__product-page__main__heading__inner">
                        <h1 className='heading_mid'>
                            Lenovo IdeaPad 3i 15.6" Laptop with Windows 11 - Intel Processor - 8GB RAM Memory - 512GB Storage - Blue (82RK00BDUS)
                        </h1>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="skeleton-loader skeleton-loader_text"></div>
            )
        }
    }

    const renderProductSpecs = () => {
        if(productHasLoaded()){
            return (
                <div className="app__product-page__main__about__content__specs__text__item">
                    <div className="app__product-page__main__about__content__specs__text__item__inner">
                        <span className="app__product-page__main__about__content__specs__text__item__key">
                            {"Dimensions (Overall)"}:
                        </span>
                        <span className="app__product-page__main__about__content__specs__text__item__value">
                            {"7 Inches (H) x 9.29 Inches (W) x 14.17 Inches (D)"}
                        </span>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="skeleton_loader skeleton_loader_text-list">
                    <div className="skeleton_loader_text-list__inner">
                        <div className="skeleton_loader_text-list__item"></div>
                        <div className="skeleton_loader_text-list__item"></div>
                        <div className="skeleton_loader_text-list__item"></div>
                        <div className="skeleton_loader_text-list__item"></div>
                        <div className="skeleton_loader_text-list__item"></div>
                        <div className="skeleton_loader_text-list__item"></div>
                    </div>
                </div>
            )
        }
    }

    const renderProductDescription = () => {
        if(productHasLoaded()){
            return (
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat cum accusamus animi magni deleniti itaque nam quas labore facere quibusdam sint tempora molestias temporibus optio ab ea mollitia fugit placeat excepturi, cumque molestiae! Dolorum autem architecto mollitia perspiciatis fuga ut veritatis ipsum quisquam sequi ullam vero quod labore, sed modi eum? Sint eaque minima debitis vitae vero suscipit obcaecati temporibus perspiciatis, dolor quae repudiandae cupiditate! Suscipit corrupti animi asperiores repellendus. Facere, voluptates laboriosam impedit dolore corrupti sint vitae earum?
                </span>
            )
        }
        else {
            return <div className="skeleton-loader"></div>
        }
    }

    const renderProductGallery = () => {
        if(productHasLoaded()){
            return (
                <Gallery
                    images={product.images}
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