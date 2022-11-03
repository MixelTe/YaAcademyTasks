import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		entities: {},
		ids: [],
		statusByUser: {},
	},
	reducers: {
		startLoading: (state, action) => { state.statusByUser[action.payload] = Statuses.inProgress; },
		successLoading: (state, action) =>
		{
			state.status = Statuses.success;
			state.entities[action.payload.id] = action.payload;
			state.ids.push(action.payload.id);
			state.statusByUser[action.payload.id] = Statuses.success;
		},
		failLoading: (state, action) => { state.statusByUser[action.payload] = Statuses.failed; }
	}
});