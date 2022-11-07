import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobileMenuIsOpen: false,
    cart: []
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
        }
    }
})

export const { toggleMobileMenu, addToCart } = uiSlice.actions;

export default uiSlice.reducer;