import { RootState } from '../reducers';

export const selectUsers = (state: RootState) => state.user.users;
