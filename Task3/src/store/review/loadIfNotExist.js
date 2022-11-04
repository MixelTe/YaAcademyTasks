import { reviewSlice } from ".";
import { reviews } from "../../constants/mock";
import { serverIP, Wait } from "../utils";
import { selectReviewById } from "./selectors";

export const loadReviewById = (id) => async (dispatch, getState) =>
{
	if (selectReviewById(id)(getState())) return;

	dispatch(reviewSlice.actions.startLoading(id));

	if (serverIP)
	{
		const res = await fetch(serverIP + "/review?" + new URLSearchParams({ id }));
		if (!res.ok) return dispatch(reviewSlice.actions.failLoading());
		const review = await res.json();
		dispatch(reviewSlice.actions.successLoading(review));
	}
	else
	{
		await Wait();
		const review = reviews.filter(review => review.id === id)[0];
		if (review) dispatch(reviewSlice.actions.successLoading(review));
		else dispatch(reviewSlice.actions.failLoading(id));
	}
}