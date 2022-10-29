import React from 'react';
import { Link } from 'react-router-dom';

import './CategoryCard.css';

const CategoryCard = ({ name })=> {

    return (
        <Link className="category" to="/" key={`c-${name}`}>
            <div className="category__image">
                <div className="category__image__inner">
                    category img
                </div>
            </div>
            <div className="category__label">
                <div className="category__label__inner">
                    category label
                </div>
            </div>
        </Link>
    )
}

export default CategoryCard;