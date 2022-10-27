import React from 'react';

import './MobileMenu.css';

const MobileMenu = ({isOpen, toggle})=>{

    const renderMobileMenu = ()=>{
        if(isOpen){
            return(
                <div className="mobile-menu">
                    <div className="mobile-menu__inner">
                        <div className="mobile-menu__top">
                            <div className="mobile-menu__top__inner">
                                <div className="mobile-menu__top__label">
                                    <div className="mobile-menu__top__label__inner">
                                        <div className="label">
                                            Menu
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-menu__top__close-btn">
                                    <div className="mobile-menu__top__close-btn__inner">
                                        <button onClick={()=>toggle()} className="btn btn_icon" type='button'>
                                            <svg clipRule="evenodd" fillRule="evenodd" strokeLineJoin="round" strokeMiterlimit="2" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu__new-arrivals">
                            <div className="mobile-menu__new-arrivals__inner">
                                <div className="mobile-menu__new-arrivals__heading">
                                    <div className="mobile-menu__new-arrivals__heading__inner">
                                        What's New
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return null
        }
    }

    return(
        renderMobileMenu()
    )
}

export default MobileMenu;