import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FavoritesContext } from '@/context/favorites-context';
import { CartContext } from '@/context/cart-context';
import { BaseButton } from '@/components/Atoms';
import { imageMap } from '@/lib/products';
import { useContext } from 'react';

export default function Product({ item, navigate }) {
  const { addCartItem: add } = useContext(CartContext);
  const { toggleFavorite: toggle, favoriteItems } =
    useContext(FavoritesContext);

  const isFavorite = favoriteItems.find((i) => i.id === item.id);

  return (
    <View style={styles.product}>
      <Pressable
        onPress={() => navigate(item)}
        android_ripple={{ color: '#efeff0' }}
      >
        <Image style={styles.img} source={imageMap[item.name]} />
      </Pressable>
      <Text>{item.name}</Text>
      <Text>{item.price} $</Text>
      <BaseButton onClick={() => add(item)} title='Add to Cart' />
      <Pressable
        style={styles.favoriteButton}
        onPress={() => toggle(item)}
        android_ripple={{ color: '#efeff0' }}
      >
        <Image
          style={[styles.icon, isFavorite && styles.favorite]}
          source={require('@/assets/app/heart.png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    alignItems: 'center',
    marginRight: 16,
    paddingBottom: 16,
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
  favorite: {
    tintColor: 'orange',
  },
  icon: {
    width: 28,
    height: 28,
  },
});
