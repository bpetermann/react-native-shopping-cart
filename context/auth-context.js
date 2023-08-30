import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState } from 'react';

const users = [];

export const AuthContext = createContext({
  register: () => {},
  login: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (data) => {
    const userIndex = users.findIndex((i) => i.email === data.email);

    if (userIndex < 0) {
      users.push({ ...data, id: Math.floor(Math.random() * Date.now()) });
      login(data);
      return true;
    }

    return false;
  };

  const login = (data) => {
    const user = users.filter((i) => i.email === data.email)?.[0];

    if (user) {
      setUser({ email: user.email });
      storeUser(user.email);
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem('user');
  };

  const storeUser = async (user) => {
    const data = JSON.stringify(user);
    try {
      AsyncStorage.setItem('user', data);
    } catch (error) {
      // Error saving data
    }
  };

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const email = JSON.parse(value);
        setUser({ email });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const value = {
    register: register,
    login: login,
    logout: logout,
    user: user,
    getUser: getUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
