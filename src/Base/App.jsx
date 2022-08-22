import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
const Home = ()=>{
    return(
        <>
            <h1>HOme page bItch</h1>
        </>
    )
}

const App = ()=>{

    return(
        <div className='app'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}>
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