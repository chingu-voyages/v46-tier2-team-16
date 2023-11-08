import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAll } from '../apiCalls/APIcalls';

const initialState = {
    loading: false,
    recipes: [],
    error: '',
};

export const fetchRecipes = createAsyncThunk('recipe/fetchRecipes', fetchAll);

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