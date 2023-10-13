<<<<<<< HEAD
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const TASTY_RAPID_API_URL = import.meta.env.VITE_TASTY_RAPID_API_URL;
const TASTY_RAPID_API_KEY = import.meta.env.VITE_TASTY_RAPID_API_KEY;
const TASTY_RAPID_API_HOST = import.meta.env.VITE_TASTY_RAPID_API_HOST;

// import { TASTY_RAPID_API_URL, TASTY_RAPID_API_KEY, TASTY_RAPID_API_HOST } from '../../constants/apiData';
=======
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const TASTY_RAPID_API_URL = import.meta.env.VITE_TASTY_RAPID_API_URL
const TASTY_RAPID_API_KEY = import.meta.env.VITE_TASTY_RAPID_API_KEY
const TASTY_RAPID_API_HOST = import.meta.env.VITE_TASTY_RAPID_API_HOST
>>>>>>> faf6a87 (Add env)

const initialState = {
    loading: false,
    recipes: [],
    error: '',
};

const options = {
    method: 'GET',
    url: TASTY_RAPID_API_URL,
    params: {
        from: '0',
        size: '20',
        tags: 'under_30_minutes',
    },
    headers: {
        'X-RapidAPI-Key': TASTY_RAPID_API_KEY,
        'X-RapidAPI-Host': TASTY_RAPID_API_HOST,
    },
};

export const fetchRecipes = createAsyncThunk('recipe/fetchRecipes', () => {
    return axios.request(options).then((response) => response.data);
});


const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.loading = false;
            state.recipes = action.payload;
            state.error = '';
        });
        builder.addCase(fetchRecipes.rejected, (state, action) => {
            state.loading = false;
            state.recipes = [];
            state.error = action.error.message;
        });
    },
});

export default recipeSlice.reducer;
