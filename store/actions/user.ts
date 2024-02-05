export const REGISTER = 'REGISTER' as const;
export const LOGIN = 'LOGIN' as const;
export const LOGOUT = 'LOGOUT' as const;
export const SET_INITIAL_USER = 'SET_INITIAL_USER' as const;

export const login = (data: { email: string; password: string }) => ({
  type: LOGIN,
  payload: data,
});

export const register = (data: { email: string; password: string }) => ({
  type: REGISTER,
  payload: data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setInitialUser = (data: { email: string }) => ({
  type: SET_INITIAL_USER,
  payload: data,
});
