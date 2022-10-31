import React from 'react';
import { Link } from 'react-router-dom';

import './CategoryCard.css';

const CategoryCard = ({ name, image, link})=> {

    return (
        <Link className="category"  to={link} key={name}>
            <div className="category__image">
                <div className="category__image__inner">
                    <img src={image} alt="" srcset="" />
                </div>
            </div>
            <div className="category__label">
                <div className="category__label__inner">
                    <div>
                        { name }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CategoryCard;