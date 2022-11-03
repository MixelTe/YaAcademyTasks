import { Statuses } from "../../constants/statuses";

export const selectReviewModule = state => state.review;
export const selectReviews = state => Object.values(selectReviewModule(state).entities);
export const selectReviewById = id => state => selectReviewModule(state).entities[id];
export const selectIsReviewLoading = id => state => selectReviewModule(state).statusByReview[id] === Statuses.inProgress;
