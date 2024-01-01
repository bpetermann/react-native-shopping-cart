import { RootState } from '../reducers';

export const selectUsers = (state: RootState) => state.user.users;

export const selectUser = (state: RootState) => state.user.user;
