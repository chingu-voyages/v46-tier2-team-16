import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRelated } from '../apiCalls/APIcalls';

// relatedRecipe:null so we know in the component when/if the data is fetched

const initialState = {
    loading: false,
    relatedRecipes: null,
    error: '',
};

export const fetchRelatedRecipe = createAsyncThunk('fetchRelatedRecipe', fetchRelated);

const relatedRecipesSlice = createSlice({
    name: 'relatedRecipes',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedRecipe.fulfilled, (state, action) => {
            state.loading = false;
            state.relatedRecipes = action.payload;
            state.error = '';
        });
    },
});

export default relatedRecipesSlice.reducer;