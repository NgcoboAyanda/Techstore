import React from 'react';

import './HamburgerMenu.css';

//font awesome
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HamburgerMenu = ()=>{


    return (
        <div className="hamburger__menu">
            <div className="hamburger__menu__inner">
                <button className="hamburger__menu__btn">
                    <div className="hamburger__menu__btn__inner">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default HamburgerMenu;
