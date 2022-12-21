import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiBaseUrl = 'http://localhost:8000';

const initialState = {
    status: 'idle',
    categories: {
        all: {
            'id': "0",
            products: []
        }
        , 
        laptops: {
            'id': "1",
            'image': "https://www.lenovo.com/medias/lenovo-laptops-v-series-v15-gen2-15inch-amd-series.png?context=bWFzdGVyfHJvb3R8NTY1NDF8aW1hZ2UvcG5nfGg3Ny9oZjQvMTQxOTE1MTc4NTk4NzAucG5nfDk4N2Y2Y2M2ZTcxNDdkNTY3NWVlYTkyMTJmMjNiOTFhNjJiNTA1OTFlZWZhN2IxNTllMTU5NjQ0Y2IwMmY3NTU",
            products: []
        }, 
        desktops: {
            'id': "2",
            'image': "https://www.lenovo.com/medias/ThinkCentre-hero-splitter.png?context=bWFzdGVyfHJvb3R8NzEwOTN8aW1hZ2UvcG5nfGhlOS9oMTUvMTA4MDQ0OTE1NTA3NTAucG5nfGE5Mzc1YTI4OGE2NGQ3NGNjNDYxZTZlMjkzODNlZTBiYzdiZGRmZDRhMDRjODQ3NDEyZTY5Y2ZjNDVkYzZkYWE&w=1920",
            products: []
        },
        consoles: {
            'id': "3",
            'image': "https://target.scene7.com/is/image/Target/Cat_Nav_VideoGames-201215-1608014929542?wid=167&hei=167&qlt=100&fmt=webp",
            products: []
        },  
        phones: {
            'id': "4",
            'image': "https://images.samsung.com/is/image/samsung/p6pim/za/feature/163965752/za-feature-simple--yet-absolute-531579324",
            products: []
        }, 
        tablets: {
            'id': "5",
            'image': "https://www.lenovo.com/medias/lenovo%E2%80%90tablet%E2%80%90lenovo-tab-p12%E2%80%90pro-series-front.png?context=bWFzdGVyfHJvb3R8MTAzMTU5fGltYWdlL3BuZ3xoYTgvaGM1LzEyNjgwMzcyMDI3NDIyLnBuZ3w0ZDlmNWEyNTMyNDRlMjk4NDlkMmFjODA3MjI4Y2QxYmUyZGQ4YjE2NTZkYzI2MjA2MTA2Y2ZhMjg4OWQ3ZDc3",
            products: []
        }, 
        cameras: {
            'id': "6",
            'image': "https://target.scene7.com/is/image/Target/5xtez-cameras-camcorders-QUIVER-190507-1557249221821?wid=167&hei=167&qlt=100&fmt=webp",
            products: []
        }, 
        accessories: {
            'id': "7",
            'image': "https://static.lenovo.com/ww/img/accessories/thinkpad-x1-anc-headphones/gallery/lenovo-accessory-thinkpad-x1-anc-headphones-gallery-3.jpg",
            products: []
        } 
    },
    currentProduct: {}
}

const requestConfig = {
    method: "GET",
    headers: {
        accept: "application/json",
        'Content-Type': "application/json",
    },
}

export const fetchCategoryProducts = createAsyncThunk(
    'data/fetchCategory',
    async (categoryName, thunkAPI) => {
        const response = await fetch(`${apiBaseUrl}/shop/${categoryName}/`, {...requestConfig});
        if(response.status === 200){
            const res = await response.json()
            const { updateProducts } = dataSlice.actions;
            thunkAPI.dispatch(updateProducts({categoryName, products: res.results}));
        }
    }
)

export const fetchProduct = createAsyncThunk(
    'data/fetchProduct',
    async ({categoryName, productId}, thunkAPI) => {
        const response = await fetch(`${apiBaseUrl}/shop/${categoryName}/${productId}/`)
        if (response.status === 200){
            const res = await response.json();
            const {setCurrentProduct} = dataSlice.actions;
            thunkAPI.dispatch(
                setCurrentProduct({currentProduct: res})
            )
        }
    }
)

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        //fetch category products
        updateProducts: (state, action)=> {
            const {categoryName, products} = action.payload;
            state.categories[categoryName].products = products
        },
        //Current Product
        setCurrentProduct: (state, action) => {
            const {currentProduct} = action.payload;
            return {...state, currentProduct};
        },
        clearCurrentProduct: (state, action) => {
            return {...state, currentProduct: {}};
        }
    },
    extraReducers: builder => {
        builder
        //fetchCategoryProducts
        .addCase(fetchCategoryProducts.pending, (state, action) => {
            return {...state, status: 'loading'}
        })
        .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
            return { ...state, status: 'idle' }
        })
    }
})

export const { updateProducts, clearCurrentProduct } = dataSlice.actions;

export default dataSlice.reducer;