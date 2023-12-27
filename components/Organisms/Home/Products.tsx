import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Product } from '@/components/Molecules/App';
import { Product as ProductType } from '@/globals';
import { Container } from '@/components/Atoms';
import { fetchProducts } from '@/util/http';
import withLoader from '@/hoc/withLoader';
import { useEffect, useMemo } from 'react';

type Props = {
  category: string;
  search: string;
  navigate: (item: ProductType) => void;
  data: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const Products: React.FC<Props> = ({
  category,
  search,
  navigate,
  data,
  setProducts,
}) => {
  const products = useMemo(
    () =>
      data?.filter((product) => {
        return (
          product.description.toLowerCase().includes(search.toLowerCase()) &&
          product.category.includes(category)
        );
      }),
    [data, category, search]
  );

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const zeroSearch = (
    <View style={{ padding: 24 }}>
      <Text style={{ textAlign: 'center' }}>
        Your search for{' '}
        <Text style={{ fontWeight: '600' }}>{search} </Text>
        did not match any entries
      </Text>
    </View>
  );

  return (
    <Container bgColor={'#84bce5'}>
      <View style={styles.products}>
        {products.length ? (
          <FlatList
            horizontal
            testID='products'
            data={products}
            renderItem={({ item }) => (
              <Product item={item} navigate={navigate} />
            )}
            keyExtractor={({ id }) => id}
          />
        ) : (
          <>{zeroSearch}</>
        )}
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
  zero: {
    paddingTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withLoader(Products, fetchProducts);
