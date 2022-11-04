import { categorySlice } from ".";
import { categories } from "../../constants/mock";
import { prepareData, serverIP, Wait } from "../utils";
import { selectCategories, selectIsCategoryLoading } from "./selectors";

export async function loadCategoriesIfNotExist(dispatch, getState)
{
	if (selectCategories(getState()).length !== 0) return;
	if (selectIsCategoryLoading(getState())) return;

	dispatch(categorySlice.actions.startLoading());
	let data;
	if (serverIP)
	{
		const res = await fetch(serverIP + "/category");
		if (!res.ok) return dispatch(categorySlice.actions.failLoading());
		data = await res.json();
	}
	else
	{
		await Wait();
		data = categories;
	}
	dispatch(categorySlice.actions.successLoading(prepareData(data)))
}