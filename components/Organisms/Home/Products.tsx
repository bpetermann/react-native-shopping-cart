import { StyleSheet, View, FlatList } from 'react-native';
import { Product as ProductType } from '@/util/types';
import { CartContext } from '@/context/cart-context';
import { Product } from '@/components/Molecules/App';
import { Container } from '@/components/Atoms';
import { fetchProducts } from '@/util/http';
import withLoader from '@/hoc/withLoader';
import { useContext } from 'react';

type Props = {
  category: string;
  search: string;
  navigate: (item: ProductType) => void;
  data?: ProductType[];
};

const Products: React.FC<Props> = ({ category, search, navigate, data }) => {

  const filteredProducts = () =>
    data?.filter((product) => {
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
          renderItem={({ item }) => <Product item={item} navigate={navigate} />}
          keyExtractor={({ id }) => id}
        />
      </View>
    </Container>
  );
};

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
