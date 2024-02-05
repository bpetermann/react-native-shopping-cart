import {
  showFavorites,
  selectFavoriteItems,
  selectShowFavorites,
  useFavoritesDispatch,
} from '@/store';
import { Container, Heading, IconButton } from '@/components/Atoms';
import { StyleSheet, View, Modal, FlatList } from 'react-native';
import { useTranslation } from '@/context/i18n-context';
import { Product } from '@/components/Molecules/App';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favoriteItems = useSelector(selectFavoriteItems);
  const show = useSelector(selectShowFavorites);
  const dispatch = useFavoritesDispatch();

  const { t } = useTranslation();

  return (
    <Modal visible={show} animationType='fade'>
      <Container>
        <View style={styles.favs} testID={'favs-modal'}>
          <View style={styles.close}>
            <IconButton
              onClick={() => dispatch(showFavorites(false))}
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
