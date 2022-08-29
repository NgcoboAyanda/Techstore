import React from 'react';
import loaderIcon from './loader-icon.svg'

import './Loader.css';

const Loader = ()=>{

    return(
        <div className='spinner'>
            <img className='spinner__icon' src={loaderIcon} alt="#"/>
            <div className="spinner__label">
                Loading
            </div>
        </div>
    )
}

export default Loader;