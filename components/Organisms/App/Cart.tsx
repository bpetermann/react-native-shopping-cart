import {
  selectShowCart,
  openCart,
  selectCartItems,
  selectCartAmount,
  useCartDispatch,
} from '@/store';
import { StyleSheet, View, Modal, FlatList, Button } from 'react-native';
import { Container, Heading, IconButton } from '@/components/Atoms';
import { useTranslation } from '@/context/i18n-context';
import { CartItem } from '@/components/Molecules/App';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const showCart = useSelector(selectShowCart);
  const amount = useSelector(selectCartAmount);

  const dispatch = useCartDispatch();

  const totalPrice = cartItems
    .reduce(function (acc, prod) {
      return acc + prod.amount * prod.price;
    }, 0)
    .toFixed(2);
  const { t } = useTranslation();

  return (
    <Modal visible={showCart} animationType='fade'>
      <Container>
        <View style={styles.cart} testID={`cart-modal`}>
          <View style={styles.close}>
            <IconButton
              onClick={() => dispatch(openCart(false))}
              img={require('@/assets/app/close.png')}
            />
          </View>
          {!cartItems.length ? (
            <View style={styles.empty}>
              <Button
                title={t('No items (yet!)')}
                color='#ff6900'
                onPress={() => dispatch(openCart(false))}
              />
            </View>
          ) : (
            <>
              <Heading>
                {t('Cart')} ({amount})
              </Heading>
              <View style={styles.products}>
                <FlatList
                  data={cartItems}
                  renderItem={({ item }) => <CartItem item={item} />}
                  keyExtractor={({ id }) => id}
                />
              </View>

              <View style={styles.total}>
                <Heading>{t('Total Amount')}</Heading>
                <Heading>{totalPrice} $</Heading>
              </View>
              <Button title={t('Order')} color='#ff6900' />
            </>
          )}
        </View>
      </Container>
    </Modal>
  );
};

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
});

export default Cart;
