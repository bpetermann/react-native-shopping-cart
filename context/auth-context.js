import { createContext, useState } from 'react';

const users = [];

export const AuthContext = createContext({
  register: () => {},
  login: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const register = (data) => {
    const userIndex = users.findIndex((i) => i.email === data.email);
    if (userIndex < 0) {
      users.push(data);
      return true;
    }
  };

  const login = (data) => {
    const user = users.filter((i) => i.email === data.email);
    if (user) {
      setUser(user[0]);
    }
  };

  const value = {
    register: register,
    login: login,
    user: user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
