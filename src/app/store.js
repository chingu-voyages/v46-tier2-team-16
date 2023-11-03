import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { recipeSlice } from '../features/recipe/recipeSlice';
// import recipeReducer from '../features/recipe/recipeSlice';

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
//     },
// });

export default store;
