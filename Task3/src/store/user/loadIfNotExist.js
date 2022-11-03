import { userSlice } from ".";
import { users } from "../../constants/mock";
import { prepareData, Wait } from "../utils";
import { selectUserById } from "./selectors";

export const loadUserById = (id) => async (dispatch, getState) =>
{
	if (selectUserById(id)(getState())) return;

	dispatch(userSlice.actions.startLoading(id));
	await Wait();
	const user = users.filter(user => user.id === id)[0];
	if (user) dispatch(userSlice.actions.successLoading(user));
	else dispatch(userSlice.actions.failLoading(id));
}