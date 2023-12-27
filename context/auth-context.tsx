import {
  setStoreData,
  getStoreData,
  clearStoreData,
  hashValue,
} from '@/helper';
import { ReactNode, createContext, useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { User } from '@/globals';

interface UserContext {
  user: { email: string } | null;
  register: (data: { email: string; password: string }) => boolean;
  login: (data: { email: string; password: string }) => boolean;
  getUser: () => void;
  logout: () => void;
}

export const users: User[] = [];

export const AuthContext = createContext<UserContext>({
  user: null,
  register: () => {
    return false;
  },
  login: () => {
    return false;
  },
  getUser: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);

  const register = (data: { email: string; password: string }) => {
    const userIndex = users.findIndex((i) => i.email === data.email);

    if (userIndex < 0) {
      const time = Date.now();

      const user = {
        email: data.email,
        password: hashValue(data.password, time),
        id: uuidv4(),
        date: time,
      };

      users.push(user);
      login(data);
      return true;
    }

    return false;
  };

  const login = (data: { email: string; password: string }) => {
    const user = users.filter((i) => i.email === data.email)?.[0];

    if (user) {
      if (hashValue(data.password, user.date) === user.password) {
        setUser({ email: user.email });
        setStoreData(user.email, 'user');
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    clearStoreData('user');
  };

  const getUser = async () => {
    const user = await getStoreData('user');

    if (typeof user === 'string') {
      setUser({ email: user });
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
