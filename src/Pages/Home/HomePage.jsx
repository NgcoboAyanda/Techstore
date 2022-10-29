import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
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

    const categories = [
        "laptops", "desktops", "phones", "TVs", "tablets", "accessories"
    ]

    const renderCategoryCards = () =>{
        return categories.map( category => {
            return (
                <>
                    <CategoryCard
                        name={category}
                    />
                </>
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
                        <div className="app__home-page__main__categories">
                            <div className="app__home-page__main__categories__inner">
                                <div className="app__home-page__main__categories__item">
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