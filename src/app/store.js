import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { recipeSlice } from '../features/recipe/recipeSlice';
// import recipeReducer from '../features/recipe/recipeSlice';
import recipeSliceByIdReducer from '../features/recipe/recipeSliceById';
import relatedRecipesReducer from '../features/recipe/relatedRecipesSlice';

const store = configureStore({
    reducer: {
        [recipeSlice.reducerPath]: recipeSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeSlice.middleware),
});

setupListeners(store.dispatch);

// const store = configureStore({
//     reducer: {
//         recipe: recipeReducer,
//         recipeById: recipeSliceByIdReducer,
relatedRecipes: relatedRecipesReducer,
    },
// });

export default store;
