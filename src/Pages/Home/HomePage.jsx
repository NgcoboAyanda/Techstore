import React from 'react';
import Header from '../../Components/Header/Header';

//css
import './HomePage.css'

const HomePage = ()=>{
    return(
        <div className="app__home-page page">
            <header className="app__home-page__inner">
                <div className="app__home-page__header">
                    <div className="app__home-page__header__inner">
                        <Header/>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default HomePage;