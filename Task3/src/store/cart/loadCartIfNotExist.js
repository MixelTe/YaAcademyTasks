import { loadBookById } from "../book/loadIfNotExist";
import { selectCartBookIds } from "./selectors";

export function loadCartIfNotExist(dispatch, getState)
{
	const items = selectCartBookIds(getState());
	items.forEach(item => loadBookById(item)(dispatch, getState));
}
