import { setStoreData, getStoreData, clearStoreData } from '@/helper';
import { ReactNode, createContext, useState } from 'react';

interface UserContext {
  user: { email: string } | null;
  register: (data: { email: string; password: string }) => boolean;
  login: (email: string) => boolean;
  getUser: () => void;
  logout: () => void;
}

type User = {
  id: number;
  email: string;
  password: string;
};

const users: User[] = [];

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

  const register = (data: { email: any; password: string }) => {
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
      setStoreData(user.email, 'user');
      return true;
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
