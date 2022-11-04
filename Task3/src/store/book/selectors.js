import { Statuses } from "../../constants/statuses";

export const selectBookModule = state => state.book;
export const selectBooks = state => Object.values(selectBookModule(state).entities);
export const selectBooksByCategoryId = categoryId => state => selectBooks(state).filter(book => book.categoryId === categoryId);
export const selectBookById = id => state => selectBookModule(state).entities[id];
export const selectIsBookLoading = state => selectBookModule(state).status === Statuses.inProgress;
export const selectIsBookNotLoaded = state => selectBookModule(state).status === Statuses.inProgress || selectBookModule(state).status === Statuses.idle;
