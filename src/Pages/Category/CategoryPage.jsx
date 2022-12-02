import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Filter from '../../Components/Filter/Filter';
import Header from '../../Components/Header/Header';
import PageHeading from '../../Components/PageHeading/PageHeading';
import ProductGrid from '../../Components/ProductGrid/ProductGrid';

import './CategoryPage.css';

//Base page for every category
const CategoryPage = ( )=> {
    const { categoryName } = useParams()
    const categories = useSelector(state=>state.data.categories)
    //const products = categories.filter(cat=>cat.name===categoryName)[0].products
    const products = [
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
    ]
    const productsCount = products.length

    return (
        <div className="app__category__page app__page">
            <div className="app__category__page__inner app__page__inner">
                <header className="app__category-page__header  app__page__header">
                    <div className="app__category-page__header__inner">
                        <Header/>
                    </div>
                </header>
                <div className="app__category-page__main app__page__main">
                    <div className="app__category-page__main__inner app__page__main__inner">
                        <PageHeading
                            heading={ categoryName }
                            siteName= "Techstore"
                            divider= ">"
                        />
                        <div className="app__category-page__main__products">
                            <div className="app__category-page__main__products__inner">
                                <div className="app__category-page__main__products__count">
                                    <div className="app__category-page__main__products__count__inner">
                                        <div>
                                            {productsCount} Products
                                        </div>
                                    </div>
                                </div>
                                <div className="app__category-page__main__products__results">
                                    <div className="app__category-page__main__products__results__inner">
                                        <div className="app__category-page__main__products__results__content">
                                            <div className="app__category-page__main__products__results__content__inner">
                                                <ProductGrid
                                                    products={products}
                                                    size="wide"
                                                />
                                            </div>
                                        </div>
                                        <div className="app__category-page__main__products__results__sidebar">
                                            <div className="app__category-page__main__products__results__sidebar__inner">
                                                
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

export default CategoryPage;