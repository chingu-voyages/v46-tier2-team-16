import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from '../features/recipe/recipeSlice'

const store = configureStore({
    reducer: {
        recipe: recipeReducer
    }
})

export default store