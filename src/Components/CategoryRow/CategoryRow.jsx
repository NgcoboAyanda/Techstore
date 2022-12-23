import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../../Features/Ui/UiSlice';

import ProductCard from '../ProductCard/ProductCard';

import './CategoryRow.css';

const CategoryRow = ({ name='all', products=[], link, status, categoryName }) => {

    const dispatch = useDispatch();

    const renderProducts = () => {
        if(status === 'idle' && products.length > 0){
            return products.map( (product, id)=>{
                return(
                    <React.Fragment key={`p-${id}`}>
                        <ProductCard
                            name={ product.name }
                            price={ product.price }
                            image={ product.image }
                            link={ `/${categoryName}/${product.id}` }
                            addToCart={()=>dispatch(addToCart(product)) }
                            size="thin"
                        />
                    </React.Fragment>
                )
            })
        }
        else{
            //products have not loaded
            return [...Array(8)].map( (item, index)=> {
                return (
                    <React.Fragment key={index}>
                        <ProductCard
                            empty={true}
                        />
                    </React.Fragment>
                )
            })
        }
    }

    return (
        <div className="category-row">
            <div className="category-row__inner">
                <div className="category-row__heading">
                    <div className="category-row__heading__inner">
                        <div className="category-row__heading__text">
                            <div className="category-row__heading__text__inner">
                                <h2 className="heading heading_extreme">
                                    {name}
                                </h2>
                            </div>
                        </div>
                        <div className="category-row__heading__link">
                            <div className="category-row__heading__link">
                                <Link to={ link } className="link link_underlined">
                                    Shop all
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-row__products">
                    <div className="category-row__products__inner">
                        {renderProducts()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryRow;