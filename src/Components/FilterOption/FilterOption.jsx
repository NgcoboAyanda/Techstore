import React from 'react';
import { Controller } from 'react-hook-form';

import './FilterOption.css';

const FilterOption = ( { name, value, onChange, setValue } )=>{
    //This is a drop down select menu

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const selectOption = ()=>{

    }

    return (
        <div className="filter-option">
            <div className="filter-option__inner">
                <div className="filter-option-btn">
                    <div className="filter-option-btn__inner">
                        <button className="filter-option-btn__element">
                            <div className="filter-option-btn__element__inner">
                                <span className="filter-option-btn__element__label">
                                    <div className="filter-option-btn__element__label__inner">
                                        <span className="filter-option-btn__element__label__name">
                                            {capitalize(name)}:
                                        </span>
                                        <span className="filter-option-btn__element__label__value">
                                            {value}
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterOption;