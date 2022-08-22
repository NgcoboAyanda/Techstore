import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import HomePage from '../Pages/Home/HomePage';

const App = ()=>{

    return(
        <div className='app'>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage/>}>
                    </Route>
                </Routes>
            </Router>
            <footer className='footer'>
                this is the footer
            </footer>
        </div>
    )
}

export default App;