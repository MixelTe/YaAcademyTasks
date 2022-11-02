import { bookSlice } from ".";
import { books } from "../../constants/mock";
import { prepareData, Wait } from "../utils";
import { selectBookById, selectBookModule, selectBooks } from "./selectors";

export const loadBooksIfNotExist = (categoryId) => async (dispatch, getState) =>
{
	if (selectBookModule(getState())?.categoryIds?.indexOf(categoryId) >= 0) return;

	dispatch(bookSlice.actions.startLoading());
	await Wait();
	const data = prepareData(books.filter(book => book.categoryId === categoryId));
	data.categoryId = categoryId;

	dispatch(bookSlice.actions.successLoading(data));
}

export const loadBookById = (id) => async (dispatch, getState) =>
{
	if (selectBookById(id)(getState())) return;

	dispatch(bookSlice.actions.startLoading());
	await Wait();
	const book = books.filter(book => book.id === id);
	if (book) dispatch(bookSlice.actions.successLoading(prepareData(book)));
	else dispatch(bookSlice.actions.failLoading());
}