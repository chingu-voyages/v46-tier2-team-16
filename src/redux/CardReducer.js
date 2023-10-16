import { createSlice } from '@reduxjs/toolkit';

export const CardSlice = createSlice({
    name: 'card',
    initialState: {
        card: [],
    },
    reducers: {
        selectCard: (state, action) => {
            const itemCard = state.card.find((item) => item.id === action.payload.id);
            if (itemCard) {
                state.card.push(`/recipe/${action.payload.id}`);
            }
        },
    },
});
