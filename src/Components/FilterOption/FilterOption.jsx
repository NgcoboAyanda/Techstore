import React from 'react';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

import './FilterOption.css';

const FilterOption = ( { name, value, onChange, setValue, toggle, filterOptionValues=[] } )=>{
    let elementIsOpen = useSelector(state=> state.ui.filter[name].open);
    //This is a drop down select menu

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    console.log(elementIsOpen)

    const selectOption = ()=>{

    }

    const toggleOptions = ()=>{
        toggle(name);
    }

    const renderOptions = () => {
        return filterOptionValues.map( option=> {
            return (
                <div className="filter-option__options__item">
                    <div className="filter-option__options__item__inner">
                        <span>
                            {option}
                        </span>
                    </div>
                </div>
            )
        })
    }

    const renderOptionsVisibility = ()=>{
        if(elementIsOpen){
            return(
                <div className="filter-option__options">
                    <div className="filter-option__options__inner">
                        {renderOptions()}
                    </div>
                </div>
            )
        }
        else return null;
    }

    return (
        <div className="filter-option">
            <div className="filter-option__inner">
                <div className="filter-option__btn">
                    <div className="filter-option__btn__inner">
                        <button className="filter-option__btn__element" onClick={()=>toggleOptions()}>
                            <div className="filter-option__btn__element__inner">
                                <span className="filter-option__btn__element__label">
                                    <div className="filter-option__btn__element__label__inner">
                                        <span className="filter-option__btn__element__label__name">
                                            {capitalize(name)} By:
                                        </span>
                                        <span className="filter-option__btn__element__label__value">
                                            {value}
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                {renderOptionsVisibility()}
            </div>
        </div>
    )
}

export default FilterOption;