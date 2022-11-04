import { Statuses } from "../../constants/statuses";

export const selectCategoryModule = state => state.category;
export const selectCategories = state => Object.values(selectCategoryModule(state).entities);
export const selectCategoryById = id => state => selectCategoryModule(state).entities[id];
export const selectIsCategoryLoading = state => selectCategoryModule(state).status === Statuses.inProgress;
export const selectIsCategoryNotLoaded = state => selectCategoryModule(state).status === Statuses.inProgress || selectCategoryModule(state).status === Statuses.idle;
