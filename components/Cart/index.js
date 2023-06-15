import {
  StyleSheet,
  View,
  Modal,
  Pressable,
  Image,
  FlatList,
  Button,
} from 'react-native';
import CartItem from './CartItem';
import { Heading } from '../Shared';

export default function Cart({ show, closeCart, cartItems, add, remove }) {
  const totalPrice = cartItems
    .reduce(function (acc, prod) {
      return acc + prod.amount * prod.price;
    }, 0)
    .toFixed(2);

  const cartAmount = cartItems.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);

  return (
    <Modal visible={show} animationType='fade'>
      <View style={styles.cart}>
        <View style={styles.close}>
          <Pressable onPress={() => closeCart(false)}>
            <Image
              style={styles.img}
              source={require('../../assets/app/close.png')}
            />
          </Pressable>
        </View>
        {!cartItems.length ? (
          <View style={styles.empty}>
            <Button
              title='No items (yet!)'
              color='#ff6900'
              onPress={() => closeCart(false)}
            />
          </View>
        ) : (
          <>
            <Heading>Cart ({cartAmount})</Heading>
            <View style={styles.products}>
              <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                  <CartItem item={item} add={add} remove={remove} />
                )}
                keyExtractor={({ id }) => id}
              />
            </View>

            <View style={styles.total}>
              <Heading>Total Amount</Heading>
              <Heading>{totalPrice} $</Heading>
            </View>
            <Button title='Order' color='#ff6900' />
          </>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cart: {
    paddingTop: 50,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  empty: {
    width: '100%',
    paddingTop: 50,
  },
  close: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
  },
  products: {
    width: '100%',
    paddingTop: 24,
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
  },
  total: {
    padding: 24,
    paddingVertical: 32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 28,
    height: 28,
  },
});
