export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginUser = (data: { email: string; password: string }) => ({
  type: LOGIN,
  payload: data,
});

export const registerUser = (data: { email: string; password: string }) => ({
  type: REGISTER,
  payload: data,
});

export const logout = () => ({
  type: LOGOUT,
});
