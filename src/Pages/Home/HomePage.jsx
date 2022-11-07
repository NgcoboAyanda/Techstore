import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import CategoryRow from '../../Components/CategoryRow/CategoryRow';
import Header from '../../Components/Header/Header';

//css
import './HomePage.css'

const HomePage = ()=>{
    //contains data about our site
    //On the home page,  site name will be always taken from this object
    const site = {
        name: "Techstore",
        niche: "Electronics"
    }

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const categories = useSelector(state=> state.data.categories);

    const renderCategoryCards = () =>{
        return categories.map( category => {
            return (
                <div className="app__home-page__main__categories__item" key={`c-${category.name}`}>
                    <div className="app__home-page__main__categories__item__inner">
                        <CategoryCard
                            name={ capitalize(category.name) }
                            image={ category.image }
                            link={ `/c/${category.name}` }
                        />
                    </div>
                </div>
            )
        })
    }

    const renderCategoryRows = () => {
        return categories.map( category=> {
            console.log(category.name)
            return (
                <div className="app__home-page__main__categories-rows__item" key={`cr-${category.name}`}>
                    <div className="app__home-page__main__categories-rows__item__inner">
                        <CategoryRow
                            name={ capitalize(category.name) }
                            link={ `/c/${category.name}` }
                        />
                    </div>
                </div>
            )
        })
    }

    return(
        <div className="app__home-page  app__page">
            <div className="app__home-page__inner  app__page__inner">
                <header className="app__home-page__header  app__page__header">
                    <div className="app__home-page__header__inner">
                        <Header/>
                    </div>
                </header>
                <main className="app__home-page__main  app__page__main">
                    <div className="app__home-page__main__inner">
                        <div className="app__home-page__heading">
                            <div className="app__home-page__heading__inner">
                                <div className="app__home-page__heading__title">
                                    <div className="app__home-page__heading__title__inner">
                                        <h1 className="heading  heading_extreme">
                                            Home
                                        </h1>
                                    </div>
                                </div>
                                <div className="app__home-page__heading__sub-text">
                                    <div className="app__home-page__heading__sub-text__inner">
                                        <span className="site-name">
                                            {site.name}
                                        </span>
                                        <span className="slash">
                                            /
                                        </span>
                                        <span className="site-niche">
                                            {site.niche}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="app__home-page__main__categories-cards">
                            <div className="app__home-page__main__categories-cards__inner">
                                <div className="category-card-container">
                                    <div className="category-card-container__inner">
                                        {renderCategoryCards()}
                                    </div>
                                </div>
                                <div className="category-card-link">
                                    <div className="category-card-link__inner">
                                        <Link className="link link_btn" to="/c/all">
                                            Shop All Categories
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="app__home-page__main__categories-rows">
                            <div className="app__home-page__main__categories-rows__inner">
                                {renderCategoryRows()}
                            </div>
                        </section>
                        <div className="app__home-page__main__benefits">
                            <div className="app__home-page__main__benefits__inner">
                                <div className="app__home-page__main__benefits__heading">
                                    <div className="app__home-page__main__benefits__heading__inner">
                                        <h2 className="heading heading_extreme">
                                            Benefits Of Shopping With Us
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
};

export default HomePage;