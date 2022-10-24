import React from 'react';
import {useForm} from 'react-hook-form';
import { Link, Route } from 'react-router-dom';

import Cart from '../Cart/Cart';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SearchInput from '../InputBoxes/SearchInput/SearchInput';
import Logo from '../Logo/Logo';

import './Header.css';

const Header = ()=>{
    const { register, watch , handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            'search-box': ''
        }
    });


    return (
        <div class="header">
            <div className="header__inner">
                <div className="header__nav">
                    <div className="header__nav__inner">
                        <div className="header__nav__menu-btn">
                            <div className="header__nav__menu-btn__inner">
                                <HamburgerMenu/>
                            </div>
                        </div>
                        <div className="header__nav__logo">
                            <div className="header__nav__logo__inner">
                                <Logo/>
                            </div>
                        </div>
                        <div className="header__nav__links">
                            <div className="header__nav__links__inner">
                                <div className="header__nav__links__item">
                                    <div className="header__nav__links__item">
                                        <Cart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="header__search-bar">
                    <div className="header__search-bar__inner">
                        <SearchInput
                            register={register}
                            label = {'search-box'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Header;