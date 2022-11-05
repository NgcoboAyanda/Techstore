import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'; 

//Pages
import BasePage from '../Pages/Base/BasePage';
import HomePage from '../Pages/Home/HomePage';
//Auth Pages
import SignInPage from '../Pages/Auth/SignInPage/SignInPage';
import SignUpPage from '../Pages/Auth/SignUpPage/SignUpPage';

//components
import Footer from '../Components/Footer/Footer';

import './App.css'
import ForgotPasswordPage from '../Pages/Auth/ForgotPasswordPage/ForgotPasswordPage';
import MobileMenu from '../Components/MobileMenu/MobileMenu';
import { toggleMobileMenu } from '../Features/Ui/UiSlice';
import { signOut } from '../Features/Auth/AuthSlice';

const App = ()=>{
    const mobileMenuIsOpen = useSelector( state=> state.ui.mobileMenuIsOpen ); 
    const userIsLoggedIn = useSelector( state=> state.auth.userIsLoggedIn );
    
    const dispatch = useDispatch();

    return(
        <div className='app'>
            <div className="app__inner">
                <Router basename={ process.env.PUBLIC_URL } >
                    <div className="app__mobile-menu">
                        <div className="app__mobile-menu__inner">
                            <MobileMenu
                                isOpen={mobileMenuIsOpen}
                                toggle={()=>dispatch(toggleMobileMenu())}
                                userIsLoggedIn={userIsLoggedIn}
                                signOut={()=>dispatch(signOut())}
                            />
                        </div>
                    </div>
                    <Routes>
                        <Route 
                            exact path='/' 
                            element={<BasePage/>}
                        />
                        <Route 
                            exact path='/home'
                            element={<HomePage/>}
                        />

                        {/* Accounts */}
                        <Route 
                            exact path='/accounts/signin' 
                            element={<SignInPage/>}
                        />
                        <Route 
                            exact path='/accounts/signup' 
                            element={<SignUpPage/>}
                        />
                        <Route
                            exact path='/accounts/forgot-password'
                            element={<ForgotPasswordPage/>}
                        />
                    </Routes>
                    <Footer/>
                </Router>
            </div>
        </div>
    )
}

export default App;