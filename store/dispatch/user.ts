import * as userActions from '../actions/user';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

type UserDispatchFunction = (action: UserAction) => void;

type UserAction =
  | ReturnType<typeof userActions.login>
  | ReturnType<typeof userActions.register>
  | ReturnType<typeof userActions.logout>
  | ReturnType<typeof userActions.setInitialUser>;

export const useUserDispatch: () => UserDispatchFunction = () => {
  const dispatch: AppDispatch = useDispatch();

  const userDispatch: UserDispatchFunction = (action) => {
    dispatch(action);
  };

  return userDispatch;
};
