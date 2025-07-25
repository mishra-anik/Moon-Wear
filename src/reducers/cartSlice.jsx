import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: storedCart,
	},
	reducers: {
		addToCart: (state, action) => {
			state.cartItems.push(action.payload);
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload
			);
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
	},
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
