import { StyleSheet, View, FlatList } from 'react-native';
import { fetchProducts } from '../../util/http';
import { useEffect, useState } from 'react';
import { Container } from '../Shared';
import Loading from './Loading';
import Product from './Product';

export default function Products({ category, search, add }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const filteredProducts = () =>
    products.filter((product) => {
      return (
        product.description.toLowerCase().includes(search) &&
        product.category.includes(category)
      );
    });

  return (
    <Container bgColor={'#84bce5'}>
      <View style={styles.products}>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            horizontal
            data={filteredProducts()}
            renderItem={({ item }) => <Product add={add} item={item} />}
            keyExtractor={({ id }) => id}
          />
        )}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  products: {
    height: 420,
    padding: 16,
    paddingTop: 24,
    width: '100%',
    maxWidth: 1216,
  },
  img: {
    width: 28,
    height: 28,
  },
});
