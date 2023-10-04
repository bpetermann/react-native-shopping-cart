import { Container, Heading, IconButton } from '@/components/Atoms';
import { StyleSheet, View, Modal, FlatList } from 'react-native';
import { FavoritesContext } from '@/context/favorites-context';
import { useTranslation } from '@/context/i18n-context';
import { Product } from '@/components/Molecules/App';
import { useContext } from 'react';

const Favorites = () => {
  const { favoriteItems, showFavorites, setShowFavorites } =
    useContext(FavoritesContext);
  const { t } = useTranslation();

  return (
    <Modal visible={showFavorites} animationType='fade'>
      <Container>
        <View style={styles.favs} testID={'favs-modal'}>
          <View style={styles.close}>
            <IconButton
              onClick={() => setShowFavorites(false)}
              img={require('@/assets/app/close.png')}
            />
          </View>
          <Heading>
            {t('Favorites')} ({favoriteItems.length})
          </Heading>
          <View style={styles.products}>
            <FlatList
              data={favoriteItems}
              renderItem={({ item }) => <Product item={item} />}
              keyExtractor={({ id }) => id}
            />
          </View>
        </View>
      </Container>
    </Modal>
  );
};

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
    paddingBottom: 48,
  },
  close: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
  },
});

export default Favorites;
