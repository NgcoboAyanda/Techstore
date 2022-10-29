import React from 'react';

const SignOutButton = ({ signOut })=> {

    return (
        <>
            <div className="header__nav__links__item  header__nav__links__sign-out">
                <div className="header__nav__links__item__inner">
                    <button className="header__nav__links__item__element" onClick={()=>signOut()} type="button">
                        <span className="icon">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z"/></svg>
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

export default SignOutButton;