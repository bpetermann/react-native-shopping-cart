import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '@/globals';

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

export async function getStoreData(key: 'user'): Promise<string | undefined>;

export async function getStoreData(
  key: 'favorites' | 'cart'
): Promise<Product[] | undefined>;

export async function getStoreData(
  key: string
): Promise<string | Product[] | undefined> {
  try {
    const value = await AsyncStorage.getItem(key);

    if (!value) return;

    return JSON.parse(value);
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Something went wrong'
    );
  }
}

export function clearStoreData(key: string) {
  AsyncStorage.removeItem(key);
}
