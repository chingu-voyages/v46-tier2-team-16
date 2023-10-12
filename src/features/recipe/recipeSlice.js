import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { TASTY_RAPID_API_URL, TASTY_RAPID_API_KEY, TASTY_RAPID_API_HOST } from '../../constants/apiData';

const initialState = {
    loading: false,
    recipes: [],
    error: ''
}

const options = {
    method: 'GET',
    url: TASTY_RAPID_API_URL,
    params: {
        from: '0',
        size: '20',
        tags: 'under_30_minutes'
    },
    headers: {
        'X-RapidAPI-Key': TASTY_RAPID_API_KEY,
        'X-RapidAPI-Host': TASTY_RAPID_API_HOST
    }
}

export const fetchRecipes = createAsyncThunk('recipe/fetchRecipes', async () => {
    return await axios
        .request(options)
        .then(response => response.data)
})

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchRecipes.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.loading = false
            state.recipes = action.payload
            state.error = ''
        })
        builder.addCase(fetchRecipes.rejected, (state, action) => {
            state.loading = false
            state.recipes = []
            state.error = action.error.message
        })
    }
})

export default recipeSlice.reducer