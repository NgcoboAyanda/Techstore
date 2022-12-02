import React from 'react';

import './ProductCardSkeletonLoader.css';

const ProductCardSkeletonLoader = () => {

    return (
        <div className="product-card-skeleton-loader">
            <div className="product-card-skeleton-loader__inner">
                <span className="shimmer">
                    
                </span>
            </div>
        </div>
    )
}

export default ProductCardSkeletonLoader;