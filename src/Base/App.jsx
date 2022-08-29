import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useSelector } from 'react-redux'; 

//Pages
import BasePage from '../Pages/Base/BasePage';
import HomePage from '../Pages/Home/HomePage';
import AuthPage from '../Pages/Auth/AuthPage';

//components
import Footer from '../Components/Footer/Footer';

import './App.css'

const App = ()=>{
    //Getting the auth{loggedIn:bool} state so that we can redirect the user
    const loggedIn = useSelector(state=> state.auth.loggedIn)

    return(
        <div className='app'>
            <Router>
                <Routes>
                    <Route path='/' element={<BasePage/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path='/auth' element={<AuthPage/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;