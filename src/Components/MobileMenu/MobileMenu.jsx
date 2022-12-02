import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './MobileMenu.css';

const MobileMenu = ({isOpen, toggle, userIsLoggedIn=false, signOut, categories=[]})=>{

    useEffect(
        ()=>{
            if(isOpen){
                document.body.style.overflow = 'hidden';
            }
            else{
                document.body.style.overflow = 'unset';
            }
        },
        [isOpen]
    )

    //Links
    const telegramContactLink = "https://t.me/kiingcxld";
    const projectGithubLink = "https://github.com/NgcoboAyanda/Techstore-Frontend";

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const renderNewArrivalsItems = ()=>{
        return categories.map(category=>{
            if(category.name !== "all"){
                return(
                    <li className="mobile-menu__new-arrivals__content__item">
                        <div className="mobile-menu__new-arrivals__content__item__image">
                            <div className="mobile-menu__new-arrivals__content__item__image__inner">
                                <img 
                                    src={category.image} 
                                    alt={category.name} 
                                />
                            </div>
                        </div>
                        <div className="mobile-menu__new-arrivals__content__item__label">
                            <div className="mobile-menu__new-arrivals__content__item__label__inner">
                                <div>
                                    {capitalize(category.name)} New Arrivals
                                </div>
                            </div>
                        </div>
                    </li>
                )
            }
        } )
    }

    const renderCategories = ()=>{
        return categories.map(category=>{
            return(
                <li className="mobile-menu__categories__list__item" key={`c-${category.name}`}>
                    <div className="mobile-menu__categories__list__item__inner">
                        <Link 
                                className="mobile-menu-link" 
                                onClick={()=>toggle()} 
                                to={`/c/${category.name}`}
                            >
                            {capitalize(category.name)}    
                        </Link> 
                    </div>
                </li>
            )
        })
    }

    const renderAccountLinks = ()=>{
        if(userIsLoggedIn){
            return (
                //if user is logged in
                //only show my-account link
                <>
                    <li className="mobile-menu__account__links__item">
                        <div className="mobile-menu__account__links__item__inner">
                            <span className="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z"/></svg>
                            </span>
                            <Link className="mobile-menu-link" onClick={()=>toggle()} to="/accounts/myaccount">
                                My Account
                            </Link>
                        </div>
                    </li>
                    <li className="mobile-menu__account__links__item">
                        <div className="mobile-menu__account__links__item__inner">
                            <span className="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 2v20h14v-2h-12v-16h12v-2h-14zm18 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z"/></svg>
                            </span>
                            <button onClick={()=>signOut()} type="button">
                                Sign Out
                            </button>
                        </div>
                    </li>
                </>
            )
        }
        else{
            //user is not logged in
            //only show sign in and register links
            return (
                <>
                    <li className="mobile-menu__account__links__item">
                        <div className="mobile-menu__account__links__item__inner">
                            <span className="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                            </span>
                            <Link className="mobile-menu-link" onClick={()=>toggle()} to="/accounts/signin">
                                Sign In
                            </Link>
                        </div>
                    </li>
                    <li className="mobile-menu__account__links__item">
                        <div className="mobile-menu__account__links__item__inner">
                            <span className="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
                            </span>
                            <Link className="mobile-menu-link" onClick={()=>toggle()} to="/accounts/signup">
                                Register
                            </Link>
                        </div>                                  
                    </li>
                </>
            )
        }
    }

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
                                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu__new-arrivals">
                            <div className="mobile-menu__new-arrivals__inner">
                                <div className="mobile-menu__new-arrivals__heading">
                                    <div className="mobile-menu__new-arrivals__heading__inner">
                                        <div>
                                            What's New
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-menu__new-arrivals__content">
                                    <ul className="mobile-menu__new-arrivals__content__inner">
                                        {renderNewArrivalsItems()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu__categories">
                            <div className="mobile-menu__categories__inner">
                                <div className="mobile-menu__categories__heading">
                                    <div className="mobile-menu__categories__heading__inner">
                                        <div>
                                            All Categories
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-menu__categories__list">
                                    <ul className="mobile-menu__categories__list__inner">
                                        {renderCategories()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu__account">
                            <div className="mobile-menu__account__inner">
                                <div className="mobile-menu__account__heading">
                                    <div className="mobile-menu__account__heading__inner">
                                        Account
                                    </div>
                                </div>
                                <div className="mobile-menu__account__links">
                                    <ul className="mobile-menu__account__links__inner">
                                        {renderAccountLinks()}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-menu__other">
                            <div className="mobile-menu__other__inner">
                                <div className="mobile-menu__other__heading">
                                    <div className="mobile-menu__other__heading">
                                        <div>
                                            Other Links
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-menu__other__links">
                                    <ul className="mobile-menu__other__links__inner">
                                        <li className="mobile-menu__other__links__item">
                                            <div className="mobile-menu__other__links__item__inner">
                                                <a  
                                                    className="mobile-menu-link" 
                                                    href={projectGithubLink} target="_blank" 
                                                    rel="noreferrer">
                                                        Github Repository
                                                </a>
                                            </div>
                                        </li>
                                        <li className="mobile-menu__other__links__item">
                                            <div className="mobile-menu__other__links__item__inner">
                                                <a 
                                                    className="mobile-menu-link" 
                                                    href={telegramContactLink} 
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    >
                                                        Get In Touch (Telegram)
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-menu__watermark">
                            <div className="mobile-menu__watermark__inner">
                                <div className="watermark">
                                    <span className="text">
                                        Made with
                                    </span> 
                                    <span className="heart-icon">
                                        <svg className="anim" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg"><g id="Group" fillRule="evenodd" transform="translate(467 392)"><path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" /><circle id="main-circ" opacity="0" cx="29.5" cy="29.5" r="1.5"/><g id="grp7" opacity="0" transform="translate(7 6)"><circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/><circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/></g><g id="grp6" opacity="0" transform="translate(0 28)"><circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/><circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/></g><g id="grp3" opacity="0" transform="translate(52 28)"><circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/><circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/></g><g id="grp2" opacity="0" transform="translate(44 6)" fill="#CC8EF5"><circle id="oval2" transform="matrix(-1 0 0 1 10 0)" cx="5" cy="6" r="2"/><circle id="oval1" transform="matrix(-1 0 0 1 4 0)" cx="2" cy="2" r="2"/></g><g id="grp5" opacity="0" transform="translate(14 50)" fill="#91D2FA"><circle id="oval1" transform="matrix(-1 0 0 1 12 0)" cx="6" cy="5" r="2"/><circle id="oval2" transform="matrix(-1 0 0 1 4 0)" cx="2" cy="2" r="2"/></g><g id="grp4" opacity="0" transform="translate(35 50)" fill="#F48EA7"><circle id="oval1" transform="matrix(-1 0 0 1 12 0)" cx="6" cy="5" r="2"/><circle id="oval2" transform="matrix(-1 0 0 1 4 0)" cx="2" cy="2" r="2"/></g><g id="grp1" opacity="0" transform="translate(24)" fill="#9FC7FA"><circle id="oval1" cx="2.5" cy="3" r="2"/><circle id="oval2" cx="7.5" cy="2" r="2"/></g></g></svg>
                                    </span> 
                                    <span className="text">
                                        by
                                    </span>
                                    <span className="github-link">
                                        <a 
                                            href="https://github.com/NgcoboAyanda" 
                                            target="_blank"
                                            rel="noreferrer"
                                            >
                                            Ayanda
                                        </a>
                                    </span>
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