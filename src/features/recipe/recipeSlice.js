// import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fetchAll } from './APIcalls';

const TASTY_RAPID_API_BASE_URL = import.meta.env.VITE_TASTY_RAPID_API_BASE_URL;
const TASTY_RAPID_API_KEY = import.meta.env.VITE_TASTY_RAPID_API_KEY;
const TASTY_RAPID_API_HOST = import.meta.env.VITE_TASTY_RAPID_API_HOST;

export const recipeSlice = createApi({
    reducerPath: "recipeSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: TASTY_RAPID_API_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', TASTY_RAPID_API_KEY)
            headers.set('X-RapidAPI-Host', TASTY_RAPID_API_HOST)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getAllRecipes: builder.query({
            query: () => "recipes/list",
        }),
        getListSimilarities: builder.query({
            query: () => "recipes/list-similarities"
        }),
        getTagsList: builder.query({
            query: () => "tags/list"
        }),
        //using parameters
        // getExampleUsingParameters: builder.query({
        //     query: (recipeId) => `tags/list/search?q=${recipeId}`
        // }),
    }),
});

// export const { useGetAllRecipesQuery } = recipeSlice;
export const { useGetAllRecipesQuery, useGetListSimilaritiesQuery, useGetTagsListQuery } = recipeSlice;

// using parameters
// export const { useGetAllRecipesQuery, useGetListSimilaritiesQuery, useGetTagsListQuery, useGetExampleUsingParametersQuery } = recipeSlice;

// -----------------------------

// const initialState = {
//     loading: false,
//     recipes: [],
//     error: '',
// };

// const options = {
//     method: 'GET',
//     url: TASTY_RAPID_API_URL,
//     params: {
//         from: '0',
//         size: '20',
//         tags: 'under_30_minutes',
//     },
//     headers: {
//         'X-RapidAPI-Key': TASTY_RAPID_API_KEY,
//         'X-RapidAPI-Host': TASTY_RAPID_API_HOST,
//     },
// };

// export const fetchRecipes = createAsyncThunk('recipe/fetchRecipes', () => {
//     return axios.request(options).then((response) => response.data);
// });

export const fetchRecipes = createAsyncThunk('recipe/fetchRecipes', fetchAll);

// const recipeSlice = createSlice({
//     name: 'recipe',
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(fetchRecipes.pending, (state) => {
//             state.loading = true;
//         });
//         builder.addCase(fetchRecipes.fulfilled, (state, action) => {
//             state.loading = false;
//             state.recipes = action.payload;
//             state.error = '';
//         });
//         builder.addCase(fetchRecipes.rejected, (state, action) => {
//             state.loading = false;
//             state.recipes = [];
//             state.error = action.error.message;
//         });
//     },
// });

// export default recipeSlice.reducer;
