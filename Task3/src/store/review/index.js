import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

export const reviewSlice = createSlice({
	name: "review",
	initialState: {
		entities: {},
		ids: [],
		statusByReview: {},
	},
	reducers: {
		startLoading: (state, action) => { state.statusByReview[action.payload] = Statuses.inProgress; },
		successLoading: (state, action) =>
		{
			state.status = Statuses.success;
			state.entities[action.payload.id] = action.payload;
			state.ids.push(action.payload.id);
			state.statusByReview[action.payload.id] = Statuses.success;
		},
		failLoading: (state, action) => { state.statusByReview[action.payload] = Statuses.failed; }
	}
});