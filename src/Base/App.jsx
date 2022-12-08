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
import { toggleCheckout, toggleMobileMenu } from '../Features/Ui/UiSlice';
import { signOut } from '../Features/Auth/AuthSlice';
import CategoryPage from '../Pages/Category/CategoryPage';
import ProductPage from '../Pages/Product/ProductPage';
import Checkout from '../Components/Checkout/Checkout';

const App = ()=>{
    const checkoutIsOpen = useSelector( state=> state.ui.checkoutIsOpen )
    const mobileMenuIsOpen = useSelector( state=> state.ui.mobileMenuIsOpen ); 
    const userIsLoggedIn = useSelector( state=> state.auth.userIsLoggedIn );
    const categories = useSelector(state=> state.data.categories);

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
                                categories={categories}
                                signOut={()=>dispatch(signOut())}
                            />
                        </div>
                    </div>
                    <div className="app__checkout">
                        <div className="app__checkout__inner">
                            <Checkout
                                isOpen={checkoutIsOpen}
                                toggle={()=>dispatch(toggleCheckout())}
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

                        {/* Categories */}
                        <Route
                            exact path='/c/:categoryName'
                            element={<CategoryPage/>}
                        />
                        {/* Product Page */}
                        <Route
                            exact path='/p/:productId'
                            element={<ProductPage/>}
                        />
                    </Routes>
                    <Footer/>
                </Router>
            </div>
        </div>
    )
}

export default App;