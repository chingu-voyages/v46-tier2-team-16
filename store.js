import { configureStore } from '@reduxjs/toolkit';
import CardReducer from './src/redux/CardReducer';

export default configureStore({
    reducer: {
        card: CardReducer,
    },
});
