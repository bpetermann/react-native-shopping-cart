import {
  StyleSheet,
  View,
  Modal,
  Text,
  Pressable,
  Image,
  FlatList,
  Button,
} from 'react-native';

export default function Cart({ show, closeCart, cartItems, add, remove }) {
  const totalPrice = cartItems
    .reduce(function (acc, prod) {
      return acc + prod.amount * prod.price;
    }, 0)
    .toFixed(2);

  return (
    <Modal visible={show} animationType='fade'>
      <View style={styles.cart}>
        <View style={styles.close}>
          <Pressable onPress={() => closeCart(false)}>
            <Image
              style={styles.img}
              source={require('../assets/app/close.png')}
            />
          </Pressable>
        </View>
        <Text style={styles.heading}>Cart (1)</Text>

        <View style={styles.products}>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <View>
                <View style={styles.product}>
                  <Text style={styles.heading}>{item.name}</Text>
                  <View style={styles.amount}>
                    <Pressable onPress={() => add(item)}>
                      <Text style={styles.add}>+</Text>
                    </Pressable>
                    <Pressable onPress={() => remove(item)}>
                      <Text style={styles.delete}>-</Text>
                    </Pressable>
                  </View>
                </View>
                <View style={styles.detail}>
                  <Text>{(item.price * item.amount).toFixed(2)} $</Text>
                  <Text>{item.amount}X</Text>
                </View>
              </View>
            )}
            keyExtractor={({ id }) => id}
          />
        </View>

        <View style={styles.total}>
          <Text style={styles.heading}>Total Amount</Text>
          <Text style={styles.heading}>{totalPrice} $</Text>
        </View>
        <Button title='Order' color='#ff6900' />
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
  close: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
  },
  products: {
    width: '100%',
    paddingTop: 18,
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    paddingRight: 4,
  },
  detail: {
    paddingVertical: 8,
    flexDirection: 'row',
    marginBottom: 18,
    gap: 48,
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  add: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: 'center',
  },
  delete: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    textAlign: 'center',
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
