import { categorySlice } from ".";
import { categories } from "../../constants/mock";
import { prepareData, Wait } from "../utils";
import { selectCategories } from "./selectors";

export async function loadCategoriesIfNotExist(dispatch, getState)
{
	if (selectCategories(getState())?.length != 0) return;

	dispatch(categorySlice.actions.startLoading());
	await Wait();
	dispatch(categorySlice.actions.successLoading(prepareData(categories)))
}