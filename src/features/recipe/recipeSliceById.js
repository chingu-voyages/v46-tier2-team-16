import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const TASTY_RAPID_API_URL = import.meta.env.VITE_TASTY_RAPID_API_URL;
const TASTY_RAPID_API_KEY = import.meta.env.VITE_TASTY_RAPID_API_KEY;
const TASTY_RAPID_API_HOST = import.meta.env.VITE_TASTY_RAPID_API_HOST;

const initialState = {
  loading: false,
  recipe: {},
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


export const fetchRecipeById = createAsyncThunk('recipe/fetchRecipes', async (id) => {
  return await axios.request(options).then((response) => {
    if (response && response.data && response.data.results && response.data.results.length > 0) {
      const product = response && response.data && response.data.results && response.data.results.find((item) => item.id === +id)
      return product
    }
    return {}
  });
});


const recipeSliceById = createSlice({
  name: 'recipeById',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRecipeById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecipeById.fulfilled, (state, action) => {
      state.loading = false;
      state.recipe = action.payload;
      state.error = '';
    });
    builder.addCase(fetchRecipeById.rejected, (state, action) => {
      state.loading = false;
      state.recipe = {};
      state.error = action.error.message;
    });
  },
});

export default recipeSliceById.reducer;
