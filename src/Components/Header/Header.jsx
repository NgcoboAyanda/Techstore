import React from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { toggleMobileMenu } from '../../Features/Ui/UiSlice';

import Cart from '../Cart/Cart';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SearchInput from '../InputBoxes/SearchInput/SearchInput';
import Logo from '../Logo/Logo';

import './Header.css';

const Header = ()=>{
    const { register, watch , handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            'top-search-box': ''
            ,
            'bottom-search-box': ''
        }
    });

    const dispatch = useDispatch();

    const openMobileMenu = ()=>{
        dispatch(toggleMobileMenu());
    }


    return (
        <div className="header">
            <div className="header__inner">
                <div className="header__top">
                    <div className="header__top__inner">
                        <div className="header__top__links">
                            <ul className="header__top__links__inner">
                                <div className="header__top__links__item">
                                    Registry
                                </div>
                                <div className="header__top__links__item">
                                    Weekly Ad
                                </div>
                                <div className="header__top__links__item">
                                    Techstore Card
                                </div>
                                <div className="header__top__links__item">
                                    Find Stores
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__nav">
                    <div className="header__nav__inner">
                        <div className="header__nav__menu-btn">
                            <div className="header__nav__menu-btn__inner">
                                <HamburgerMenu
                                    onClick={ openMobileMenu }
                                />
                            </div>
                        </div>
                        <div className="header__nav__logo">
                            <div className="header__nav__logo__inner">
                                <Logo/>
                            </div>
                        </div>
                        <div className="header__nav__categories">
                            <ul className="header__nav__categories__inner">
                                <li className="header__nav__categories__item">
                                    Categories
                                </li>
                                <li className="header__nav__categories__item">
                                    Deals
                                </li>
                                <li className="header__nav__categories__item">
                                    What's New
                                </li>
                                <li className="header__nav__categories__item">
                                    Pickup & Delivery
                                </li>
                            </ul>
                        </div>
                        <div className="header__nav__search-box">
                            <div className="header__nav__search-box__inner">
                                <SearchInput
                                    register={register}
                                    label = {'top-search-box'}
                                />
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
                            label = {'bottom-search-box'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Header;