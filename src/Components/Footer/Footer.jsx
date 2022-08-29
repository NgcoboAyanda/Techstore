import React from 'react';

import './Footer.css'

export default ()=>{
    return(
        <footer className="footer app__footer">
            <div className="app__footer__inner">
                <ul className="links">
                    <li className="links__item">
                        <a href="#" className="link">
                            Terms
                        </a>
                    </li>
                    <li className="links__item">
                        <a href="#" className="link">
                            Supply Chain
                        </a>
                    </li>
                    <li className="links__item">
                        <a href="#" className="link">
                            Privacy
                        </a>
                    </li>
                    <li className="links__item">
                        <a href="#" className="link">
                            Privacy Rights
                        </a>
                    </li>
                    <li className="links__item">
                        <a href="#" className="link">
                            Do Not Sell My Personal Information
                        </a>
                    </li>
                    <li className="links__item">
                        <a href="#" className="link">
                            About Us
                        </a>
                    </li>
                    <li className="links__item">
                        <a href="#" className="link">
                            Interest Based Ads
                        </a>
                    </li>
                    <li className="links__item">
                        <a href="#" className="link">
                            TM & &copy; 2022 Techstore Brands, Inc.
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}