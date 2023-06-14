import { StyleSheet, Text, View, Image } from 'react-native';
import { imageMap } from '../../../lib/products';
import { BaseButton } from '../../Atoms';

export default function Product({ item, add }) {
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
