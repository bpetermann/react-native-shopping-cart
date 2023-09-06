import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReactNode, createContext, useState } from 'react';

interface UserContext {
  user: { email: string } | null;
  register?: (data: { email: string; name: string; password: string }) => void;
  login?: (email: string) => void;
  getUser: () => void;
}

type User = {
  id: number;
  email: string;
  password: string;
};

const users: User[] = [];

export const AuthContext = createContext<UserContext>({
  user: null,
  register: () => {},
  login: () => {},
  getUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);

  const register = (data: {
    email: string;
    name: string;
    password: string;
  }) => {
    const userIndex = users.findIndex((i) => i.email === data.email);

    if (userIndex < 0) {
      users.push({ ...data, id: Math.floor(Math.random() * Date.now()) });
      login(data.email);
      return true;
    }

    return false;
  };

  const login = (email: string) => {
    const user = users.filter((i) => i.email === email)?.[0];

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

  const storeUser = async (user: string) => {
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
