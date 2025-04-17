import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        incrementQuantity: (state, action) => {
         state.cartItems.push(action.payload)
        },
        decrementQuantity: (state, action) => {
            const idToRemove = action.payload;
            state.cartItems = state.cartItems.filter(item => item !== idToRemove);
        }
    }
});
export const { incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;