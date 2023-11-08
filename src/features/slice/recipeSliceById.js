import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOne } from '../apiCalls/APIcalls';

// recipeById:null so we know in the component when/if the data is fetched

const initialState = {
    loading: false,
    recipeById: null,
    error: '',
};

export const fetchRecipeById = createAsyncThunk('recipe/fetchRecipeById', fetchOne);

const recipeSliceById = createSlice({
    name: 'recipeById',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRecipeById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRecipeById.fulfilled, (state, action) => {
            console.log({ state, action });
            state.loading = false;
            state.recipeById = action.payload;
            state.error = '';
        });
        builder.addCase(fetchRecipeById.rejected, (state, action) => {
            state.loading = false;
            state.recipeById = null;
            state.error = action.error.message;
        });
    },
});

export default recipeSliceById.reducer;