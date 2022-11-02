export const selectCategoryModule = state => state.category;
export const selectCategories = state => Object.values(selectCategoryModule(state).entities);
export const selectCategoryById = id => state => selectCategoryModule(state).entities[id];
