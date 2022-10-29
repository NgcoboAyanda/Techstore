import React from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../Features/Auth/AuthSlice';
import { toggleMobileMenu } from '../../Features/Ui/UiSlice';

import Cart from '../Cart/Cart';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SearchInput from '../InputBoxes/SearchInput/SearchInput';
import Logo from '../Logo/Logo'; 

import './Header.css';

const Header = ()=>{
    //Form
    const { register /*, watch , handleSubmit, control, formState: { errors } */} = useForm({
        defaultValues: {
            'top-search-box': ''
            ,
            'bottom-search-box': ''
        }
    });
    //Links
    const telegramContactLink = "https://t.me/kiingcxld";
    const projectGithubLink = "https://github.com/NgcoboAyanda/Techstore-Frontend";
    //site categories
    const categories = [
        "laptops", "desktops", "phones", "tablets", "accessories"
    ]
    //Redux/State
    const dispatch = useDispatch();
    const userIsLoggedIn = useSelector(state => state.auth.userIsLoggedIn);

    const openMobileMenu = ()=>{
        dispatch(toggleMobileMenu());
    }

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const renderCategories = ()=>{
        return categories.map(category=>{
            return(
                <li className="header__nav__categories__item">
                    <div className="header__nav__categories__item__inner">
                        <Link to={`/c/${category}`}>
                            { capitalize(category) }
                        </Link>
                    </div>
                </li>
            )
        })
    }

    const renderSignInSignOutLink = ()=>{
        if(userIsLoggedIn){
            //if user is logged in--- show sign out button
            return(
                <>
                    <div className="header__nav__links__item  header__nav__links__my-account">
                        <div className="header__nav__links__my-account__inner">
                            <Link className="header__nav__links__item__element" to="/accounts/myaccount" onClick={()=>dispatch(signOut())}>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189"/></svg>
                                </span>
                                <span className="label">
                                    My Account
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="header__nav__links__item  header__nav__links__sign-out">
                        <div className="header__nav__links__item__inner">
                            <button className="header__nav__links__item__element" onClick={()=>dispatch(signOut())} type="button">
                                <span className="icon">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z"/></svg>
                                </span>
                                <span className="label">
                                    Sign Out
                                </span>
                            </button>
                        </div>
                    </div>
                </>
            )
        }
        else{
            //if user is not logged in--- show sign-in link
            return(
                <>
                    <div className="header__nav__links__item  header__nav__links__sign-in">
                        <div className="header__nav__links__item__inner">
                            <Link className="header__nav__links__item__element" to="/accounts/signin">
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189"/></svg>
                                </span>
                                <span className="label">
                                    Sign In
                                </span>
                            </Link>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <div className="header">
            <div className="header__inner">
                <div className="header__top">
                    <div className="header__top__inner">
                        <div className="header__top__links">
                            <ul className="header__top__links__inner">
                                <div className="header__top__links__item">
                                    <div className="header__top__links__item__inner">
                                        <a 
                                            href={projectGithubLink} 
                                            target="_blank"
                                            rel="noreferrer"
                                            >
                                            Project Github Repo
                                        </a>
                                    </div>
                                </div>
                                <div className="header__top__links__item">
                                    <div className="header__top__links__item__inner">
                                        <a 
                                            href={telegramContactLink} 
                                            target="_blank"
                                            rel="noreferrer"
                                            >
                                            Contact Me On Telegram
                                        </a>
                                    </div>
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
                                {renderCategories()}
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
                                {renderSignInSignOutLink()}
                                <div className="header__nav__links__item">
                                    <div className="header__nav__links__item__inner">
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