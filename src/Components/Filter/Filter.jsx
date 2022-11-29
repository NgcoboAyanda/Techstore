import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue, toggleFilter } from "../../Features/Ui/UiSlice";
import FilterOption from "../FilterOption/FilterOption";

import './Filter.css';

const Filter = ()=> {
    const sortState = useSelector(state=> state.ui.filter.sort)
    const dispatch = useDispatch()

    const changeFilterValue = (filterProperty, newFilterPropertyValue) =>{
        dispatch(setFilterValue({filterProperty, newFilterPropertyValue}));
    }

    const toggleFilterVisibility = (filterProperty)=>{
        dispatch(toggleFilter({filterProperty}));
    }

    const { register, setValue, watch, handleSubmit, control } = useForm({
        defaultValues: {
            sort: "Low-to-High"
        }
    })

    const submitForm = (data)=>{
        if(data){
            console.log(data) 
        }
    }

    return (
        <form className="filter" onSubmit={ handleSubmit(data=>submitForm(data)) }>
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
        </form>
    )
}

export default Filter;