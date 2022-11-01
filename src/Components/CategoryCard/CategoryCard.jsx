import React from 'react';
import { Link } from 'react-router-dom';

import './CategoryCard.css';

const CategoryCard = ({ name, image, link})=> {

    return (
        <Link className="link  category-card"  to={link}>
            <div className="category-card__image">
                <div className="category-card__image__inner">
                    <img src={image} alt="" srcset="" />
                </div>
            </div>
            <div className="category-card__label">
                <div className="category-card__label__inner">
                    <div>
                        { name }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CategoryCard;