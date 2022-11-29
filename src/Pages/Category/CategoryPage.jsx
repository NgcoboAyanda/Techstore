import React from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../../Components/Filter/Filter';
import Header from '../../Components/Header/Header';
import PageHeading from '../../Components/PageHeading/PageHeading';

import './CategoryPage.css';

//Base page for every category
const CategoryPage = ( )=> {
    let { categoryName } = useParams()

    const renderProducts = ()=> {
        
    }

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
                        <div className="app__category-page__main__filter">
                            <div className="app__category-page__main__filter__inner">
                                <Filter/>
                            </div>
                        </div>
                        <div className="app__category-page__main__products">
                            <div className="app__category-page__main__products__inner">
                                <div className="app__category-page__main__products__count">
                                    <div className="app__category-page__main__products__count__inner">
                                        <div>
                                            103 Products
                                        </div>
                                    </div>
                                </div>
                                <div className="app__category-page__main__products__results">
                                    <div className="app__category-page__main__products__results__inner">
                                        <div className="app__category-page__main__products__results__content">
                                            <div className="app__category-page__main__products__results__content__inner">
                                                
                                            </div>
                                        </div>
                                        <div className="app__category-page__main__products__results__sidebar">
                                            <div className="app__category-page__main__products__results__sidebar__inner">
                                                sidebar
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