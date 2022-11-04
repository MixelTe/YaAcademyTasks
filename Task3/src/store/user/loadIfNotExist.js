import { userSlice } from ".";
import { users } from "../../constants/mock";
import { serverIP, Wait } from "../utils";
import { selectUserById } from "./selectors";

export const loadUserById = (id) => async (dispatch, getState) =>
{
	if (selectUserById(id)(getState())) return;

	dispatch(userSlice.actions.startLoading(id));

	if (serverIP)
	{
		const res = await fetch(serverIP + "/user?" + new URLSearchParams({ id }));
		if (!res.ok) return dispatch(userSlice.actions.failLoading());
		const review = await res.json();
		dispatch(userSlice.actions.successLoading(review));
	}
	else
	{
		await Wait();
		const user = users.filter(user => user.id === id)[0];
		if (user) dispatch(userSlice.actions.successLoading(user));
		else dispatch(userSlice.actions.failLoading(id));
	}
}