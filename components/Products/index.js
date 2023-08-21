import { StyleSheet, View, FlatList } from 'react-native';
import { CartContext } from '@/store/context/cart-context';
import { Container } from '@/components/Shared';
import { fetchProducts } from '@/util/http';
import withLoader from '@/hoc/withLoader';
import { useContext } from 'react';
import Product from './Product';

export function Products({ category, search, data }) {
  const { addCartItem: add } = useContext(CartContext);

  const filteredProducts = () =>
    data.filter((product) => {
      return (
        product.description.toLowerCase().includes(search) &&
        product.category.includes(category)
      );
    });

  return (
    <Container bgColor={'#84bce5'}>
      <View style={styles.products}>
        <FlatList
          horizontal
          data={filteredProducts()}
          renderItem={({ item }) => <Product add={add} item={item} />}
          keyExtractor={({ id }) => id}
        />
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

export default withLoader(Products, fetchProducts);
