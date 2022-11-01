import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobileMenuIsOpen: false,
    categories: [ 
        { 
            'name': "laptops",
            'image': "https://www.lenovo.com/medias/lenovo-laptops-v-series-v15-gen2-15inch-amd-series.png?context=bWFzdGVyfHJvb3R8NTY1NDF8aW1hZ2UvcG5nfGg3Ny9oZjQvMTQxOTE1MTc4NTk4NzAucG5nfDk4N2Y2Y2M2ZTcxNDdkNTY3NWVlYTkyMTJmMjNiOTFhNjJiNTA1OTFlZWZhN2IxNTllMTU5NjQ0Y2IwMmY3NTU" 
        }, 
        { 
            'name': "desktops",
            'image': "https://www.lenovo.com/medias/ThinkCentre-hero-splitter.png?context=bWFzdGVyfHJvb3R8NzEwOTN8aW1hZ2UvcG5nfGhlOS9oMTUvMTA4MDQ0OTE1NTA3NTAucG5nfGE5Mzc1YTI4OGE2NGQ3NGNjNDYxZTZlMjkzODNlZTBiYzdiZGRmZDRhMDRjODQ3NDEyZTY5Y2ZjNDVkYzZkYWE&w=1920"  
        },
        { 
            'name': "consoles",
            'image': "https://target.scene7.com/is/image/Target/Cat_Nav_VideoGames-201215-1608014929542?wid=167&hei=167&qlt=100&fmt=webp"  
        },  
        { 
            'name': "phones",
            'image': "https://images.samsung.com/is/image/samsung/p6pim/za/feature/163965752/za-feature-simple--yet-absolute-531579324"  
        }, 
        { 
            'name': "tablets",
            'image': "https://www.lenovo.com/medias/lenovo%E2%80%90tablet%E2%80%90lenovo-tab-p12%E2%80%90pro-series-front.png?context=bWFzdGVyfHJvb3R8MTAzMTU5fGltYWdlL3BuZ3xoYTgvaGM1LzEyNjgwMzcyMDI3NDIyLnBuZ3w0ZDlmNWEyNTMyNDRlMjk4NDlkMmFjODA3MjI4Y2QxYmUyZGQ4YjE2NTZkYzI2MjA2MTA2Y2ZhMjg4OWQ3ZDc3"  
        }, 
        { 
            'name': "cameras",
            'image': "https://target.scene7.com/is/image/Target/5xtez-cameras-camcorders-QUIVER-190507-1557249221821?wid=167&hei=167&qlt=100&fmt=webp"  
        }, 
        { 
            'name': "accessories",
            'image': "https://static.lenovo.com/ww/img/accessories/thinkpad-x1-anc-headphones/gallery/lenovo-accessory-thinkpad-x1-anc-headphones-gallery-3.jpg"  
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