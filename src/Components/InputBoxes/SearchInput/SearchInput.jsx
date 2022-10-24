import React, { useState } from 'react';

import '../InputBoxes.css';

const SearchInput = ({ value='', placeholder='', label='', optional=false, register})=>{
    //register is a function from react-hook-form  
    const[focused, setFocused] = useState(false);
    const[error, setError] = useState('');

    return (
        <div className="search-box">
            <div className="search-box__inner">
                
            </div>
        </div>
    )
}

export default SearchInput;