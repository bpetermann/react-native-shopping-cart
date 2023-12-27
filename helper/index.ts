import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '@/globals';

export function validEmail(value: string) {
  return new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  ).test(value);
}

export function hashValue(value: string, time: number) {
  return (
    +value
      .split('')
      .map((item) => item.charCodeAt(0))
      .join('') * time
  ).toString();
}

export async function setStoreData(data: Product[], key: string): Promise<void>;

export async function setStoreData(data: string, key: string): Promise<void>;

export async function setStoreData(data: Product[] | string, key: string) {
  const value = JSON.stringify(data);
  try {
    AsyncStorage.setItem(key, value);
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Something went wrong'
    );
  }
}

export async function getStoreData(
  key: string
): Promise<string | Product[] | undefined> {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const data = JSON.parse(value);
      return data;
    }
  } catch (error) {
    error instanceof Error ? error.message : 'Something went wrong';
  }
}

export function clearStoreData(key: string) {
  AsyncStorage.removeItem(key);
}
