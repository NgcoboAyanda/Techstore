import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobileMenuIsOpen: false,
    categories: [ 
        { 
            'name': "laptops",
            'image': "https://consumer.huawei.com/content/dam/huawei-cbg-site/me-africa/za/mkt/pdp/pc/matebook-x-pro-2021/matebook-x-pro.png" 
        }, 
        { 
            'name': "desktops",
            'image': "https://i.dell.com/is/image/DellContent/content/dam/images/products/desktops-and-all-in-ones/xps/8950/xs8950-xsy-11023rf-bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=355&qlt=100,1&resMode=sharp2&size=355,402&chrss=full"  
        }, 
        { 
            'name': "phones",
            'image': "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/model-banner/img-0904/mate-xs2.png"  
        }, 
        { 
            'name': "tablets",
            'image': "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/more-products/matepad-t8.png"  
        }, 
        { 
            'name': "accessories",
            'image': "https://consumer.huawei.com/content/dam/huawei-cbg-site/me-africa/za/mkt/plp/headphones/img.png"  
        } 
    ]
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