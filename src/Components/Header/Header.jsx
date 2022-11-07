import React from 'react';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

//Actions
import { signOut } from '../../Features/Auth/AuthSlice';
import { toggleMobileMenu } from '../../Features/Ui/UiSlice';

//Components
import CartBtn from '../CartBtn/CartBtn';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SearchInput from '../InputBoxes/SearchInput/SearchInput';
import Logo from '../Logo/Logo'; 
import MyAccountLink from './MyAccountLink/MyAccountLink';
import SignInLink from './SignInLink/SignInLink';
import SignOutButton from './SignOutButton/SignOutButton';

import './Header.css';


const Header = ()=>{
    const cart = useSelector(state=> state.ui.cart);

    //Form
    const { register, handleSubmit, watch, setValue /*, getValues, control, formState: { errors } */} = useForm({
        defaultValues: {
            'topSearchBox':"",
            'bottomSearchBox':""
        }
    });
    const topSearchBoxValue = watch('topSearchBox');
    const bottomSearchBoxValue = watch('bottomSearchBox');

    useEffect(
        //When we change the top searchbox, the one on the bottom one has to be cleared
        ()=>{
            if(bottomSearchBoxValue){
                setValue("bottomSearchBox", "");
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [topSearchBoxValue]
    )

    useEffect(
        //When we change the bottom searchbox, the one on the top one has to be cleared
        ()=>{
            if(topSearchBoxValue){
                setValue("topSearchBox", "");
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [bottomSearchBoxValue]
    )


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
    //React-router
    const navigate = useNavigate()

    const openMobileMenu = ()=>{
        dispatch(toggleMobileMenu());
    }

    const signOutUser = ()=>{
        dispatch(signOut());
    }

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const submitSearch = formData=>{
        if(formData){
            const {topSearchBox, bottomSearchBox} = formData;
            if(topSearchBox && !bottomSearchBox){
                navigate(`/search?q=${topSearchBox}`);
            }
            else if(bottomSearchBox && !topSearchBox){
                navigate(`/search?q=${bottomSearchBox}`);
            }
        }
    }

    const renderCategories = ()=>{
        return categories.map(category=>{
            return(
                <li className="header__nav__categories__item" key={`c-${category}`}>
                    <div className="header__nav__categories__item__inner">
                        <Link to={`/c/${category}`}>
                            { capitalize(category) }
                        </Link>
                    </div>
                </li>
            )
        })
    }

    const renderSignInSignOut = ()=>{
        if(userIsLoggedIn){
            //if user is logged in--- show sign out button
            console.log('user is logged in bih')
            return(
                <>
                    <MyAccountLink
                        url="/accounts/myaccount"
                    />
                    <SignOutButton
                        signOut={signOutUser}
                    />
                </>
            )
        }
        else{
            //if user is not logged in--- show sign-in link
            return(
                <>
                    <SignInLink
                        url="/accounts/signin"
                    />
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
                        <form className="header__nav__search-box" onSubmit={handleSubmit(data=>submitSearch(data))}>
                            <div className="header__nav__search-box__inner">
                                <SearchInput
                                    register={register}
                                    label = {'topSearchBox'}
                                />
                            </div>
                        </form>
                        <div className="header__nav__links">
                            <div className="header__nav__links__inner">
                                {renderSignInSignOut()}
                                <div className="header__nav__links__item  header__nav__links__cart">
                                    <div className="header__nav__links__item__inner  header__nav__links__cart__inner">
                                        <CartBtn
                                            cartCounter={ cart.length }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="header__search-bar" onSubmit={handleSubmit(data=>submitSearch(data))}>
                    <div className="header__search-bar__inner">
                        <SearchInput
                            register={register}
                            label = {'bottomSearchBox'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Header;