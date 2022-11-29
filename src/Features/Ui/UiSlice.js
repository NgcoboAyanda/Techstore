import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobileMenuIsOpen: false,
    cart: [],
    filter: {
        sort: {
            open: false,
            value: "Price Ascending"
        }
    }
}



export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        //Mobile-Menu
        toggleMobileMenu: (state, action)=>{
            return {...state, mobileMenuIsOpen: !state.mobileMenuIsOpen};
        },
        //Cart Element
        addToCart: (state, action)=>{
            let { cart } = state;
            //the item that will be added to the cart
            return {...state, cart: [...cart, action.payload]};
        },
        removeFromCart: (state, action)=>{
            let { cart } = state;
            let itemId = action.payload;
            let newCart = cart.filter(cartItem=>cartItem.id !== itemId);
            return {...state, cart: newCart};
        },
        clearCart: (state, action)=>{
            return {...state, cart: []};
        },
        //Filter elements
        setFilterValue: (state, action)=>{
            const {filterProperty, filterPropertyValue} = action.payload;
            state.filter[filterProperty].value = filterPropertyValue;
        },
        toggleFilter: (state, action)=>{
            const {filterProperty} = action.payload;
            let filterPropertyOpen = state.filter[filterProperty].open
            state.filter[filterProperty].open = !filterPropertyOpen 
        }
    }
})

export const { toggleMobileMenu, addToCart, setFilterValue, toggleFilter } = uiSlice.actions;

export default uiSlice.reducer;