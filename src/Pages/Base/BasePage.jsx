import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';

import './BasePage.css';

//This is the base page of our app. 
//This is the first page that will be displayed when the user opens the app.
//Only contains a loading animation.
//Will redirect the user to the home page

const BasePage = ()=>{
    let navigate = useNavigate()


    useEffect(
        ()=>{
            setTimeout(
                ()=>{
                    navigate("/home");
                },
                3000
            )
        },
        []
    )

    return(
        <div className="app__base-page app__page">
            <div className="app__base-page__inner  app__page__inner">
                <div className="app__base-page__animation">
                    <div className="app__base-page__animation__inner">
                        <Loader/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasePage;