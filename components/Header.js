import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import { CartContext } from '@context/cart-context';
import { Container } from '@components/Shared';
import { useContext } from 'react';

export default function Header() {
  const { amount, setShowCart: openCart } = useContext(CartContext);

  return (
    <Container bgColor={'#efeff0'} border>
      <View style={styles.header}>
        <View style={styles.nav}>
          <Image
            style={styles.img}
            source={require('../assets/app/logo.png')}
          />
          <Image
            style={styles.img}
            source={require('../assets/app/search.png')}
          />
          <Image
            style={styles.img}
            source={require('../assets/app/heart.png')}
          />
          <Pressable onPress={() => openCart(true)}>
            <Image
              style={styles.img}
              source={require('../assets/app/cart.png')}
            />
          </Pressable>
          {!!amount && (
            <View style={styles.amount}>
              <Text style={styles.count}>{amount}</Text>
            </View>
          )}
        </View>
        <Image
          style={styles.img}
          source={require('../assets/app/account.png')}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 12,
    paddingHorizontal: 16,
    maxWidth: 1216,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    maxWidth: 320,
  },
  amount: {
    backgroundColor: '#ff6900',
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 15 / 2,
    right: -6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 12,
  },
  img: {
    width: 28,
    height: 28,
  },
});
