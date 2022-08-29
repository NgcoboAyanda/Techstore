import React from 'react';

import appLogo from './Logo.svg';

import './Logo.css';

//Simple component that displays the app logo
const Logo = ()=>{

    return(
        <div className="app__logo">
            <img src={appLogo} alt="" srcset="" />
        </div>
    )
}

export default Logo;