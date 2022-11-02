import { reviewSlice } from ".";
import { reviews } from "../../constants/mock";
import { prepareData, Wait } from "../utils";
import { selectReviewById } from "./selectors";

export const loadReviewById = (id) => async (dispatch, getState) =>
{
	if (selectReviewById(id)(getState())) return;

	dispatch(reviewSlice.actions.startLoading());
	await Wait();
	const review = reviews.filter(review => review.id === id);
	if (review) dispatch(reviewSlice.actions.successLoading(prepareData(review)));
	else dispatch(reviewSlice.actions.failLoading());
}