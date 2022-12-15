import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import CategoryRow from '../../Components/CategoryRow/CategoryRow';
import Header from '../../Components/Header/Header';
import PageHeading from '../../Components/PageHeading/PageHeading';

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
        return Object.keys(categories).map( categoryName => {
            if(categoryName !== "all"){
                return (
                    <div className="app__home-page__main__categories__item" key={`c-${categoryName}`}>
                        <div className="app__home-page__main__categories__item__inner">
                            <CategoryCard
                                name={ capitalize(categoryName) }
                                image={ categories[categoryName].image }
                                link={ `/c/${categoryName}` }
                            />
                        </div>
                    </div>
                )
            }
        })
    }

    const renderCategoryRows = () => {
        return Object.keys(categories).map( categoryName=> {
            return (
                <div className="app__home-page__main__categories-rows__item" key={`cr-${categoryName}`}>
                    <div className="app__home-page__main__categories-rows__item__inner">
                        <CategoryRow
                            name={ capitalize(categoryName) }
                            link={ `/c/${categoryName}` }
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
                    <div className="app__home-page__main__inner app__page__main__inner">
                        <PageHeading
                            siteName={ site.name }
                            heading="Home"
                            pageContent="Electronics"
                        />
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
                    </div>
                </main>
            </div>
        </div>
    )
};

export default HomePage;