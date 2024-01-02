import 'react-native-get-random-values';
import { hashValue } from '@/helper';
import { v4 as uuidv4 } from 'uuid';
import { User } from '@/globals';

const users: User[] = [];

const mockUser = {
  password: '123456!',
  email: 'john.doe@gmail.com',
};

const registerAPI = (data: { email: string; password: string }) => {
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
    return true;
  }

  return false;
};

const loginAPI = (data: { email: string; password: string }) => {
  const user = users.filter((i) => i.email === data.email)?.[0];

  if (user) {
    if (hashValue(data.password, user.date) === user.password) {
      return true;
    }
  }
  return false;
};

export { users, mockUser, registerAPI, loginAPI };
