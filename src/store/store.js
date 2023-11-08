import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../features/slice/recipeSlice';
import recipeSliceByIdReducer from '../features/slice/recipeSliceById';
import relatedRecipesReducer from '../features/slice/relatedRecipesSlice';
// import recipeReducer from '../features/recipe/recipeSlice';
// import recipeSliceByIdReducer from '../features/recipe/recipeSliceById';
// import relatedRecipesReducer from '../features/recipe/relatedRecipesSlice';

const store = configureStore({
    reducer: {
        recipe: recipeReducer,
        recipeById: recipeSliceByIdReducer,
        relatedRecipes: relatedRecipesReducer,
    },
});

export default store;