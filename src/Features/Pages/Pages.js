import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const initialState = {
    homePage:{
        status: 'idle',
        products: {
            laptops: [],
            desktops: [],
            consoles: [],
            phones: [],
            tablets: [],
            accessories: []
        }
    },
    categoryPage:{
        status: 'idle',
        currentCategory: "",
        categoryProducts: []
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

export const fetchCategoryPageProducts = createAsyncThunk(
    'pages/fetchCategoryPageProducts',
    async (obj, thunkAPI) => {
        console.log(obj)
        const {currentCategory} = obj;
        let response = await fetch(`${apiBaseUrl}/shop/${currentCategory}/`);
        if(response.status === 200){
            response = await response.json();
            let products = response.results;
            const {setCategoryPageProducts} = pagesSlice.actions;
            thunkAPI.dispatch(
                setCategoryPageProducts({products})
            )
        }
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
        //categorypage
        setCurrentCategory: (state, action) => {
            const {categoryName} = action.payload;
            return {...state, categoryPage: {...state.categoryPage, currentCategory: categoryName, categoryProducts: [] }};
        },
        setCategoryPageProducts: (state, action) => {
            const {products} = action.payload;
            return {...state, categoryPage: {...state.categoryPage, categoryProducts: products } };
        }
    },
    extraReducers: (builder) => {
        builder
        //homepage
        .addCase(fetchHomePageProducts.pending, (state, action)=>{
            return { ...state, homePage:{...state.homePage, status:"loading"} };
        })
        .addCase(fetchHomePageProducts.fulfilled, (state, action)=>{
            return { ...state, homePage:{...state.homePage, status:"idle"} };
        })
        //categoryPage
        .addCase(fetchCategoryPageProducts.pending, (state, action)=>{
            return { ...state, categoryPage:{...state.categoryPage, status:"loading"} };
        })
        .addCase(fetchCategoryPageProducts.fulfilled, (state, action)=>{
            return { ...state, categoryPage:{...state.categoryPage, status:"idle"} };
        })
    }
})

export const { addHomePageProducts, setCurrentCategory } = pagesSlice.actions;

export default pagesSlice.reducer;