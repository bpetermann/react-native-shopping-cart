import { Product } from '@/globals';
import axios from 'axios';

export async function fetchProducts() {
  try {
    const response = await axios.get(
      `https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems`
    );

    const items = response.data.map((i: Product) => ({
      ...i,
      category: i.category.concat(', Women'),
    }));

    return items;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Something went wrong'
    );
  }
}
