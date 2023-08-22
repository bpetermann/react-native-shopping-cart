import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FavoritesContext } from '@/store/context/favorites-context';
import { CartContext } from '@/store/context/cart-context';
import { BaseButton } from '@/components/Shared';
import { imageMap } from '@/lib/products';
import { useContext } from 'react';

export default function Product({ item }) {
  const { addCartItem: add } = useContext(CartContext);
  const { toggleFavorite: toggle, favoriteItems } =
    useContext(FavoritesContext);

  const isFavorite = favoriteItems.find((i) => i.id === item.id);

  return (
    <View style={styles.product}>
      <Image style={styles.img} source={imageMap[item.name]} />
      <Text>{item.name}</Text>
      <Text>{item.price} $</Text>
      <BaseButton onClick={() => add(item)} title='Add to Cart' />
      <Pressable
        style={styles.favoriteButton}
        onPress={() => toggle(item)}
        android_ripple={{ color: '#efeff0' }}
      >
        <Image
          style={isFavorite ? styles.favorite2 : styles.favorite}
          source={require('../../assets/app/heart.png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    alignItems: 'center',
    marginRight: 16,
    gap: 8,
    position: 'relative',
  },
  img: {
    width: 144,
    height: 184,
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  favorite2: {
    width: 28,
    height: 28,
    filter:
      'invert(40%) sepia(96%) saturate(1660%) hue-rotate(1deg) brightness(103%) contrast(105%)',
  },
  favorite: {
    width: 28,
    height: 28,
  },
});
