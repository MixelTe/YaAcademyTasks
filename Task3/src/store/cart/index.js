import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		"1": 1,
		"2": 1,
		"3": 1,
		"4": 1,
	},
	reducers: {
		addItem: (state, action) =>
		{
			state[action.payload] = (state[action.payload] || 0) + 1;
		},
		removeItem: (state, action) =>
		{
			state[action.payload] = (state[action.payload] || 0) - 1;
			state[action.payload] = state[action.payload] > 0 ? state[action.payload] : undefined;
		}
	}
})