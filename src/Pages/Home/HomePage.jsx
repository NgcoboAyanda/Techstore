import React from 'react';

import { Auth } from '../../Features/Auth/Auth';

//css
import './HomePage.css'

const HomePage = ()=>{
    return(
        <div className="app__homepage">
            <Auth/>
        </div>
    )
};

export default HomePage;