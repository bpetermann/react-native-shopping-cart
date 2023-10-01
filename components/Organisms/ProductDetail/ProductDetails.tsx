import { StyleSheet, Text, Image, View, Pressable } from 'react-native';
import { FavoritesContext } from '@/context/favorites-context';
import { useTranslation } from '@/context/i18n-context';
import { CartContext } from '@/context/cart-context';
import { Product } from '@/util/types';
import { useContext } from 'react';

type Props = {
  item: Product;
};

const ProductDetail: React.FC<Props> = ({ item }) => {
  const { toggleFavorite, favoriteItems } = useContext(FavoritesContext);
  const { addCartItem: add } = useContext(CartContext);
  const { t } = useTranslation();

  const isFavorite = favoriteItems.find((i) => i.id === item.id);

  return (
    <>
      <Text style={{ paddingTop: 16 }}>{item.description}</Text>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>{item.name}</Text>
      <Text style={{ paddingTop: 16 }}>€ {item.price} incl. VAT</Text>
      <View style={styles.container}>
        <Pressable
          onPress={() => add(item)}
          style={styles.button}
          android_ripple={{ color: '#efeff0' }}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
            }}
          >
            {t('Add to Cart')}
          </Text>
        </Pressable>
        <Pressable
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(item)}
          android_ripple={{ color: '#efeff0' }}
        >
          <Image
            style={[styles.icon, isFavorite && styles.favorite]}
            source={require('@/assets/app/heart.png')}
          />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
    paddingTop: 32,
  },
  button: {
    backgroundColor: '#000',
    width: '80%',
    padding: 12,
  },

  favoriteButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#666',
  },
  favorite: {
    tintColor: 'orange',
  },
  icon: {
    width: 28,
    height: 28,
  },
});

export default ProductDetail;
