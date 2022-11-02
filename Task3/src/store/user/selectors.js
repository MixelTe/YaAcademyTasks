import { Statuses } from "../../constants/statuses";

export const selectUserModule = state => state.user;
export const selectUsers = state => Object.values(selectUserModule(state).entities);
export const selectUserById = id => state => selectUserModule(state).entities[id];
export const selectIsUserLoading = state => selectUserModule(state).status === Statuses.inProgress;
