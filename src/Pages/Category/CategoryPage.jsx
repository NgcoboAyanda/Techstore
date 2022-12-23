import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Filter from '../../Components/Filter/Filter';
import Header from '../../Components/Header/Header';
import PageHeading from '../../Components/PageHeading/PageHeading';
import ProductGrid from '../../Components/ProductGrid/ProductGrid';
import { fetchCategoryProducts } from '../../Features/Data/DataSlice';
import { fetchCategoryPageProducts, setCurrentCategory } from '../../Features/Pages/Pages';

import './CategoryPage.css';

//Base page for every category
const CategoryPage = ( )=> {
    const { categoryName } = useParams();
    const {currentCategory, status, categoryProducts: products } = useSelector(state=>state.pages.categoryPage);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch( setCurrentCategory({categoryName}) );
        },
        [categoryName]
    )

    useEffect(
        () => {
            dispatch( fetchCategoryPageProducts({currentCategory}) );
        },
        [currentCategory]
    )

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
                                            {products.length} Products
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
                                                    status={status}
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