import axios from 'axios';

export async function fetchProducts() {
  try {
    const response = await axios.get(
      `https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems`
    );

    const items = response.data.map((i) => ({
      ...i,
      category: i.category.concat(', Women'),
    }));

    return items;
  } catch (error) {
    console.log(error);
  }
}
