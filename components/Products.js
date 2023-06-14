import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import { products, imageMap } from '../lib/products';

export default function Products({ category }) {
  const filteredProducts = () =>
    products.filter((item) => {
      return item.category.includes(category);
    });

  return (
    <View style={styles.products}>
      <FlatList
        horizontal
        data={filteredProducts()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image style={styles.img} source={imageMap[item.name]} />
            <Text>{item.name}</Text>
            <Text>{item.price} $</Text>
            <Button title='Add to Cart' />
          </View>
        )}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  products: {
    backgroundColor: '#84bce5',
    height: 480,
    padding: 16,
    paddingTop: 24,
  },
  product: {
    alignItems: 'center',
    marginRight: 16,
    gap: 8,
  },
  img: {
    width: 144,
    height: 184,
  },
});
