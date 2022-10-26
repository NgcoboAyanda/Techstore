import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobileMenuIsOpen: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMobileMenu: (state, action)=>{
            return {...state, mobileMenuIsOpen: !state.mobileMenuIsOpen};
        }
    }
})

export const { toggleMobileMenu } = uiSlice.actions;

export default uiSlice.reducer;