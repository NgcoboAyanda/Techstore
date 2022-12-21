import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const initialState = {
    homePage:{
        status: 'idle',
        products: {
            laptops: [
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "1",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "2",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "3",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "4",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "5",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "6",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "7",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "8",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "9",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
            ],
            desktops: [
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "1",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "2",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "3",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "4",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "5",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "6",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "7",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "8",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "9",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
            ],
            phones: [
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "1",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "2",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "3",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "4",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "5",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "6",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "7",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "8",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "9",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
            ],
            tablets: [
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "1",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "2",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "3",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "4",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "5",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "6",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "7",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "8",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "9",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
            ],
            accessories: [
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "1",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "2",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "3",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "4",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "5",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "6",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "7",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "8",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "9",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
            ],
            consoles: [
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "1",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "2",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "3",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "4",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "5",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "6",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "7",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "8",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
                {
                    'name': "Polaroid 16MP Waterproof Digital Camera",
                    'id': "9",
                    'price': "49.99",
                    'image': "https://target.scene7.com/is/image/Target/GUEST_06ec4798-d497-4f3e-ac92-110f47d87cac?qlt=85&fmt=webp&hei=199&wid=199"
                },
            ]
        }
    },
    categoryPage:{
        status: 'idle',
        products: []
    },
    productPage:{
        status: 'idle',
        product: {}
    },
}

const apiBaseUrl = 'http://localhost:8000'

export const fetchHomePageProducts = createAsyncThunk(
    'pages/fetchHomePageProducts',
    async (nothing, thunkAPI) => {
        const state = thunkAPI.getState();
        const {products} = state.pages.homePage;
        let categories = Object.keys(products);
        categories.forEach( async (category) => {
            let response = await fetch(`${apiBaseUrl}/shop/${category}/`);
            if(response.status === 200){
                let data = await response.json();
                let products = data.results.splice(0,7);//Get 7 products
                const {addHomePageProducts} = pagesSlice.actions;
                thunkAPI.dispatch(
                    addHomePageProducts({category, products})
                )
            }
        });
    }
)

const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers:{
        //homepage
        addHomePageProducts: (state, action) => {
            const {products, category} = action.payload;
            return {...state, homePage: {...state.homePage, products:{...state.homePage.products, [category]: products}}};
        },
    },
    extraReducers:{
        
    }
})

export const { addHomePageProducts } = pagesSlice.actions;

export default pagesSlice.reducer;