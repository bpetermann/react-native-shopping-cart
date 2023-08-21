import { StyleSheet, Text, View, Image } from 'react-native';
import { CartContext } from '@context/cart-context';
import { BaseButton } from '@components/Shared';
import { imageMap } from '@lib/products';
import { useContext } from 'react';

export default function Product({ item }) {
  const { addCartItem: add } = useContext(CartContext);

  return (
    <View style={styles.product}>
      <Image style={styles.img} source={imageMap[item.name]} />
      <Text>{item.name}</Text>
      <Text>{item.price} $</Text>
      <BaseButton onClick={() => add(item)} title='Add to Cart' />
    </View>
  );
}

const styles = StyleSheet.create({
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
