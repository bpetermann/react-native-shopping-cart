import { LOGIN, LOGOUT, REGISTER } from '../actions';
import { setStoreData, hashValue } from '@/helper';
import { v4 as uuidv4 } from 'uuid';
import { User } from '@/globals';

export type UserState = {
  users: User[];
  user: { email: string } | null;
};

export const initialUserState = {
  users: [],
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
      const time = Date.now();

      const user = {
        email: action.payload.email,
        password: hashValue(action.payload.password, time),
        id: uuidv4(),
        date: time,
      };

      const newUsers = [...state.users, user];
      setStoreData(user.email, 'user');
      return { ...state, user: { email: user.email }, users: newUsers };

    default:
      return state;
  }
};
