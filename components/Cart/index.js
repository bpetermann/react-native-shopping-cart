import {
  StyleSheet,
  View,
  Modal,
  Pressable,
  Image,
  FlatList,
  Button,
} from 'react-native';
import { CartContext } from '@context/cart-context';
import { Container, Heading } from '@components/Shared';
import CartItem from './CartItem';
import { useContext } from 'react';

export default function Cart() {
  const {
    cartItems,
    amount,
    showCart,
    setShowCart: closeCart,
  } = useContext(CartContext);

  const totalPrice = cartItems
    .reduce(function (acc, prod) {
      return acc + prod.amount * prod.price;
    }, 0)
    .toFixed(2);

  return (
    <Modal visible={showCart} animationType='fade'>
      <Container>
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
              <Heading>Cart ({amount})</Heading>
              <View style={styles.products}>
                <FlatList
                  data={cartItems}
                  renderItem={({ item }) => <CartItem item={item} />}
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
      </Container>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cart: {
    paddingTop: 50,
    alignItems: 'center',
    paddingHorizontal: 24,
    width: '100%',
    maxWidth: 720,
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
