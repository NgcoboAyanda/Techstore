import React from 'react';

import './Header.css';

const Header = ()=>{

    return (
        <div class="header">
            <div className="header__inner">
                <div className="header__nav">
                    <div className="header__nav__inner">
                        <div className="header__nav__hamburger">
                            <div className="header__nav__hamburger__inner">
                                HAMBURGER
                            </div>
                        </div>
                        <div className="header__nav__logo">
                            <div className="header__nav__logo__inner">
                                LOGO
                            </div>
                        </div>
                        <div className="header__nav__shopping-cart">
                            <div className="header__nav__shopping-cart__inner">
                                CART
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__search-box">
                    <div className="header__search-box__inner">
                        header searchbox
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;