import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useSelector } from 'react-redux'; 

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

const App = ()=>{
    //Getting the auth{loggedIn:bool} state so that we can redirect the user
    const loggedIn = useSelector(state=> state.auth.loggedIn)

    return(
        <div className='app'>
            <Router>
                <Routes>
                    <Route 
                        path='/' 
                        element={<BasePage/>}
                    />
                    <Route 
                        path='/home' 
                        element={<HomePage/>}
                    />

                    /* Accounts */
                    <Route 
                        path='/accounts/signin' 
                        element={<SignInPage/>}
                    />
                    <Route 
                        path='/accounts/signup' 
                        element={<SignUpPage/>}
                    />
                    <Route
                        path='/accounts/forgot-password'
                        element={<ForgotPasswordPage/>}
                    />
                </Routes>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;