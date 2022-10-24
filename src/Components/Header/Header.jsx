import React from 'react';
import {useForm} from 'react-hook-form';

import Cart from '../Cart/Cart';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Logo from '../Logo/Logo';

import './Header.css';

const Header = ()=>{
    const { register, watch , handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            'search-box': ''
        }
    });


    return (
        <div class="header">
            <div className="header__inner">
            </div>
        </div>
    )
}

export default Header;