import { setStoreData, clearStoreData } from '@/helper';
import { LOGIN, LOGOUT, REGISTER, SET_INITIAL_USER } from '../actions';

export type UserState = {
  user: { email: string } | null;
};

export const initialUserState = {
  user: null,
};

type Action = {
  type: string;
  payload?: any;
};

export const userReducer = (
  state: UserState = initialUserState,
  action: Action
) => {
  switch (action.type) {
    case REGISTER:
      setStoreData(action.payload.email, 'user');
      return { ...state, user: { email: action.payload.email } };
    case LOGIN:
      setStoreData(action.payload.email, 'user');
      return { ...state, user: { email: action.payload.email } };
    case LOGOUT:
      clearStoreData('user');
      return { ...state, user: null };
    case SET_INITIAL_USER:
      return { ...state, user: { email: action.payload.email } };
    default:
      return state;
  }
};
