import { StyleSheet, View, FlatList } from 'react-native';
import Product from './Product';
import { products } from '../../lib/products';

export default function Products({ category, search, add }) {
  const filteredProducts = () =>
    products.filter((product) => {
      return (
        product.description.toLowerCase().includes(search) &&
        product.category.includes(category)
      );
    });

  return (
    <View style={styles.products}>
      <FlatList
        horizontal
        data={filteredProducts()}
        renderItem={({ item }) => <Product add={add} item={item} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  products: {
    backgroundColor: '#84bce5',
    height: 420,
    padding: 16,
    paddingTop: 24,
  },
});
