import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../Features/Ui/UiSlice";
import FilterOption from "../FilterOption/FilterOption";

import './Filter.css';

const Filter = ()=> {
    const sortState = useSelector(state=> state.ui.filter.sort)
    const dispatch = useDispatch()

    const setFilterValue = (filterProperty, newFilterPropertyValue) =>{
        dispatch(setFilterValue({filterProperty, newFilterPropertyValue}))
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
                            setValue={setFilterValue}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Filter;