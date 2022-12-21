import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../Features/Ui/UiSlice';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardSkeletonLoader from '../ProductCardSkeletonLoader/ProductCardSkeletonLoader';

import './ProductGrid.css';

const ProductGrid = ({ products=[], size, status })=> {
    const {categoryName} = useParams();

    const dispatch = useDispatch()

    const renderProductGridSkeletons = () => {
        let emptyList = []
        for (let i=1; i <=20; i++){
            emptyList.push(i)
        }
        return emptyList.map((item)=>{
            return (
                <React.Fragment key={item}>
                    <ProductCardSkeletonLoader/>
                </React.Fragment>
            )
        })
    }

    const renderProductGridCards = () => {
        return products.map( (product, i)=>{
            return (
                <React.Fragment key={i}>
                    <ProductCard
                        name = {product.name}
                        image= {product.image}
                        price = {product.price}
                        id = {product.id}
                        link= {`/${categoryName}/${product.id}`}
                        size={size}
                        addToCart={()=>dispatch(addToCart(product))}
                    />
                </React.Fragment>
            )
        })
    }

    const renderProductGridItems = () => {
        if(status === 'loading'){
            console.log(status)
            //if app is loading
            return (
                <>
                    {renderProductGridSkeletons()}
                </>
            )
        }
        else {
            //app is idle / meaning loading has completed
            return (
                <>
                    {renderProductGridCards()}
                </>
            )
        }
    }

    return (
        <div className="product-grid">
            <div className="product-grid__inner">
                {renderProductGridItems()}
            </div>
        </div>
    )
}

export default ProductGrid;