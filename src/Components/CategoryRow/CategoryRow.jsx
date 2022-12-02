import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../../Features/Ui/UiSlice';

import ProductCard from '../ProductCard/ProductCard';

import './CategoryRow.css';

const CategoryRow = ({ name='all', products=[
    {
        'name': "Polaroid 16MP Waterproof Digital Camera",
        'id': "1",
        'price': "49.99",
        'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
    },
    {
        'name': "Polaroid 16MP Waterproof Digital Camera",
        'id': "2",
        'price': "49.99",
        'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
    },
    {
        'name': "Polaroid 16MP Waterproof Digital Camera",
        'id': "3",
        'price': "49.99",
        'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
    },
    {
        'name': "Polaroid 16MP Waterproof Digital Camera",
        'id': "4",
        'price': "49.99",
        'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
    },
    {
        'name': "Polaroid 16MP Waterproof Digital Camera",
        'id': "5",
        'price': "49.99",
        'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
    },
    {
        'name': "Polaroid 16MP Waterproof Digital Camera",
        'id': "6",
        'price': "49.99",
        'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
    },
    {
        'name': "Polaroid 16MP Waterproof Digital Camera",
        'id': "7",
        'price': "49.99",
        'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
    },
    {
        'name': "Polaroid 16MP Waterproof Digital Camera",
        'id': "8",
        'price': "49.99",
        'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
    },
    {
        'name': "Polaroid 16MP Waterproof Digital Camera",
        'id': "9",
        'price': "49.99",
        'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
    },
], link }) => {
    
    const dispatch = useDispatch();

    const renderProducts = () => {
        let id = 0;
        return products.map( product=>{
            id++;
            return(
                <React.Fragment key={`p-${id}`}>
                    <ProductCard
                        name={ product.name }
                        price={ product.price }
                        image={ product.image }
                        link={ `/p/${product.id}` }
                        addToCart={()=>dispatch(addToCart(product)) }
                        size="thin"
                    />
                </React.Fragment>
            )
        })
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