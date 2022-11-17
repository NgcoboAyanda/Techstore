import React from 'react';
import Header from '../../Components/Header/Header';

import './CategoryPage.css';

//Base page for every category
const CategoryPage = ( props )=> {

    

    return (
        <div className="app__category__page app__page">
            <div className="app__category__page__inner app__page__inner">
                <header className="app__category-page__header  app__page__header">
                    <div className="app__category-page__header__inner">
                        <Header/>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default CategoryPage;