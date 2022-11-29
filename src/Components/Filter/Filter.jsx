import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue, toggleFilter } from "../../Features/Ui/UiSlice";
import FilterOption from "../FilterOption/FilterOption";

import './Filter.css';

const Filter = ()=> {
    const sortState = useSelector(state=> state.ui.filter.sort)
    const dispatch = useDispatch()

    const changeFilterValue = (filterProperty, filterPropertyValue) =>{
        dispatch(setFilterValue({filterProperty, filterPropertyValue}));
    }

    const toggleFilterVisibility = (filterProperty)=>{
        dispatch(toggleFilter({filterProperty}));
    }

    const submitForm = (data)=>{
        if(data){
        }
    }

    return (
        <div className="filter">
            <div className="filter__inner">
                <div className="filter__sort">
                    <div className="filter__sort">
                        <FilterOption
                            name="sort"
                            value={sortState.value}
                            setValue={changeFilterValue}
                            toggle={toggleFilterVisibility}
                            filterOptionValues={['Price Ascending', 'Price Descending']}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;