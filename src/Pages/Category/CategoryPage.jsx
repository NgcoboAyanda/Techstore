import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';

import './CategoryPage.css';

//Base page for every category
const CategoryPage = ( )=> {
    let { categoryName } = useParams()

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
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
                        <div className="app__page__main__heading">
                                <div className="app__page__main__heading__inner">
                                    <div className="app__page__main__heading__title">
                                        <div className="app__page__main__heading__title__inner">
                                            <h1 className="heading  heading_extreme">
                                                { capitalize(categoryName) }
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="app__page__main__heading__sub-text">
                                        <div className="app__page__main__heading__sub-text__inner">
                                            <span className="site-name">
                                                site name
                                            </span>
                                            <span className="slash">
                                                /
                                            </span>
                                            <span className="site-niche">
                                                site name
                                            </span>
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