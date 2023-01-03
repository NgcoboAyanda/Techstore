import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const apiBaseUrl = 'https://techstoreapi.onrender.com'; 

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
                let products = data.results.splice(0,6);//Get 6 products
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
    async ( { currentCategory }, thunkAPI) => {
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

export const fetchProduct = createAsyncThunk(
    'pages/fetchProduct',
    async ({ categoryName, productId }, thunkAPI) => {
        let response = await fetch(`${apiBaseUrl}/shop/${categoryName}/${productId}/`)
        if (response.status === 200){
            const product = await response.json();
            const {setProductPageProduct} = pagesSlice.actions;
            thunkAPI.dispatch(
                setProductPageProduct({product})
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
        setCategoryPageCategory: (state, action) => {
            const {categoryName} = action.payload;
            return {...state, categoryPage: {...state.categoryPage, currentCategory: categoryName, categoryProducts: [] }};
        },
        setCategoryPageProducts: (state, action) => {
            const {products} = action.payload;
            return {...state, categoryPage: {...state.categoryPage, categoryProducts: products } };
        },
        //productpage
        setProductPageProduct: (state, action) => {
            const {product} = action.payload;
            return {...state, productPage:{...state.productPage, product}};
        },
        clearProductPageProduct: (state, action) => {
            return {...state, productPage: {...state.productPage, product:{}}};
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

export const { addHomePageProducts, setCategoryPageCategory, clearProductPageProduct } = pagesSlice.actions;

export default pagesSlice.reducer;