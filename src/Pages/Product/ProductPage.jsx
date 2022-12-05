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

    const { productId } = useParams();

    const addToCart = () => {
        console.log(productId)
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
                        <div className="app__product-page__main__heading">
                            <div className="app__product-page__main__heading__inner">
                                <h1 className='heading_mid'>
                                    Lenovo IdeaPad 3i 15.6" Laptop with Windows 11 - Intel Processor - 8GB RAM Memory - 512GB Storage - Blue (82RK00BDUS)
                                </h1>
                            </div>
                        </div>
                        <div className="app__product-page__main__product">
                            <div className="app__product-page__main__product__inner">
                                <div className="app__product-page__main__product__gallery">
                                    <div className="app__product-page__main__product__gallery__inner">
                                        <Gallery
                                            images={["https://target.scene7.com/is/image/Target/GUEST_042ebf4b-42db-4025-a2dd-ab706e1dad6c?wid=626&hei=626&qlt=80&fmt=pjpeg", "https://target.scene7.com/is/image/Target/GUEST_99439099-47e3-4869-8cfc-2c42c63cf45b?wid=800&hei=800&qlt=80&fmt=pjpeg"]}
                                        />
                                    </div>
                                </div>
                                <div className="app__product-page__main__product__information">
                                    <div className="app__product-page__main__product__information__inner">
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