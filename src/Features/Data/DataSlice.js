import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiBaseUrl = 'https://techstoreapi.onrender.com';

const initialState = {
    status: 'idle',
    categories: {
        laptops: {
            'id': "1",
            'image': "https://www.lenovo.com/medias/lenovo-laptops-v-series-v15-gen2-15inch-amd-series.png?context=bWFzdGVyfHJvb3R8NTY1NDF8aW1hZ2UvcG5nfGg3Ny9oZjQvMTQxOTE1MTc4NTk4NzAucG5nfDk4N2Y2Y2M2ZTcxNDdkNTY3NWVlYTkyMTJmMjNiOTFhNjJiNTA1OTFlZWZhN2IxNTllMTU5NjQ0Y2IwMmY3NTU"
        }, 
        desktops: {
            'id': "2",
            'image': "https://www.lenovo.com/medias/ThinkCentre-hero-splitter.png?context=bWFzdGVyfHJvb3R8NzEwOTN8aW1hZ2UvcG5nfGhlOS9oMTUvMTA4MDQ0OTE1NTA3NTAucG5nfGE5Mzc1YTI4OGE2NGQ3NGNjNDYxZTZlMjkzODNlZTBiYzdiZGRmZDRhMDRjODQ3NDEyZTY5Y2ZjNDVkYzZkYWE&w=1920"
        },
        consoles: {
            'id': "3",
            'image': "https://target.scene7.com/is/image/Target/Cat_Nav_VideoGames-201215-1608014929542?wid=167&hei=167&qlt=100&fmt=webp"
        },  
        phones: {
            'id': "4",
            'image': "https://images.samsung.com/is/image/samsung/p6pim/za/feature/163965752/za-feature-simple--yet-absolute-531579324"
        }, 
        tablets: {
            'id': "5",
            'image': "https://www.lenovo.com/medias/lenovo%E2%80%90tablet%E2%80%90lenovo-tab-p12%E2%80%90pro-series-front.png?context=bWFzdGVyfHJvb3R8MTAzMTU5fGltYWdlL3BuZ3xoYTgvaGM1LzEyNjgwMzcyMDI3NDIyLnBuZ3w0ZDlmNWEyNTMyNDRlMjk4NDlkMmFjODA3MjI4Y2QxYmUyZGQ4YjE2NTZkYzI2MjA2MTA2Y2ZhMjg4OWQ3ZDc3"
        },
        accessories: {
            'id': "7",
            'image': "https://static.lenovo.com/ww/img/accessories/thinkpad-x1-anc-headphones/gallery/lenovo-accessory-thinkpad-x1-anc-headphones-gallery-3.jpg"
        } 
    },
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
    }
})

export default dataSlice.reducer;