import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

export const bookSlice = createSlice({
	name: "book",
	initialState: {
		entities: {},
		ids: [],
		categoryIds: [],
		status: Statuses.idle,
	},
	reducers: {
		startLoading: (state, action) => { state.status = Statuses.inProgress; },
		successLoading: (state, action) =>
		{
			state.status = Statuses.success;
			state.entities = { ...state.entities, ...action.payload.entities };
			state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
			state.categoryIds.push(action.payload.categoryId);
		},
		failLoading: (state, action) => { state.status = Statuses.failed; }
	}
});