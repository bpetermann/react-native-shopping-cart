import {
  StyleSheet,
  View,
  Modal,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import { FavoritesContext } from '@/store/context/favorites-context';
import { CartContext } from '@/store/context/cart-context';
import { Container, Heading } from '@/components/Shared';
import Product from '../Products/Product';

import { useContext } from 'react';

export default function Favorites() {
  const { favoriteItems, showFavorites, setShowFavorites } =
    useContext(FavoritesContext);
  const { addToCart: add } = useContext(CartContext);

  return (
    <Modal visible={showFavorites} animationType='fade'>
      <Container>
        <View style={styles.favs}>
          <View style={styles.close}>
            <Pressable onPress={() => setShowFavorites(false)}>
              <Image
                style={styles.img}
                source={require('../../assets/app/close.png')}
              />
            </Pressable>
          </View>
          <Heading>Favorites</Heading>
          <View style={styles.products}>
            <FlatList
              data={favoriteItems}
              renderItem={({ item }) => <Product add={add} item={item} />}
              keyExtractor={({ id }) => id}
            />
          </View>
        </View>
      </Container>
    </Modal>
  );
}

const styles = StyleSheet.create({
  favs: {
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
    paddingHorizontal: 24,
    width: '100%',
    maxWidth: 720,
  },
  products: {
    paddingTop: 24,
  },
  img: {
    width: 28,
    height: 28,
  },
  close: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
  },
});
