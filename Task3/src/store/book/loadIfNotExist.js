import { bookSlice } from ".";
import { books } from "../../constants/mock";
import { prepareData, serverIP, Wait } from "../utils";
import { selectBookById, selectBookModule, selectIsBookLoading } from "./selectors";

export const loadBooksIfNotExist = (categoryId) => async (dispatch, getState) =>
{
	if (selectBookModule(getState())?.categoryIds?.indexOf(categoryId) >= 0) return;
	if (selectIsBookLoading(getState())) return;

	dispatch(bookSlice.actions.startLoading());

	let data;
	if (serverIP)
	{
		const res = await fetch(serverIP + "/book?" + new URLSearchParams({ categoryId }));
		if (!res.ok) return dispatch(bookSlice.actions.failLoading());
		data = prepareData(await res.json());
	}
	else
	{
		await Wait();
		data = prepareData(books.filter(book => book.categoryId === categoryId));
	}

	data.categoryId = categoryId;
	dispatch(bookSlice.actions.successLoading(data));
}

export const loadBookById = (id) => async (dispatch, getState) =>
{
	if (selectBookById(id)(getState())) return;
	if (selectIsBookLoading(getState())) return;

	dispatch(bookSlice.actions.startLoading());

	if (serverIP)
	{
		const res = await fetch(serverIP + "/book?" + new URLSearchParams({ id }));
		if (!res.ok) return dispatch(bookSlice.actions.failLoading());

		const book = await res.json();
		dispatch(bookSlice.actions.successLoading(prepareData([book])));
	}
	else
	{
		await Wait();
		const book = books.filter(book => book.id === id);
		if (book) dispatch(bookSlice.actions.successLoading(prepareData(book)));
		else dispatch(bookSlice.actions.failLoading());
	}
}