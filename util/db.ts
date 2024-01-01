import { hashValue } from '@/helper';
import { v4 as uuidv4 } from 'uuid';
import { User } from '@/globals';

const users: User[] = [];

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

export { users, registerAPI, loginAPI };
