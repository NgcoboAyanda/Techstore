import React from 'react';

import appLogo from './Logo.svg';

import './Logo.css';
import { useNavigate } from 'react-router-dom';

//Simple component that displays the app logo
const Logo = ({ isALink=false })=>{

    const navigate = useNavigate()

    const goToHomePage = ()=>{
        if(isALink){
            navigate('/home')
        }
    }

    return(
        <div className="app__logo">
            <div className="app__logo__inner">
                <img src={appLogo} onClick={()=>goToHomePage()} alt="" srcSet="" />
            </div>
        </div>
    )
}

export default Logo;