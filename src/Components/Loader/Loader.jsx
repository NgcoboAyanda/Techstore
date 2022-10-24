import React from 'react';
import loaderIcon from './loader-icon.svg'

import './Loader.css';

const Loader = ( {color="dark"})=>{

    return(
        <div className='spinner'>
            <div className="spinner__inner">
                <img className='spinner__icon' src={loaderIcon} alt="#"/>
                <div className={`spinner__label spinner__label_${color}`}>
                    Loading
                </div>
            </div>
        </div>
    )
}

export default Loader;