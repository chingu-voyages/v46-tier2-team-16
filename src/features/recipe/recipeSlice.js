import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipes } from './APIcalls';

const initialState = {
    loading: false,
    recipes: [],
    error: '',
};

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
